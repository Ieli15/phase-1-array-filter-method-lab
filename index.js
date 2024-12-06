const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
  }

  // matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
   