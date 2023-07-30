const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
// const passGrade = grades.filter(function(num) {
    const passGrade = grades.filter(num => num>70) 
 
console.log("passing Grade :", passGrade);