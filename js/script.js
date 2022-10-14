const parolaUtente = document.getElementById('parolaUtente')
const bottone = document.getElementById('btnStart');
const soluzione = document.getElementById('soluzione')

bottone.addEventListener('click',isPalindrome);{
    if(isPalindrome === true){
        soluzione.innerText = ' La parola e palidrome'
    }else{
        soluzione.innerText = ' La parola non è palidroma'
    }
}
