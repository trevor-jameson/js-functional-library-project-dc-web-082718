fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const elem in collection) {
        callback(collection[elem])
      }
      return collection
    },

    map: function(array, callback) {
      let newArr = []
      for (const elem in array) {
        newArr.push(callback(array[elem]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {

      if (arguments.length < 3) {
        acc = 0
      }
      for (const elem in collection) {
        acc = callback(acc, collection[elem], collection)
      }
      return acc
    },

    find: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
