/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/


function sumArr(arrayA, arrayB) {

  // big contiendra le plus grand des deux tableaux
  let {big, little} = arrayA.length > arrayB.length ? {big:arrayA, little:arrayB}:{big:arrayB, little:arrayA}
  // nombre d'element à rajouter à little pour qu'il devienne egal à big
  const diff = big.length - little.length
  // on rempli le tableau qui va être ajouté à little par des zeros.
  const addedElements = new Array(diff).fill(0)
  // on recréé little à partir de little + addedElements
  little = [...little, ...addedElements]

  const results = []

  for (let index = 0; index < big.length; index++) {
    const addition = parseInt(big[index]) + parseInt(little[index])
    results.push(addition.toString())
  }
  
  return results

  /*
  let {big, little} = arrayA.length > arrayB.length ? {big:arrayA, little:arrayB}: {big:arrayB, little:arrayA}
  little = [...little, ...(new Array(big.length - little.length).fill(0))]
  const convertArray = big.map((el, index)=>(parseInt(el) + parseInt(little[index])).toString())
  return convertArray
  */
}

module.exports = sumArr;
