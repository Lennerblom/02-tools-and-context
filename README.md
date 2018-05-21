#02-Tools and Context

The **List** class contains six methods that recreate their built in javaScript counterparts.  push(), pop(), forEach(), map(), filter(), and reduce().

The **push()** method has an airty of one, and it adds the given argument onto the end of the array, and adding to the array length.

    let arr = [1,2,3]
    arr.push(4)  expected output = [1,2,3,4]

The **pop()** method has an airty of zero, and it removes and returns the last element from an array.  It reduces the length of the array and will return 'undefined' if invoked on an empty array.

    let arr = [1,2,3]
    arr.pop()  expected output = [1,2]

    let arr = []
    arr.pop()  expected output = undefined

The **forEach()** method executes a given function for every element in the array.  It also returns undefined.
    
    let myList = ['cheese', 'lettuce']
    let shred = (el) => {
      return (`shredded ${el}`);
    };

    myList.forEach(shred)  expected output = ['shredded cheese', 'shredded lettuce']

The **map()** method applies a given function to each element in the array and returns a new array of the same length.

    let arr = [1,2,3]
    let callback = (num) => {
      let newNum = num * 3;
      return newNum;
    };

    arr.map(callback);  expected output = [3,6,9]

The **filter()** method returns an array with only elements that pass through a test.  If no elements pass the test, it will return an empty array [].

    let arr = [1,2,7,13,32]
    let callback = (num) => {
      if(num > 10) {
        return num;
      }
    };
    arr.filter(callback)  expected output = [13,32]

    let arr = [1,2,7,3,9,10]
    let callback = (num) => {
      if(num > 10) {
        return num;
      }
    };
    arr.filter(callback)  expected output = []

The **reduce()** method applies a given function to each array element and accumulates the array; returning a single value.  An optional initial value can be added as the first argument. If reduce() is invoked on an empty array, an error will be given.

    let arr = [1,2,3]
    let method = (el) => {
      let newEl = el * 100;
      return newEl;
    };
    arr.reduce(method)   exxpected output = 600
    arr.reduce(method,4)  exxpected output = 1000

    let arr = []
    let method = (el) => {
      let newEl = el * 100;
      return newEl;
    };
    arr.reduce(method)   exxpected output = TypeError: Reduce of empty array with no initial value