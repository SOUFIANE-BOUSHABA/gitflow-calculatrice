const affiche =document.getElementById('aff-inp');
var operation;

function myDis(n){
   affiche.innerHTML+=n;
   if(n=='+' || n=='-' ||n=='*' || n=='/' ){
    operation=n;
   }
  
}

function myEfac(){
    affiche.innerHTML='';
}