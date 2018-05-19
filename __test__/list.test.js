'use strict';

const List = require('../lib/list.js');

describe('List Module', () => {
    
  it('push() returns the updated length of the list', () => {
    let myList = new List();
    myList.pushh('tamales');

    expect(myList.length).toBe(1);
  });

  it('push() adds an element to the list', () => {
    let myList = new List();
    myList.pushh('tamales');

    expect(myList[0]).toBe('tamales');
  });

  it('pop() removes last element in the list', () => {
    let myList = new List(); 
    myList.pushh('tacos');
    myList.pushh('tamales');
    myList.popp();
   
    expect(myList[myList.length -1]).toBe('tacos');
  });

  it('pop() returns the last element in the array', () => {
    let myList = new List(); 
    myList.pushh('tacos');
    myList.pushh('tamales');
    //  myList.popp();

    expect(myList.popp()).toBe('tamales');
  });

  it('pop() returns undefined if list is already empty', () => {

  });
});