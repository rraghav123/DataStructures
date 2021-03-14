import LinearSearch from './Algorithms/Search/LinearSearch'
import BinarySearch from './Algorithms/Search/BinarySearch';
import DoublyLinkedList from './DataStructures/DoublyLinkedlist.js';
class Foo {
  log() {
    console.log('itsworking')
  }
}

window.LinearSearch = LinearSearch;
window.BinarySearch = BinarySearch;

window.DoublyLinkedList = new DoublyLinkedList();

const foo = new Foo();

foo.log();

