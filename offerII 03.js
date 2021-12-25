/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let number = new Array('0');
    for (let i = 1;i <= n;i++ ){
        let binary = i.toString(2);
        number[i] = calculate(binary);
    }
    return number;
};

let calculate = function (n) {
    let cal = 0;
    for (let i = 0; i<n.toString().length;i++){
        if (n.toString()[i]=="1"){
            cal++;
        }
    }
    return cal;
}

console.log(countBits(2))
