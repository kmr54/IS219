function add(a = null, b = null) {
     let result = 0;
     if(Array.isArray(a)) {
          a.forEach(function (item) {
               result = add(result, item);
          });
     }
     else {
          result = a + b;
     }
     return result;
}
module.exports = add;