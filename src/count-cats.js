const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = '^^';
  matrix = matrix.toString().split(",");
  let sumCats = [];
  if(cats){
    for(let i=0; i < matrix.length; i++){
      if(cats==matrix[i]){
        sumCats.push(matrix[i]);
      }
    }return sumCats.length;
  }return 0;
};
