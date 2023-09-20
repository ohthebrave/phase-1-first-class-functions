function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function map() {
        return 'Bye!'
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return 'see you'
    }
}