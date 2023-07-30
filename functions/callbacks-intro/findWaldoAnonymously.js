const findWaldo = (names, found) => {
    names.forEach(function(item, index) {
      if (item === "Waldo") {
        found(index); // execute callback
      }
    });
  };
  
;
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
    console.log("Waldo is located at:", index);
  });