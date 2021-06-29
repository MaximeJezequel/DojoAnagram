const anagram = (word1, word2) => {

    let text1=word1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let text2=word2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    //let text1=word1.toLowerCase().split('').filter((elem) => elem !== ' ').sort().join('');
    //let text2=word2.toLowerCase().split('').filter((elem) => elem !== ' ').sort().join('');
    // console.log(text1)
    // console.log(text2)

    // toLowercase() trasnforme les majuscules en minuscules
    // split() transforme la chaine de caracteres en tableau
    // filter() supprimer les elements du tableau qui ne repondent pas au critere de la callback
    // sort() qui trie les elements du tableau dans l'ordre alphabetique
    // join() transforme le tableau en chaine de caracteres
    // le return est implicite dans la fonction callback

    return text1 === text2
    
    // Longer version :
    // if(text1 === text2){
    //     return true
    // }  return false
    // }

};
module.exports = anagram;