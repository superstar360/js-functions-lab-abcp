// write your code below!
var name = "you"
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
  if (holiday === "Mother's Day" && days === 20) {
      return "It\'s ${days} days until ${holiday}!"
  }
}
