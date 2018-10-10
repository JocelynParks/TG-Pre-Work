function monitorCount(rows, columns) {
  return rows * columns;
}
  function
  costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
};
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Helper functions help break large tasks into smaller because it makes code easier to read. Essentially, they are functions within functions.
