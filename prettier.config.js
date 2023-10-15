// I had this in in my prettier.config.js:

// module.exports = {
//   plugins: [require('prettier-plugin-tailwindcss')],
// }
// I removed the require and it works:

// module.exports = {
//   plugins: ['prettier-plugin-tailwindcss'],
// }
module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
};