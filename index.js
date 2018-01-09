// write your code below!
var name = "Sobmenso"
var holiday = "Independence"
var days = 20

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
}

function happyHolidayTo(holiday, name) {
  if (holiday === 'Independence Day') {
    return "Happy ${holiday}, ${name}!"
  }
}

function holidayCountdown(holiday, days) {
  return "It\'s ${days} days until ${holiday}!"
}
