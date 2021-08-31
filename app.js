arr = [
    { test: ['a', 'b', 'c', 'd'] },
    { test: ['a', 'b', 'c'] },
    { test: ['a', 'b', 'd'] },
    { test: ['a', 'c', 'd'] },
    { test: ['a', 'b'] },
    { test: ['a', 'c'] },
    { test: ['a', 'd'] },
    { test: ['a', 'b', 'k', 'e', 'e'] },
]

function ret(arr) {
    let newArr = []
    arr.forEach((val) => {
        Object.values(val).forEach((res) => {
            res.forEach(val => newArr.push(val))
        })
    })
    newArr = newArr.filter((item, pos) => newArr.indexOf(item) === pos)
    return newArr
}
console.log(ret(arr))