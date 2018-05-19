'use strice';

class List {
  constructor() {
    this.length = 0;
  }

  pushh(thing) {
    this[this.length++] = thing;
    return this.length;
  }

  popp() {
    let lastThing = this[this.length -1];
    if(this.length === 0) {
      return undefined;
    } else {
      delete (this[this.length -1]);
      this.length --;
      return lastThing;
      
    }
  }
}

//let myList = new List();
// myList.pushh('tamales');
// console.log(myList);
// myList.pushh('tacos');
// console.log(myList);
// myList.popp();
// console.log(myList);
// myList.popp();
// console.log(myList);
// myList.popp();
// console.log(myList);


module.exports = List; 