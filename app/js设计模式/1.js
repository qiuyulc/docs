let count = 0;
function increase() {
    return ++count
}

function decrease() {
    return --count;
}

export default {
    increase,
    decrease,
}