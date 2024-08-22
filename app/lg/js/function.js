function once(fn) {
    let done = false;
    return function () {
        if (!done) {
            done = true;
            return fn.apply(this, arguments);
        }
    };
}
let pay = once(function (money) {
    console.log(`支付 ${money} RMB`);
});

pay(5);
pay(5);
pay(5);
pay(5);