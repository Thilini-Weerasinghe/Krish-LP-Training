//  const word1 = "SILENT";
//  const word2 = "LISTEN";

checkAnagram("SILENT", "LISTEN");
checkAnagram("sign", "sing");
checkAnagram("SILENT", "listen");
checkAnagram("TEA", "EAT");
checkAnagram("INDIA", "DIANI");
checkAnagram("KIT1", "TIK2");
checkAnagram("TENT", "TEN");

 function checkAnagram(word1, word2){
    const arr1= Array.from(word1);
    const arr2= Array.from(word2);

//  console.log(arr1);
//  console.log(arr2);

    if(arr1.length != arr2.length){
     console.log("Invalid input");
     return
    }

 let sortWord1 = arr1.sort();
 let sortWord2 = arr2.sort();

//  console.log(sortWord1);
//  console.log(sortWord2);

 if(sortWord1==sortWord2)
     console.log(word1+ " and "+ word2+" are anagram words");
else 
console.log(word1+ " and "+ word2+" are not anagram words");

 }

 