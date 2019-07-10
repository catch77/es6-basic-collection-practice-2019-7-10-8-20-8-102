'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let B = objectB.value;
console.log(B)
  return collectionA.filter(item => B.includes(item));
}
