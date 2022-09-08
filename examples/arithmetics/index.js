const {parse} = require("./peggy");
const {
  Add,
  Mul,
  Integer,
} = require('./helper')

function run(node) {
  if (node instanceof Mul) {
    const leftVal = run(node.left)
    const rightVal = run(node.right)
    if (node.operator === '*') {
      return leftVal * rightVal;
    } else {
      return leftVal / rightVal;
    }
  } else if (node instanceof Add) {
    const leftVal = run(node.left)
    const rightVal = run(node.right)
    if (node.operator === '+') {
      return leftVal + rightVal;
    } else {
      return leftVal - rightVal;
    }
  } else {
    return node.val;
  }
}

function run2(node, cont) {
  if (node instanceof Mul) {
    return run2(node.left, function (leftVal) {
      run2(node.right, function (rightVal) {
        if (node.operator === '*') {
          return cont(leftVal * rightVal);
        } else {
          return cont(leftVal / rightVal);
        }
      })
    })
  } else if (node instanceof Add) {
    return run2(node.left, function (leftVal) {
      run2(node.right, function (rightVal) {
        if (node.operator === '+') {
          return cont(leftVal + rightVal);
        } else {
          return cont(leftVal - rightVal);
        }
      })
    })
  } else {
    cont(node.val)
  }
}

const out = parse(`1+2+3+4+5`)
console.log(
  run(out),
  run2(out, function (result) {
    console.log(result)
  })
)

