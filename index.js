// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver["revenue"] > revenue );
};

function driverNamesWithRevenueOver(drivers, revenue) {
  qualifyingDrivers = Object.values(driversWithRevenueOver(drivers, revenue));
  return qualifyingDrivers.map(driver => driver['name']);
};

function exactMatch(drivers, property) {
  key = Object.keys(property)[0]
  return matchingDrivers = drivers.filter (driver => driver[key] === property[key]);
}

function exactMatchToList(drivers, property) {
  objList = exactMatch(drivers, property);
  return objList.map(obj => obj["name"]);
}
