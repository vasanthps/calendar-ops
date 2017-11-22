# calendar-ops
Wrapper around momentjs for operations around days with configuration of weekends and holidays.

# Usage

Install from npm
----

```bash
npm install calendar-ops --save
```

Import and create a new Calendar object
----

```javascript
import Calendar from 'calendar-ops';

let calendar = new Calendar();

```
Configure weekends / weekly holidays.
----

Defaults to Saturday and Sunday.

```javascript
calendar.setWeeklyHolidays([5]);
```
This code sets weekly holidays to Fridays.
Use array of numbers between 0 to 6 corresponding to Sunday thorugh Saturday.

Configure holidays
----

```javascript
//Array of date objects / date strings
calendar.addHolidays([new Date("11/23/2017"),  new Date("11/24/2017")]);

//Date object / string
calendar.addHolidays(new Date("12/25/2017"));

//Date range - array of two date objects / strings corresponding to start date and end date
calendar.addHolidayRange([new Date("12/30/2017"), new Date("1/2/2018")]);

```

Start adding days
----
```javascript
//Pass a date object / string and number of days to add
calendar.addDays(new Date("11/22/2017"), 10);
```


