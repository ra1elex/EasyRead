let substract = document.querySelector('#substract');
let add = document.querySelector('#add');
console.log(substract)
substract.addEventListener("click",function(){
    let output = document.querySelector('#result');
    let result = Number( output.innerHTML )-1;
    if(result >=0){
        output.innerHTML=result;
    }
    console.log(output);
});
add.addEventListener("click",function(){
    let output = document.querySelector('#result');
    let result = Number( output.innerHTML )+1;
    output.innerHTML = result;
    console.log(output);
});
