// [1] Functions for obtaining values
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

// [2] Functions for mutating Date objects
const serializeClockTime = date => ({
	hours: date.getHours(),
	minutes: date.getMinutes(),
	seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
	...clockTime,
	hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
	...clockTime,
	ampm: clockTime > 12 ? "PM" : "AM"
});

// [3] Higher-order functions for creating functions
const display = target => time => target(time);

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
	...clockTime,
	key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});