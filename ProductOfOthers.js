const productOfOthers = (a) => {
    let left = [];
    for (let i = 0; i <= a.length - 1; i++) {
        if (i === 0) {
            left[i] = 1;
        } else {
         left[i] = a[i - 1] * left[i - 1];
        }
    }
    let right = [];
    for (let i = a.length - 1; i >= 0; i--) {
        if (i === a.length - 1) {
            right[i] = 1;
        } else {
            right[i] = right[i + 1] * a[i + 1];
        }
    }

    let res = [];
    for (let i = 0; i <= a.length - 1; i++) {
        res[i] = left[i] * right[i];
    }
    return res;
}
console.log(productOfOthers([6,9,2,6]));  //output [108,72,324,108]
