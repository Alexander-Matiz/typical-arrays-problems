
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
  if (array && array.length > 0) {
    let max = array[0];

    for (let i = 0; i <= array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    return max;
  }

  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
