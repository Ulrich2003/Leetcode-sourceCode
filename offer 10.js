/**
 * @param {number} n
 * @return {number}
 */
var map = new Map;
var numWays = function(n) {
    if (n>1){
        if (map.get(n-1)!=undefined && map.get(n-2)==undefined){
            let i = map.get(n-1);
            let j = numWays(n-2);
            map.set(j,j);
            return i + j;
        } else if (map.get(n-1)==undefined && map.get(n-2)!=undefined){
            let i = numWays(n-1);
            let j = map.get(n-2);
            map.set(i,i);
            return i + j;
        }else if (map.get(n-1)==undefined && map.get(n-2)==undefined){
            let i = numWays(n-1);
            let j = numWays(n-2);
            map.set(i,i);
            map.set(j,j);
            return i + j;
        } else {
            return map.get(n-1) + map.get(n-2);
        }
    }
    return 1;
};

console.log(numWays(9))
