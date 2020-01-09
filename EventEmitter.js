// create an Event Emitter in JS which includes following methods
// subscribe, unsubscribe, emit
//
// When events are emitted through an emitter instance, all listeners for the given event type are invoked. example:
// var emitter = new EventEmitter();
// emitter.addListener('event', function(x, y) { console.log(x, y); });
// emitter.emit('event', 5, 10);  // Listener prints "5 10".
// Todo:Implement me
// class EventEmitter {
//     constructor() {
//       this.events = new Map();
//     }
// };

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
