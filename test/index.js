import Calendar from '../index';

let calendar = new Calendar();
calendar.setWeeklyHolidays([6, 0]);
calendar.addHolidays([new Date("11/23/2017"),  new Date("11/24/2017")]);
calendar.addHolidays(new Date("12/25/2017"));
calendar.addHolidayRange([new Date("12/30/2017"), new Date("1/2/2018")]);

console.log(calendar.addDays(new Date("11/22/2017"), 10));

console.log(calendar.addDays(new Date("12/22/2017"), 10));