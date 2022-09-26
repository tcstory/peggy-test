const {parse} = require('./peggy')

const str = `
<p>12<span>3</span></p>
`
// const str = `
// <div id="app" data-nani="nani">
//   <button>click</button>
//   <img src="" alt="">
// </div>
// `

// const str = `
// <img src="">
// `
const ast = parse(str)
console.log(
  // ast,
  JSON.stringify(ast, null, 2)
)
