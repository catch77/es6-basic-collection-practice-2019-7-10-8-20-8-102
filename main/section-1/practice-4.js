'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let B = objectB.value;
  let A = collectionA.map(item => item.key);
  console.log(A)
  return A.filter(item => B.includes(item));
}
