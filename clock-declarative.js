// [1] Functions for obtaining values
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

// [2] Functions for mutating the Date object
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