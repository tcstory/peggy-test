const _ = require('lodash');

function getValue(obj, path, defaultValue) {
  const value = _.get(obj, path, defaultValue);

  if (value === null) {
    return defaultValue;
  } else {
    return value;
  }
}

class WS {}

exports.WS = WS;

class Integer {
  constructor(text) {
    this.val = parseInt(text, 10);
  }

  value() {
    return this.value;
  }
}

exports.Integer = Integer

class Add {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

exports.Add = Add;


exports.createAdd = function createAdd(list, node) {
  const operand1 = getValue(list, '0', null);
  const operand2 = getValue(list, '1', null);

  if (list.length === 0) {
    return node;
  }

  if (node.left === null) {
    if (operand1 !== null) {
      node.left = operand1[2]
    }
    if (operand2 !== null) {
      node.right = operand2[2];
    }

    return createAdd(list.slice(2), node)
  } else {
    const cur = new Add(node, operand1[2])

    return createAdd(list.slice(1), cur)
  }

}


class Mul {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

exports.Mul = Mul;

exports.createMul = function createMul(list, node) {
  const operand1 = getValue(list, '0', null);
  const operand2 = getValue(list, '1', null);

  if (list.length === 0) {
    return node;
  }

  if (node.left === null) {
    if (operand1 !== null) {
      node.left = operand1[2]
    }
    if (operand2 !== null) {
      node.right = operand2[2];
    }

    return createMul(list.slice(2), node)
  } else {
    const cur = new Mul(node, operand1[2])

    return createMul(list.slice(1), cur)
  }

}
