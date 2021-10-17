function receivesAFunction(calledFunction) {
    calledFunction();
}

function returnsANamedFunction() {
    return AaronsFunction = () => 1 + 1;
}