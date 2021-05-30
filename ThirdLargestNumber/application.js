
let arr = [23,56,78,90.2222,90.2222221,4,90.2222278, 66, 31,54];

findThirdLargestNumber(arr);
// console.log(arr);
console.log("Third largest number in the array is:", arr[2]);

function findThirdLargestNumber(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < 3; i++) {
        let max = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] > arr[max]) {
                max=j; 
            }
         }
         if (max != i) {
             let tmp = arr[i]; 
             arr[i] = arr[max];
             arr[max] = tmp;      
        }
    }
    return arr;
}
