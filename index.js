// Code your solution in this file

function findMatching(array, str) {
  return array.filter(function(item) {
    return item.toLowerCase() === str.toLowerCase();
  });
}
