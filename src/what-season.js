const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const month = date.getMonth();
  if(!date.getMonth() || !date.getDate() || !date.getYear() || date.getYear() < 1970){
    throw new Error ("Invalid date!");
  }
  if(!date){
    console.log('Unable to determine the time of year!');
  }
  if(date.getMonth() > 11 && date.getMonth() < 0 && date.getDate() > 31 && date.getDate() < 1){
    console.log('Unable to determine the time of year!');
  }
  switch(month){
    case 2:
    case 3:
    case 4:
      console.log('spring');
      break;
    case 5:
    case 6:
    case 7:
      console.log('summer');
      break;
    case 8:
    case 9:
    case 10:
      console.log('autumn');
      break;
    case 0:
    case 1:
    case 11:
      console.log('winter');
      break;
    default:
      console.log('Unable to determine the time of year!');
  }
};
