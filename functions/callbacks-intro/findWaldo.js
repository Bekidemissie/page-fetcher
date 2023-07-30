const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(i);   // execute callback
      }
    }
  }
  
  const actionWhenFound = function(i) {
    console.log("Found him at the index of " +i + "!" );
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);