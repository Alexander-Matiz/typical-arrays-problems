
exports.min = function min (array) {
  if (array && array.length > 0) {
    let min = array[0];

    for (let i = 0; i <= array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    return min;
  }

  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
