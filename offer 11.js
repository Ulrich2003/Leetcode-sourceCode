/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let min = numbers[0];
    for (let i in numbers){
        if (numbers[i] < min){
            return numbers[i];
        }else {
            min = numbers[i];
        }
    }
    return numbers[0];
};
