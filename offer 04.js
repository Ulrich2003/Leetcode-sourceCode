var findNumberIn2DArray = function(matrix, target, i=0, j=0) {
    if (matrix[i][j]===undefined){
        return false;
    }
    if (matrix[i][j]==target){
        return true;
    }else if (matrix.indexOf(i)>target){
        return false;
    }
    if(findNumberIn2DArray(matrix,target,i+1,j+1)){
        return true;
    }
    if(findNumberIn2DArray(matrix,target,i,j+1)){
        return true;
    }
    if(findNumberIn2DArray(matrix,target,i+1,j)){
        return true;
    }
    return false;
};

console.log(
findNumberIn2DArray(
    [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5)
)