//First, let's model the list of dependent Observers a subject may have:

function ObservableList() {
  this.observableList = []
}

ObservableList.prototype.add = function(obj) {
  return this.observableList.push(obj);
}

ObservableList.prototype.count = function() {
  return this.observableList.length;
}

ObservableList.prototype.get = function(index) {
  if(index > -1 && index < this.observableList.length) {
    return this.observableList[index]
  }
}

ObservableList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex;
  while(i < this.observableList.length) {
    if(this.observableList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
}

ObservableList.prototype.removeAt = function(index) {
  this.observableList.splice(index, 1);
}

// Next, let's model the Subject and the ability to add, remove or notify observers on the observer list.

function Subject() {
  this.observers = new ObservableList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
}

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
}

Subject.prototype.notify = function(context) {
  var observerList = this.observers.count()
  for (let i = 0; i < observerList; i++) {
    this.observers.get(i).update(context)
  }
}

// The Observer
function Observer() {
  this.update = function() {
  }
}

// References to our DOM elements

var controlCheckbox = document.getElementById( "mainCheckbox" ),
  addBtn = document.getElementById( "addNewObserver" ),
  container = document.getElementById( "observersContainer" );

// Extend an object with an extension
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

// Concrete Subject

// Extend the controlling checkbox with the Subject class

extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its observers
console.log(controlCheckbox)
controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

function addNewObserver() {
  // Create a new checkbox to be added
  var check = document.createElement('input');
  check.type = 'checkbox'

  // Extend the checkbox with the Observer class
  extend(check, new Observer());

  // Override with custom update behaviour
  check.update = function(value) {
    this.checked = value;
  }

  controlCheckbox.addObserver(check);
  container.appendChild(check);
}
