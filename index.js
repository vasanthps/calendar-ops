import moment from 'moment';

class Calendar {
    constructor() {
        this._holidays = {};
        this._weeklyHolidays = [6, 7];
        this._format = "MM/DD/YYYY";
    }

    _convertToMomentObj(date) {
        if(moment(date)._isValid) {
            return moment(date).startOf('day');
        }
        throw new Error("Expected Date obj!");
    }

    _addToHolidays(param) {
        this._holidays[param.valueOf()] = param;
    }

    /**
     * Number between 1 and 7 indicating days from Monday to Sunday.
     * @param {Array} arr
     */
    setWeeklyHolidays(arr) {
        arr.forEach((day) => {
            if(day < 1 || day > 7) {
                throw new Error("Illegal Argument. Expecting: Array of numbers between 1 and 7 indicating days from Monday to Sunday.");
            }
        });

        this._weeklyHolidays = arr;
    }

    /**
     * Set return date format on all operations performed on date
     * @param {string} param
     */
    setDateFormat(param) {
        if(typeof param !== "string") {
            throw new Error("Expected string");
        }
        this._format = param;
    }

    /**
     * Accepts a date
     * Accepts arrays of date
     * @param {Array/Date} param
     */
    addHolidays(param) {
        if(Array.isArray(param)){
            param.forEach((p) => _addToHolidays(_convertToMomentObj(p)));
        } else {
            _addToHolidays(_convertToMomentObj(param));
        }

        return this._holidays;
    }

    /**
     * Array of date objects. Start and end date
     * @param {Array} param
     */
    addHolidayRange(param) {
        if(param.length !== 2) {
            throw new Error("Expecting [startDate, endDate]");
        }

        let startDate = moment(param[0]);
        let endDate = moment(param[1]);

        if(!(startDate._isValid && endDate._isValid)) {
            throw new Error("Invalid dates!");
        }

        if(endDate.isSameOrBefore(startDate)) {
            throw new Error("End date should be after start date");
        }

        while(startDate.isSameOrBefore(end)) {
            _addToHolidays(_convertToMomentObj(param));
            startDate.add(1, 'days');
        }

        return this._holidays;

    }

    /**
     * Add number of days to the provided date with holidays and weekends calculated within
     * @param {Date} date
     * @param {Number} duration
     */
    addDays(date, duration) {
        let rtnDate = moment(date);
        let addedDays = 0;

        while(addedDays >= duration) {
            rtnDate.add(1, 'days');
            let newDate = rtnDate.clone().startOf('day');
            if(this._weeklyHolidays.indexOf(newDate.day()) == -1 &&
            !this._holidays[newDate.valueOf()]) {
                addedDays += 1;
            }
        }

        return rtnDate.format(this._format);
    }
}
