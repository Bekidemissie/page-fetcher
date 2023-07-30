//Refactor the function findWaldo to use the forEach() method instead of a for loop.
const findWaldo = (names, found) => {
  names.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};

const actionWhenFound = index => {
  console.log("Found Waldo at index " + index + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);