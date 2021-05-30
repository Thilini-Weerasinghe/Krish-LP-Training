//const arr = [5,3,4,6,9,7,8,10,11,13,12,14,16,17,18,19,20,21];

// const arr2= arr.sort((a,b) => {
//     return a-b;
// });
//console.log(arr2);
findMissingValues([5,3,4,6,9,7,8,10,11,13,12,14,18,17,20,21]);
function findMissingValues(arr){
    missingValues =[]
    for(let x=1; x<=arr.length;x++){
        if(arr.indexOf(x) ===-1 )
        missingValues.push(x);
        }
        console.log(missingValues);
}



