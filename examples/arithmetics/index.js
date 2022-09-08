const {parse} = require("./peggy");
const {
  Add,
  Mul,
  Integer,
} = require('./helper')

function run(node) {
  if (node instanceof Mul) {
    const leftVal = run(node.left)
    const rightVal =  run(node.right)
    if (node.operator === '*') {
      return leftVal * rightVal;
    } else {
      return leftVal / rightVal;
    }
  } else if (node instanceof Add) {
    const leftVal = run(node.left)
    const rightVal =  run(node.right)
    if (node.operator === '+') {
      return leftVal + rightVal;
    } else {
      return leftVal - rightVal;
    }
  } else {
    return node.val;
  }
}

const out = parse(`(2 + 2) * 10`)
console.log(
  out,
  run(out)
)

