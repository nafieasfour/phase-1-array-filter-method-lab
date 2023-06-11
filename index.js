
function findMatching(names, searchName) {
  const lowerSearchName = searchName.toLowerCase();

  const matchingDrivers = names.filter(driver =>
    driver.toLowerCase().includes(lowerSearchName)
  );

  return matchingDrivers;
}
function fuzzyMatch(names, prefix) {
  const lowerPrefix = prefix.toLowerCase();
  const matchingDrivers = names.filter(driver =>
    driver.toLowerCase().startsWith(lowerPrefix)
  );

  return matchingDrivers;
}
function matchName(drivers, name) {
  const matchingDrivers = drivers.filter(driver =>
    driver.name === name
  );

  return matchingDrivers;
}








