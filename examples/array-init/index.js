const {parse} = require("./peggy");

const result = parse(`{1, {3, 4, {7}}, 5}`)
console.log(
  result,
  // JSON.stringify(result)
)
