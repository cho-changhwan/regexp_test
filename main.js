const str = `
010-1234-4567.
man@naver.com
the quick brown The the fox.
aabbcccddd
d`


// const regexp = new RegExp('the','gi')
// g - 해당문자 gi - 대소문자 구별없이
// const regexpp = /the/gi
// console.log(str.match(regexpp))

// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAa'))
// console.log(str)

// const regexp = /the/g
// console.log(str.match(/\.$/gi))
const c = `aaaa@naver.com`;
// const regexp = /.{1,}(?=@)/g
const regexp = /(?<=@).{1,}/g
console.log(str.match(regexp))