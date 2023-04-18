// Voici un petit tutoriel sur les concepts de JavaScript concernant
// les fonctions asynchrones,
// les callbacks,
// et les Promesses.

/**
 * === Section callbacks ===
 *
 * 1. Callbacks
 *
 * Les callbacks sont des fonctions passées en tant qu'argument à une autre fonction et sont exécutées lorsque la fonction principale a terminé son traitement. Les callbacks sont souvent utilisées pour gérer des opérations asynchrones.
 *
 * Exemple de callback:
 */

// Soit on precise les types
type PotentialError = Error | null  | undefined
type FetchDataCallback = (error: PotentialError, data: any) => void

// Soit on type 'callback' en 'Function'
function fetchData(callback: FetchDataCallback) {
  setTimeout(() => {
    const data = 'Données récupérées';
    callback(null, data);
  }, 1000);
}

function processResponse(error: PotentialError, data: any) {
  if (error) {
    console.error('Erreur:', error);
  } else {
    console.log('Données:', data);
  }
}

fetchData(processResponse);

/**
 * === Section Promesses ===
 *
 * 2. Promesses (Promises)
 *
 * Les Promesses sont des objets qui représentent l'achèvement (ou l'échec)
 * d'une opération asynchrone et sa valeur résultante.
 *
 * Une Promesse est dans l'un des trois états suivants :
 *
 *     En attente (pending): L'état initial, ni accomplie, ni rejetée.
 *     Accomplie (fulfilled): L'opération a réussi, et une valeur résultante est disponible.
 *     Rejetée (rejected): L'opération a échoué, et une raison d'échec est disponible.
 *
 * Exemple de Promesse :
 */
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Données récupérées';
      resolve(data);
    }, 1000);
  });
}

fetchData2()
  // le .then prend un callback et est appelé lorsque la promesse est 'fulfilled' (resolved)
  .then((data) => {
    console.log('Données:', data);
  })
  // dans ce cas-ci, nous n'aurons jamais d'erreur car fetchData2 n'appelle jamais 'reject'
  .catch((error) => { // promise 'rejected'
    console.error('Erreur:', error);
  });

const notGood = fetchData2()
// notGood est maintenant une variable de type Promise pending. Meme lorsque la promise sera
// fullfilled, elle ne contiendra jamais la "valeur finale". Elle restera une promise

/**
 * === Async / Await ===
 *
 * 3. Async / Await
 *
 * Async / Await est une syntaxe plus récente pour travailler avec des opérations asynchrones.
 * Elle permet d'écrire un code asynchrone qui ressemble à du code synchrone,
 * rendant le code plus lisible et facile à comprendre.
 *
 * Exemple de Async / Await :
 */
function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Données récupérées';
      resolve(data);
    }, 1000);
  });
}

async function processData3() {
  try {
    const data = await fetchData3();
    console.log('Données:', data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

processData3();
