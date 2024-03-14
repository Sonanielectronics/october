var RemoveElement = 16

var array1 = [11, 12, 13, 14, 15, 13]

array1 = array1.filter(function(item) {
    return item !== RemoveElement
})

console.log(array1)
