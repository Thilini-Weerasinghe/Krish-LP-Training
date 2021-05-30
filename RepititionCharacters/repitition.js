
function repititionCharacters( sen1){
    var sen2= Array.from(sen1).sort().join('');
    // var sortedsent= sen2.sort();
    console.log(sen2);
    
    for(let x=0; x<sen2.length;x++){
     let count=1;
     while(sen2.charAt(x)==sen2.charAt(x+1)){
         count++;
         x++;
     }
     console.log(sen2.charAt(x)+ ":" + count+ " ");
    }
}
repititionCharacters("My-name-is-Thilini")
repititionCharacters("HelloWorld!!!")
repititionCharacters("thilini 1234 thushari 1234")