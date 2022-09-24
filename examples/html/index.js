const {parse} = require('./peggy')

// const str = `
// <p>12<span>3</span></p>
// `
const str = `
<div id="app">
  <button disabled>
    Count is {{ count }}
  </button>
</div>
`
const ast = parse(str)
console.log(
  // ast,
  JSON.stringify(ast, null, 2)
)
