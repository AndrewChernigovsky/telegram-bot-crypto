"use strict";

var list = [{
  id: 1,
  icon: 'bb'
}, {
  id: 2,
  icon: '45b'
}, {
  id: 3,
  icon: '2vc'
}, {
  id: 4,
  icon: '6hd'
}, {
  id: 5,
  icon: 'cbbc'
}, {
  id: 6,
  icon: '1b1b'
}, {
  id: 7,
  icon: 'ccc'
}, {
  id: 8,
  icon: 'cb9b9'
}, {
  id: 9,
  icon: 'obb0'
}, {
  id: 10,
  icon: '1obb01'
}, {
  id: 11,
  icon: '3obb03'
}, {
  id: 12,
  icon: '4obb04'
}];
var list1 = ['bb', '45b', '2vc', '6hd', 'cbbc', '1b1b', 'ccc', 'cb9b9', 'obb0', '1obb01', '3obb03', '4obb04'];
var result = [];
var str = 'zsdfa123xs';
console.log(str.split(''));

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var arr2Result = [];

for (var _i = 0; _i < 5; _i++) {
  result.push(arrayRandElement(list1));
  arr2Result.push(result[_i]);
}

var random_start = 1;
var random_end = arr2Result.length;
allСycles = 5;

for (i = random_start; i <= random_end; i++) {
  result.push(list1[i]);
}

for (countCycles = 1; countCycles <= allСycles; countCycles++) {
  result.splice(Math.random() * result.length, 1)[0];
} // console.log(result, 'result');