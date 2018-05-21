'use strict';

// class List {
//   constructor(array = []) {
//     this.length = array.length;

//     for(let i =0; i < array.length; i++) {
//       this[i] = array[i];
//     };
//   };
// };
class List {
  constructor() {
    this.length = 0;
  }

  push(thing) {
    this[this.length++] = thing;
    return this.length;
  }

  pop() {
    let lastThing = this[this.length -1];
    if(this.length === 0) {
      return undefined;
    } else {
      delete (this[this.length -1]);
      this.length --;
      return lastThing;
      
    }
  }

  forEach(method,el) {
    for(let i = 0; i < this.length; i++){
      method(el);
      return undefined;
    }
  }

  map(callback) {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
      newArr[i] = callback(this[i]);
    }
    return newArr;
  }

  filter(callback) {
    let newArr =[];
    for(let i = 0; i < this.length; i++) {
      if(this[i] === callback(this[i])) {
        newArr[i] = callback(this[i]);
      } else if(newArr[i] === null) {
        return [];
      }
    }
    return newArr;
  }
}

module.exports = List;
