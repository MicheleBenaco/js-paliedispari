const parolaUtente = document.getElementById('parolaUtente')
const bottone = document.getElementById('btnStart');
const soluzione = document.getElementById('soluzione');

bottone.addEventListener('click', isPalindrome(){
    if (isPalindrome(parolaUtente.length)) {
        soluzione.innerText = ' La parola è palidroma ';
        
    }else{
        soluzione.innerText = ' La parola non è palidroma ';
    }


})


