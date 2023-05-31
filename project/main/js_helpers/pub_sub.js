// publish-subscribe pattern( or events pattern )

var events = {
  events: {},

  on: function (eventName, ...fn) {
    this.events[eventName] = this.events[eventName] || [];

    for(i=0; i<fn.length; i++) {
      this.events[eventName].push(fn[i]);
    }
  },

  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },

  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};
