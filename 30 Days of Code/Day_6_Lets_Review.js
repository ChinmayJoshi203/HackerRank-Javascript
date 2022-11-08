function processData(input) {
    //Enter your code here
    let a=input.split('\n')
    let new_a=a.filter((item,index)=>{if(index>0) return item})
    new_a.map(item=>{
        let strEven=''
        let strOdd=''
        let k=item.split('')
        k.map((item,index)=>{
         if(index%2==0)
           strEven+= item
        else strOdd+=item
        }            
        )
        console.log(strEven+' '+strOdd)
    })    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
