'use strict';

const List = require('../lib/list.js');

describe('List Module', () => {
    
  it('push() returns the updated length of the list', () => {
    let myList = new List();
    myList.push('tamales');

    expect(myList.length).toBe(1);
  });

  it('push() adds an element to the list', () => {
    let myList = new List();
    myList.push('tamales');

    expect(myList[0]).toBe('tamales');
  });

  it('pop() removes last element in the list', () => {
    let myList = new List(); 
    myList.push('tacos');
    myList.push('tamales');
    myList.pop();
   
    expect(myList[myList.length -1]).toBe('tacos');
  });

  it('pop() returns the last element in the array', () => {
    let myList = new List(); 
    myList.push('tacos');
    myList.push('tamales');

    expect(myList.pop()).toBe('tamales');
  });

  it('pop() returns undefined if list is already empty', () => {
    let myList = new List(); 
    expect(myList.pop()).toBe(undefined);
  });

  it('pop() reduces the length of the list', () => {
    let myList = new List(); 
    myList.push('tacos');
    myList.push('tamales');
    myList.pop();
    expect(myList.length).toBe(1);
  });

  it('forEach() executes the provided function once for each element in the array', () => {
    let myList = new List();
    myList.push('cheese');
    myList.push('lettuce'); 
    let shred = (el) => {
      return (`shredded ${el}`);
    };
    expect(myList.forEach(shred)).toBe(undefined);
  });

  it('map() returns a new array after applying a given function', () => {
    let myList = new List();
    myList.push('cheese');
    myList.push('lettuce');

    let callback = (el) => {
      let newEl = `shredded ${el}`;
      return newEl;
    };

    expect(myList.map(callback)).toEqual([ 'shredded cheese', 'shredded lettuce' ]);
  });

  it('map() returns a new array with the same length as the original array', () => {
    let myList = new List();
    myList.push(2);
    myList.push(5);

    let callback = (num) => {
      let newNum = num * 3;
      return newNum;
    };

    expect(myList.map(callback).length).toBe(2);
  });

  it('filter() returns an array with elements that passed through a test', () => {
    let myList = new List();
    myList.push(12);
    myList.push(22);
    myList.push(7);

    let callback = (num) => {
      if(num > 10) {
        return num;
      }
    };
    
    expect(myList.filter(callback)).toEqual([12,22]);
  });

  it('filter() returns [] if no elements pass the test', () => {
    let myList = new List();
    myList.push(5);
    myList.push(2);
    myList.push(7);

    let callback = (num) => {
      if(num > 10) {
        return num;
      }
    };
    
    expect(myList.filter(callback)).toEqual([]);
  });

  it('reduce() applies a given function to each array element and accumulates the array; returning a single value', () => {
    let myList = new List();
    myList.push(5);
    myList.push(2);
    myList.push(7);

    let method = (el) => {
      let newEl = el * 100;
      return newEl;
    };    
    expect(myList.reduce(method)).toEqual(1400);
  });

  it('reduce() an optional initial value can be added as the first/beginning argument', () => {
    let myList = new List();
    myList.push(5);
    myList.push(2);
    myList.push(7);

    let method = (el) => {
      let newEl = el * 100;
      return newEl;
    };    
    expect(myList.reduce(method, 54)).toEqual(6800);
  });

  it('reduce() returns an error if the applied array is empty', () => {
    let myList = new List();
    myList.push(5);
    myList.pop();
    let msg = ('TypeError: Reduce of empty array with no initial value');

    let method = (el) => {
      let newEl = el * 100;
      return newEl;
    };    
    expect(myList.reduce(method, 54)).toEqual(msg);
  });

});

