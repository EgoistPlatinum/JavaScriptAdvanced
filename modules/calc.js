// IIFE

// const APP = {}
// (function () {
//   const a = 1
//   function add(f, s) {
//     return f + s
//   }
//   function sub(f, s) {
//     return f - s
//   }
//   APP.calc = {
//     add,
//     sub,
//   }
// })();


// commonjs

// function add(f, s) {
//   return f + s
// }
//
// function sub(f, s) {
//   return f - s
// }
//
// module.exports = {
//   add,
//   sub,
// }

//ES6 modules

export function add(f, s) {
  return f + s
}

export function sub(f, s) {
  return f - s
}

// setTimeout(() => {
//   add = function (f, s) {
//     return f * s
//   }
// }, 1500)