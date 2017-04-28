const defaultLayout = require('./default');
const stratifiedLayout = require('./stratified');
const stratifiedBilkentLayout = require('./stratifiedBilkent');

module.exports = new Map()
.set('default', defaultLayout)
.set('stratified', stratifiedLayout)
.set('stratified-bilkent', stratifiedBilkentLayout);
