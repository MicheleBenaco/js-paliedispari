import {isPalindrome} from './libreria.js';
const parolaUtente = document.getElementById('parolaUtente')
const bottone = document.getElementById('btnStart');
const showResponse = document.getElementById('soluzione');



// bottone.addEventListener('click', pali());




bottone.addEventListener('click', callBack)
       
  
 function callBack (){
    const result =  isPalindrome(parolaUtente.value);
    if(result === true) {
        showResponse.innerText = 'La parola è palidroma ';    
    }else{
        showResponse.innerText = 'La parola non è palidroma ';
    }

} 

// bottone.addEventListener('click', callBack)