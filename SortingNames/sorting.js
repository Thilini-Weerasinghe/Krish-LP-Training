var cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var sim = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var names= ['Thilini', 'Aaaaa','Kasuni', 'Sanduni', 'Sachini', 'Malsha','SANI', 'Kumudu', 'Bhagya', 'Isna','ZZXXXZZ', 'Lakshani', 'Nivedika','Shamal'];

sortingNames(names);
function sortingNames(names){
    nameValue=[]
    for(let x=0;x<names.length;x++){
        let s= names[x];
        var word = s.split('');
        var count=0;
        for(let y=0; y<word.length; y++){
            for(let i=0;i<sim.length;i++){
                if(word[y]== cap[i] || word[y]== sim[i] ){
                    count= count+ (i+1);
                }
            
            }
        }
            var str=""+count;
            var pad="0000000000";
            var newCount=pad.substr(0, pad.length - str.length)+ str;
    
            nameValue.push(newCount+names[x]);
            console.log(nameValue.sort());
            sortedArray=[]
            for(let p=0; p<nameValue.length;p++){
                sortedArray.push(nameValue[p].substring(10,nameValue[p].length));
            }
            console.log(sortedArray);
    }
}