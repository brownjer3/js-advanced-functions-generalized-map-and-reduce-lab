function map(array, fn) {
    let newArr = []
    array.forEach(element => {
        newArr.push(fn(element))
    })
    return newArr
}

function reduce(array, fn, start) {
    let total, arr;
    if (!!start) {
        total = start
        arr = [...array]
    } else {
        total = array[0]
        arr = array.slice(1)
    }
    
    arr.forEach(element => {
        total = fn(element, total)
    })

    return total
}

// function reduceToTotal(array, start=0) {
//     return array.reduce(((total, amount) => total+amount), start)
// }