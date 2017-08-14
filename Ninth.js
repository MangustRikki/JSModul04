function arrLength(params) {
    if (params === undefined) {
        return "ERROR";

    }
    return params.length;
}

let arr = [2, 3, 4, 5];

// let x = arrLength(arr);

console.log(arrLength(arr));

let arrOne = [];

console.log(arrLength(arrOne));

console.log(arrLength());