class EventEmitter {
    constructor() {
      this.events = new Map();
    }
};

EventEmitter.prototype.subscribe = function (event, listener) {
    this.events.get(event) ?
      this.events.set(event, this.events.get(event).push(listener)) :
      this.events.set(event, []);

};

EventEmitter.prototype.unsubscribe = function (event, listener) {
  let eventList = this.events.get(event);
  let index;

  if (eventList && eventList.length) {
      eventList.forEach((task, i) => {
        if (task === listner) {
           index = i;
        }
      });

    let newList = eventList.splice(index, 1);

    this.events.set(event, newList);
  }
};

EventEmitter.prototype.emit = function (event) {
  let label = this.events.get(event);

  if (label && label.length) {
    label.forEach(item => {
      item(...args);
    })
  }

};
