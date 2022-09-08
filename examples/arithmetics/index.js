const {parse} = require("./peggy");



console.log(
  // parse(`2+(4 * (1+3+4))`),
  parse(`1*(2+3)`)
)

