
//  export const pali =  function isPalindrome(string) {
//     if (string.length <= 1) {
//       return true;
//     }
  
//     let [firstLetter] = string;
//     let lastLetter = string[string.length - 1];
  
//     if (firstLetter === lastLetter) {
//       let stringWithoutFirstAndLastLetters = string.substring(
//         1,
//         string.length - 1
//       );
//       return isPalindrome(stringWithoutFirstAndLastLetters);
//     } else {
//       return false;
//     }
//   }

  export function isPalindrome(string) {
    string = trasformStringUpperCase(string)
    const parolaRevers = [];
    const lunghezza = string.length;
    for(let i = lunghezza; i > 0; i--){
      parolaRevers.push(string.charAt(i-1));
      
    }
    const stringap = parolaRevers.join('');
    if(stringap == string){
      return true;
    }
    return false;
    
  }

  function trasformStringUpperCase(string){
    return string.toUpperCase();

  }