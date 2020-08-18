// Convert date strings like '2017/12/02' to 'December 2nd, 2017'
const talkingCalendar = function(date) {
  let months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', 
  '10': 'October', '11': 'November', '12': 'December'}; 
  let year = '';
  let month = '';
  let day = '';

  // break up date string into placeholders
  for (let i = 0; i < date.length; i++) {
    if (i < 4) {
      year += date[i];
    } else if (i > 4 && i < 7) {
      month += date[i];
    } else if (i > 7) {
      day += date[i];
    }
  }
  month = months[month]; // change number of month into name of month
  
  // add 'nd' to day, removing 0 if the date is ex. 02
  if (day[0] === '0') {
    day = day[1];
  }
  day += 'nd';

  return month + ' ' + day + ', ' + year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));