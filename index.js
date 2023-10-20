const inputt =document.getElementById('display');
var operation;

function afficher(n){
   inputt.innerHTML+=n;
   if(n=='+' || n=='-' ||n=='*' || n=='/' ){
    operation=n;
   }
  
}

function delet(){
    inputt.innerHTML='';
}