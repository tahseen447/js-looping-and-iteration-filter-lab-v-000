// Code your solution in this file

function findMatching(array, str) {
  return array.filter(function(item) {
    return item.toLowerCase() === str.toLowerCase();
  });
}
function fuzzyMatch(array, str) {
  return array.filter(function(item){
    return item.slice(0, str.length) === str ;
  });
}

function matchName(list, name) {
  if(typeOf(list) === Object)
}
