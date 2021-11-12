"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(dataGenerator);

// the generator function
function dataGenerator() {
  var start,
      end,
      step,
      iterationCount,
      i,
      _args = arguments;
  return regeneratorRuntime.wrap(function dataGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          end = _args.length > 1 && _args[1] !== undefined ? _args[1] : Infinity;
          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          // define logic
          // the variable that will be used to maintain
          // the record of entries read and processed from the 
          // input collection
          iterationCount = 0; // use a loop for reading entries from the collection

          i = start;

        case 5:
          if (!(i < end)) {
            _context.next = 12;
            break;
          }

          // increment the iteration count
          iterationCount++; // yield the record

          _context.next = 9;
          return i;

        case 9:
          i += step;
          _context.next = 5;
          break;

        case 12:
          return _context.abrupt("return", iterationCount);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

; // define a input collection

var numbers = [10, 20, 30, 40, 50, 60, 70]; // define a sequence generation on input collection
// Start from record at 0th index i.e. 10
// go upto the end of array i.e. last index 70
// start reding entries by adding 20 

var generator = dataGenerator(numbers[0], numbers[numbers.length - 1], 20); // start an iteration

var dataReader = generator.next(); // start iterating over the sequence using generator
// the while loop will execute the 'next()' based on the 'for..loop' used by
// the generator function

while (!dataReader.done) {
  console.log("The Current value read-precessed-returned is = ".concat(dataReader.value)); // move to the next

  dataReader = generator.next();
}
