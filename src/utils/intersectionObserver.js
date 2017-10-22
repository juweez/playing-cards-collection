class IntersectionObserverWrapper {
  constructor(options) {
    this.targetCallbackPairs = [];

    this.intersectionObserver = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      options,
    );
  }

  intersectionCallback(entries) {
    entries.forEach((entry) => {
      this.targetCallbackPairs.forEach(([target, callback]) => {
        if (target === entry.target) {
          callback(entry);
        }
      });
    });
  }

  observe(target, callback) {
    this.targetCallbackPairs.push([target, callback]);
    this.intersectionObserver.observe(target);
  }

  unobserve(targetToUnobserve) {
    let isTargetObserved = false;

    this.targetCallbackPairs = this.targetCallbackPairs.filter((pair) => {
      const [target] = pair;

      if (targetToUnobserve === target) {
        isTargetObserved = true;
      }

      return targetToUnobserve !== target;
    });

    if (isTargetObserved) {
      this.intersectionObserver.unobserve(targetToUnobserve);
    }
  }

  disconnect() {
    this.intersectionObserver.disconnect();
  }

  takeRecords() {
    this.intersectionObserver.takeRecords();
  }
}

export default (function IntersectionObserver() {
  const isSupported = window.IntersectionObserver;

  if (!isSupported) {
    return {
      isSupported: false,
    };
  }

  const intersectionObserver = new IntersectionObserverWrapper({
    rootMargin: '20%',
  });

  return {
    isSupported: true,

    observe: (target, callback) => {
      intersectionObserver.observe(target, (entry) => {
        if (entry.intersectionRatio > 0) {
          intersectionObserver.unobserve(target);
          callback();
        }
      });
    },

    unobserve: (target) => {
      intersectionObserver.unobserve(target);
    },
  };
}());
