var pubSub = {}
(function(myObject) {
  // Storage for topics that can be broadcast
  // or listened to
  var topics = {}

  // A topic Identifier
  var subUid = -1;

  // Publisher or broadcast events of interest
  // which a specific topic name and arguments
  // such as the data to pass along
  myObject.publish = function(topic, args) {
    if(!topics[topic]) {
      return false
    }
    var subscribers = topics[topic], len = subscribers ? subscribers.length : 0;
    while(len--) {
      subscribers[len].func(topic, args);
    }
    return this;
  }

  // Subscribe to events of interest
  // with a specific topic name and a
  // callback function, to be executed
  // when the topic/event is observed
})()

// A very simple new mail handler

// A count to number of messages recieved
var mailCounter = 0;

// Initialize Subscribers that will listen out for a topic
// with the name "input/newMessage"

var subscriber1 = subscribe('inbox/newMessage', function(topic, data) {
  // log the topic
   console.log("A new message was received ", topic);
   // use the data that was passed from our subject
  // to display a message preview to the user
})

var subscriber2 = subscribe('inbox/newMessage', function(topic, data) {
  mailCounter += 1;
})

publish("inbox/newMessage", [{
  sender: 'hello@google.com',
  body: "Hey there! How are you doing today?"
}]);

// We could then at a later point unsubscribe our subscribers
// from receiving any new topic notifications as follows:
// unsubscribe( subscriber1 );
// unsubscribe( subscriber2 );
