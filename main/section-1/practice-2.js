'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let B = [];
  collectionB.map(item => B = [...B, ...item])
  return collectionA.filter(item => B.includes(item));
}
