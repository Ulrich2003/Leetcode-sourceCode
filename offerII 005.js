/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++){
        for (let j = i+1;j < words.length; j++){
            if (compareCharacter(words[i],words[j])!=true){
                let temp = words[i].length*words[j].length
                if (temp>maxLength){
                    maxLength = temp;
                }
            }
        }
    }
    return maxLength;
};

var compareCharacter = function (one,two){
    for (let i = 0; i<one.length;i++){
        if (two.includes(one[i]))return true;
    }
}

