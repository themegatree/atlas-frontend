const sortByPropAsc = (array, prop) => array.sort((a, b) => (a[prop] < b[prop]) ? 1 : -1)
const sortByPropDesc = (array, prop) => array.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1)

module.exports = {
  sortByPropAsc: sortByPropAsc,
  sortByPropDesc: sortByPropDesc
}