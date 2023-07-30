 //function 
//raisinAlarm(cookie)
// an array [🍫🍇]
// for(item of cookie) 
//if true return "Raisin alert!"
// if false ,return "All good!"
// result  
const raisinAlarm = function(cookie){
  for(let i = 0; i < cookie.length; i++){
    if(cookie[i] === "🍇" ){
      return "Raisin alert!";
    }
  }
  return "All good!";
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

