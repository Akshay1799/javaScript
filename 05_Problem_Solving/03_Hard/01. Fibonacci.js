// function fibonacci(n){
//     if(n<2) return n;

//     let a = 0;
//     let b = 1;
//     let count = 2;

//     while (count <= n) {
//         let temp = b;
//         b = b + a;
//         a = temp;
//         count++;
//     }

//     return b;
// }

// console.log(fibonacci(3));


function fib(n){
    if(n<2) return n;

    let first = 0;
    let second = 1;

    for (let i = 2; i <=n; i++) {
        let temp = second;
        second = second + first;
        first  = temp;
    }
    return second;
}

console.log(fib(8));
