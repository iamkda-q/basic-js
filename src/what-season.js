const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');

  // if (!date) {
  //   return 'Unable to determine the time of year!';
  // }

  // if (!(date instanceof Date)) {
  //   throw new Error("Invalid date!");
  // }

  // if (Object.prototype.toString.call(date) !== "[object Date]") {
  //   throw new Error("Invalid date!");
  // }
  // // console.log(date.prototype.isPrototypeOf(Date));

  //   const d = date.getMonth();
  //   const season =
  //       typeof d === "number" && d >= 0 && d <= 11
  //           ? d < 2 || d == 11
  //               ? "winter"
  //               : d < 5
  //               ? "spring"
  //               : d < 8
  //               ? "summer"
  //               : d < 11
  //               ? "autumn"
  //               : "Invalid date!"
  //           : "Invalid date!";

  //           return season;
  //   throw new Error();
}

module.exports = {
    getSeason,
};
