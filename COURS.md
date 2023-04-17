# Cours de Typescript

# Chapitre 1 : Introduction à TypeScript



# Pourquoi TypeScript ?

TypeScript offre plusieurs avantages par rapport à JavaScript, notamment :

- **Typage statique** : TypeScript permet de définir des types pour les variables, les fonctions et les objets, ce qui facilite la détection des erreurs de type lors de la phase de développement. Le typage statique peut également améliorer la lisibilité du code et faciliter la compréhension des structures de données.
- **Meilleure intégration avec les IDE** : Les éditeurs de code modernes, tels que Visual Studio Code, tirent parti des informations de type fournies par TypeScript pour offrir une meilleure assistance au développement, comme la complétion automatique du code, la navigation dans le code source et la détection d'erreurs en temps réel.
- **Fonctionnalités avancées** : TypeScript inclut des fonctionnalités avancées telles que les classes, les interfaces, les génériques et les décorateurs, qui peuvent faciliter la création de code modulaire, réutilisable et maintenable.
- **Compatibilité avec JavaScript** : Comme TypeScript est un sur-ensemble de JavaScript, tout code JavaScript valide est également un code TypeScript valide. Cela permet aux développeurs d'adopter progressivement TypeScript dans leurs projets existants.

# TypeScript vs JavaScript

Bien que TypeScript offre plusieurs avantages, il est important de noter que le code TypeScript doit être transpilé en JavaScript pour être exécuté dans les navigateurs ou sur des plateformes telles que Node.js. Le processus de transpilation convertit le code TypeScript en JavaScript compatible avec les normes ECMAScript, ce qui peut ajouter une étape supplémentaire lors du développement et du déploiement.

Cependant, les avantages de TypeScript en termes de robustesse, de lisibilité et de maintenabilité du code l'emportent généralement sur les inconvénients potentiels liés à la transpilation. En fin de compte, le choix d'utiliser TypeScript dépendra des préférences et des exigences de chaque développeur ou équipe de développement.

# Chapitre 2 : Types et variables en TypeScript

Dans ce chapitre, nous aborderons les concepts fondamentaux des types et des variables en TypeScript, ainsi que les opérations et conversions de types.

# 2.1. Typage statique et typage dynamique

Le typage statique est une caractéristique des langages de programmation où les types de variables sont vérifiés et fixés lors de la phase de compilation. TypeScript est un langage à typage statique, ce qui signifie qu'il vérifie les types de données avant l'exécution du code. Cela permet de détecter les erreurs de type plus tôt et d'améliorer la lisibilité du code.

Le typage dynamique, en revanche, est une caractéristique des langages où les types de variables sont vérifiés et déterminés lors de l'exécution du code. JavaScript est un exemple de langage à typage dynamique.

# 2.2. Déclaration et initialisation des variables

En TypeScript, les variables sont déclarées à l'aide des mots-clés let, const ou var. Le typage des variables peut être explicitement défini ou inféré par le compilateur TypeScript.

```typescript
let x: number; // Déclaration d'une variable de type number
x = 5; // Initialisation de la variable

const y: string = "Hello"; // Déclaration et initialisation d'une variable constante de type string

var z = true; // Déclaration et initialisation d'une variable avec typage inféré (boolean)
```

# 2.3. Types primitifs et types complexes

TypeScript distingue les types primitifs des types complexes.

Les types primitifs sont des types de données simples qui ne sont pas composés d'autres types de données. Les types primitifs courants en TypeScript incluent :

- `number`
- `string`
- `boolean`
- `symbol`
- `null`
- `undefined`

Les types complexes sont des types de données composés d'autres types de données, tels que les objets, les tableaux et les fonctions. Les types complexes courants en TypeScript incluent :

- Objets : `{ name: string; age: number }`
- Tableaux : `number[]`, `Array<string>`
- Tuples : `[string, number]`
- Enums : `enum UserRole { Admin, Manager, User }`
- Interfaces : `interface Person { name: string; age: number }`

# 2.4. Opérations et conversions de types

TypeScript permet d'effectuer des opérations et des conversions de types entre différents types de données.

- **Opérations** : Les opérations courantes incluent l'addition, la soustraction, la multiplication, la division, et la concaténation de chaînes. TypeScript vérifie la compatibilité des types lors de la compilation pour éviter les erreurs.

```typescript
let a: number = 5;
let b: number = 10;
let sum: number = a + b;

let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;
```

- **Conversions de types** : TypeScript permet de convertir explicitement des types de données, appelé "casting" de type. Cela peut être utile pour convertir des types primitifs ou pour travailler avec des types complexes.

```typescript
let num: number = 42;
let str: string = num.toString(); // Conversion d'un nombre en chaîne

let strNum: string = "123";
let intNum: number = parseInt(strNum); // Conversion d'une chaîne en nombre entier

let floatNum: string = "123.45";
let parsedFloat: number = parseFloat(floatNum); // Conversion d'une chaîne en nombre à virgule flottante

// Conversion explicite entre types complexes
interface Shape {
	area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
  	return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
  	return this.width * this.height;
  }
}

let shape: Shape;
let circle = new Circle(5);
let rectangle = new Rectangle(5, 10);

shape = circle as Shape; // Casting de type de Circle à Shape
shape = rectangle as Shape; // Casting de type de Rectangle à Shape
```

Dans cet exemple, nous avons converti des types primitifs en utilisant des méthodes telles que `toString()`, `parseInt()` et `parseFloat()`. Ensuite, nous avons montré comment convertir explicitement des types complexes en utilisant le mot-clé `as`.

# Chapitre 3 : Fonctions et classes en TypeScript

Dans ce chapitre, nous aborderons les concepts fondamentaux des fonctions et des classes en TypeScript, ainsi que la portée des variables et l'héritage.

# 3.1. Déclaration et utilisation des fonctions

En TypeScript, les fonctions peuvent être déclarées de différentes manières :

- Fonction nommée :

 ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
```

- Fonction anonyme :
```typescript
let add = function (a: number, b: number): number {
  return a + b;
};
```

- Fonction flechée / Arrow function :
```typescript
let add = (a: number, b: number): number => {
  return a + b;
};
```

# 3.2. Portée des variables et fonctions

La portée des variables et des fonctions dépend du contexte dans lequel elles sont déclarées :

- Portée globale : Les variables et les fonctions déclarées en dehors de toute fonction ou classe sont accessibles partout dans le code.
- Portée locale : Les variables et les fonctions déclarées à l'intérieur d'une fonction ou d'une classe ne sont accessibles qu'à l'intérieur de cette fonction ou de cette classe.

# 3.3. Classes, objets et héritage

Les classes en TypeScript permettent de définir des objets avec des propriétés et des méthodes. Les classes peuvent également hériter d'autres classes en utilisant le mot-clé `extends`.

```typescript
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

let animal = new Animal("Fido");
animal.speak(); // Fido makes a noise.

let dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

```

# 3.4. Interfaces et polymorphisme

Les interfaces en TypeScript permettent de décrire des contrats pour les classes, qui définissent les méthodes et les propriétés que les classes doivent implémenter.

Le polymorphisme est un concept qui permet d'utiliser un seul type pour représenter plusieurs types de classes qui implémentent une interface commune.

```typescript
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  area(): number {
    return 0.5 * this.base * this.height;
  }
}

function printArea(shape: Shape): void {
  console.log(`Area: ${shape.area()}`);
}

let circle = new Circle(5);
let rectangle = new Rectangle(5, 10);
let triangle = new Triangle(5, 8);

printArea(circle); // Area: 78.53981633974483
printArea(rectangle); // Area: 50
printArea(triangle); // Area: 20
```

Dans cet exemple, nous avons défini une interface Shape que les classes Circle, Rectangle et Triangle implémentent. La fonction printArea prend un paramètre de type Shape, ce qui permet d'utiliser différentes classes qui implémentent cette interface. Ainsi, le polymorphisme nous permet d'appliquer la même fonction à plusieurs objets de classes différentes qui partagent la même interface.

# Chapitre 4 : Gestion des exceptions et débogage

Dans ce chapitre, nous aborderons les concepts de la gestion des exceptions et les techniques de débogage en TypeScript.

# 4.1. Syntaxe et utilisation des exceptions

La gestion des exceptions en TypeScript est basée sur la gestion des exceptions en JavaScript. Les exceptions sont des erreurs qui se produisent pendant l'exécution du code. Pour gérer les exceptions, on utilise généralement les instructions `try`, `catch` et `finally`.

```typescript
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Error: Division by zero is not allowed.
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
} finally {
  console.log("Division operation completed.");
}
```

# 4.2. Gestion des erreurs et récupération

Pour gérer les erreurs et récupérer d'une erreur, on utilise généralement les blocs `catch`. Dans l'exemple précédent, nous avons utilisé un bloc `catch` pour gérer l'erreur de division par zéro.

```typescript
try {
  // ... code susceptible de générer une exception ...
} catch (error) {
  // Gestion de l'erreur et récupération
}
```

# 4.3. Techniques de débogage et outils

Le débogage est un processus important pour résoudre les problèmes de votre code. Voici quelques techniques et outils de débogage courants pour TypeScript :

1. **Console.log()** : Utilisez `console.log()` pour afficher des valeurs dans la console et suivre l'exécution du code.
2. **Débogueur intégré** : Utilisez le débogueur intégré de votre IDE ou éditeur de code (par exemple, Visual Studio Code) pour déboguer votre code TypeScript. Vous pouvez définir des points d'arrêt, inspecter les valeurs des variables et exécuter le code pas à pas.
3. **Source maps** : Les source maps sont des fichiers qui permettent de mapper le code TypeScript à son code JavaScript généré. Cela facilite le débogage du code TypeScript directement dans les navigateurs Web qui prennent en charge les source maps.
4. **Outils de développement Web** : Utilisez les outils de développement intégrés dans les navigateurs Web modernes (par exemple, Chrome DevTools, Firefox Developer Tools) pour déboguer et analyser votre code TypeScript.

En combinant ces techniques et outils, vous pouvez déboguer efficacement votre code TypeScript et résoudre les problèmes que vous rencontrez.

Pour les applications NodeJS (coté serveur) nous utiliserons plutôt `pino` ou `winston`

# Chapitre 5 : Modules et espaces de noms

Dans ce chapitre, nous explorerons les concepts des modules et des espaces de noms en TypeScript, et comment ils aident à organiser et structurer le code.

# 5.1. Organisation du code avec les modules

#### Importance de l'organisation et de la modularité du code

L'organisation et la modularité du code sont essentielles pour créer des applications maintenables et évolutives. Les modules permettent de diviser le code en unités logiques et réutilisables, facilitant ainsi la gestion et la compréhension du code.

#### Définition et objectifs des modules

Un module est une unité de code qui contient des fonctions, des classes, des interfaces et des types liés. Les modules ont pour objectif de fournir un moyen d'organiser et de regrouper des fonctionnalités liées, tout en évitant les conflits de noms et en facilitant la réutilisation du code.

#### Syntaxe de déclaration des modules en TypeScript

##### Utilisation des mots-clés import et export

En TypeScript, les modules sont définis à l'aide des mots-clés `import` et `export`. Pour rendre une fonction, une classe, une interface ou un type accessible à d'autres modules, vous devez les exporter. Pour utiliser des membres exportés depuis d'autres modules, vous devez les importer.

##### Exportation de fonctions, classes, interfaces et types

```typescript
// myModule.ts
export function myFunction() {
  console.log("Hello, world!");
}

export class MyClass {
  // ...
}

export interface MyInterface {
  // ...
}

export type MyType = {
  // ...
};
```

##### Importation de membres depuis d'autres modules

```typescript
// main.ts
import { myFunction, MyClass, MyInterface, MyType } from "./myModule";

myFunction();
let obj = new MyClass();
```

# 5.2. Importation et exportation de modules

#### Importation de modules entiers ou de membres spécifiques

```typescript
// Importation de membres spécifiques
import { myFunction, MyClass } from "./myModule";

// Importation du module entier
import * as MyModule from "./myModule";
MyModule.myFunction();
```

#### Exportation par défaut et exportation nommée

```typescript
// myModule.ts
export default function myFunction() {
  console.log("Hello, world!");
}

export class MyClass {
  // ...
}

```

```typescript
// main.ts
import myFunction, { MyClass } from "./myModule";
myFunction();

```

#### Alias pour les membres importés

```typescript
import { myFunction as myFunc, MyClass as MC } from "./myModule";

myFunc();
let obj = new MC();
```

#### Importation dynamique de modules (avec import())

```typescript
async function loadMyModule() {
  const { myFunction } = await import("./myModule");
  myFunction();
}
```

# 5.3. Espaces de noms et encapsulation

#### Définition et utilisation des espaces de noms

Un espace de noms est un moyen d'encapsuler et de regrouper des éléments liés sous un nom unique. Les espaces de noms sont utiles pour éviter les conflits de noms et organiser le code.

#### Syntaxe de déclaration des espaces de noms en TypeScript

```typescript
namespace MyNamespace {
  export function myFunction() {
    console.log("Hello, world!");
  }

  export class MyClass {
    // ...
  }
}

```

#### Encapsulation et visibilité des membres d'un espace de noms

Dans un espace de noms, les membres sont privés par défaut et ne sont accessibles qu'à l'intérieur de l'espace de noms. Pour rendre un membre accessible à l'extérieur de l'espace de noms, utilisez le mot-clé `export`.

```typescript
namespace MyNamespace {
  export function publicFunction() {
    console.log("I am accessible outside the namespace.");
  }

  function privateFunction() {
    console.log("I am accessible only inside the namespace.");
  }
}

```

#### Utilisation des espaces de noms pour organiser et structurer le code

Les espaces de noms peuvent être imbriqués pour créer une structure hiérarchique et organiser le code de manière logique. Pour utiliser un membre d'un espace de noms, vous devez utiliser la syntaxe de qualification des espaces de noms.

```typescript
namespace OuterNamespace {
  export namespace InnerNamespace {
    export function myFunction() {
      console.log("Hello from the inner namespace!");
    }
  }
}

OuterNamespace.InnerNamespace.myFunction();

```

Les espaces de noms étaient une approche courante pour organiser le code TypeScript avant l'introduction des modules ES6. <span style="text-decoration: underline;">**Aujourd'hui, les modules sont généralement préférés aux espaces de noms pour organiser et structurer le code**</span>. Cependant, les espaces de noms peuvent toujours être utiles dans certaines situations, notamment pour organiser des types globaux ou pour créer des bibliothèques qui ne dépendent pas de modules.

# Chapitre 6 : Fonctionnalités avancées

Dans ce chapitre, nous explorerons des fonctionnalités avancées de TypeScript, telles que les génériques, les décorateurs et le mappage de types.

# 6.1. Génériques et programmation générique

#### Concepts de programmation générique

La programmation générique consiste à créer des fonctions, des classes et des interfaces qui peuvent fonctionner avec différents types de données, sans avoir à les spécifier explicitement.

#### Utilisation des génériques en TypeScript

##### Syntaxe des types génériques

En TypeScript, les types génériques sont représentés par des symboles de type (généralement `T`) entre les chevrons (`<` et `>`).

##### Fonctions génériques

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

##### Classes et interfaces génériques

```typescript
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

class GenericClass<T> implements GenericInterface<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

```

##### Contraintes de type (type constraints) et utilisation de extends

```typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

##### Utilisation de types génériques prédéfinis (ex. Array&lt;T&gt;, Promise&lt;T&gt;)

```typescript
let numbers: Array<number> = [1, 2, 3];
let promise: Promise<string> = new Promise((resolve) => resolve("Hello, world!"));
```

# 6.2. Décorateurs et métaprogrammation

#### Concepts de métaprogrammation

La métaprogrammation est une technique qui permet de manipuler et d'étendre le comportement du code à l'aide de métadonnées et de structures de code.

#### Décorateurs en TypeScript

##### Décorateurs de classes, méthodes, propriétés et paramètres

Les décorateurs sont des fonctions spéciales qui peuvent être utilisées pour modifier ou étendre le comportement des classes, des méthodes, des propriétés et des paramètres.

##### Syntaxe et utilisation des décorateurs

```typescript
@myDecorator
class MyClass {
  @myPropertyDecorator
  public myProperty: string;

  @myMethodDecorator
  public myMethod(@myParameterDecorator param: string): void {
    // ...
  }
}

```

##### Création de décorateurs personnalisés

```typescript
function myDecorator(target: Function): void {
  // ...
}

function myPropertyDecorator(target: any, propertyName: string): void {
  // ...
}

function myMethodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor): void {
  // ...
}

function myParameterDecorator(target: any, methodName: string, parameterIndex: number): void {
  // ...
}

```

##### Décorateurs intégrés et décorateurs de bibliothèques tierces

TypeScript n'inclut pas de décorateurs intégrés, mais vous pouvez utiliser des décorateurs de bibliothèques tierces, comme ceux fournis par Angular ou NestJS.

# 6.3. Mappage de types et manipulation de types

#### Manipulation de types en TypeScript

La manipulation de types permet de créer de nouveaux types à partir de types existants en utilisant des opérateurs et des constructions spécifiques.

##### Opérateurs de type keyof, typeof, infer

```typescript
type Keys = keyof { a: number; b: string }; // "a" | "b"
type TypeOfA = typeof { a: number; b: string }["a"]; // number

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

##### Types conditionnels

```typescript
type IsString<T> = T extends string ? true : false;
```

#### Mappage de types

Le mappage de types permet de créer de nouveaux types en transformant les propriétés d'un type existant.

##### Syntaxe et utilisation du mappage de types

```typescript
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

##### Exemples de mappage de types courants (ex. Partial&lt;T&gt;, Readonly&lt;T&gt;)

```typescript
type Partial<T> = { [K in keyof T]?: T[K] };
type Readonly<T> = { readonly [K in keyof T]: T[K] };

type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>; // { name?: string; age?: number }
type ReadonlyUser = Readonly<User>; // { readonly name: string; readonly age: number }
```

# Chapitre 7 : Intégration avec les frameworks et les bibliothèques

Dans ce chapitre, nous verrons comment intégrer TypeScript avec des frameworks et des bibliothèques populaires tels que React, Angular et Vue.js.

# 7.1. Introduction aux frameworks et bibliothèques populaires

#### Aperçu des frameworks et bibliothèques populaires pour le développement web

##### Frontend

- React : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- Angular : Un framework complet pour construire des applications web de bout en bout.
- Vue.js : Un framework progressif pour construire des interfaces utilisateur.

##### Backend

- NestJS

##### Full-stack

- Next.js (React + Backend)
- Nuxt (Vue 3 + backend)

#### Avantages et inconvénients


L'utilisation de TypeScript avec ces frameworks apporte de nombreux avantages, tels que la sécurité des types, l'autocomplétion et une meilleure documentation.

# Chapitre 8 : Bonnes pratiques et conseils pour les projets TypeScript



# 8.1. Bonnes pratiques pour la rédaction de code TypeScript

- **Lisibilité et clarté du code** : Gardez votre code propre et bien organisé pour faciliter la compréhension et la maintenance.
- **Utilisation appropriée des types et des génériques** : Utilisez les types pour garantir la sécurité et la cohérence du code. Utilisez les génériques pour écrire du code réutilisable et flexible.
- **Conventions de nommage pour les variables, fonctions, classes et interfaces** : Suivez des conventions cohérentes pour les noms des variables, fonctions, classes et interfaces (ex. camelCase pour les variables et fonctions, PascalCase pour les classes et interfaces).
- **Commentaires et documentation du code** : Commentez votre code pour expliquer le fonctionnement et l'intention de votre code. Documentez les interfaces et les classes exposées pour faciliter leur utilisation par d'autres développeurs.
- **Utilisation des fonctionnalités TypeScript de manière cohérente** : Utilisez les fonctionnalités de TypeScript, telles que les types, les interfaces, les classes, de manière cohérente et logique.

# 8.2. Utilisation de linters et de formateurs de code

- **Introduction aux linters et formateurs de code (ex. ESLint, Prettier)** : Les linters et formateurs de code vous aident à maintenir la qualité et la cohérence du code en vérifiant les erreurs, les problèmes de style et les mauvaises pratiques.
- **Configuration et intégration de linters et formateurs dans l'environnement de développement** : Configurez les linters et formateurs pour qu'ils s'exécutent automatiquement lors de l'enregistrement ou de la validation du code.
- **Règles de linting courantes pour TypeScript et bonnes pratiques de codage** : Configurez des règles de linting spécifiques à TypeScript pour garantir l'utilisation de bonnes pratiques de codage, telles que l'interdiction de l'utilisation de `any`, l'application de la vérification de nullité stricte, etc.

# 8.3. Tests unitaires et tests d'intégration

- **Introduction aux tests unitaires et d'intégration en TypeScript** : Les tests unitaires et d'intégration garantissent la qualité et la fiabilité du code en vérifiant le comportement des fonctions, des classes et des composants.
- **Utilisation de bibliothèques de tests populaires (ex. Jest, Mocha, Jasmine)** : Utilisez des bibliothèques de tests populaires pour simplifier l'écriture, l'exécution et la vérification des tests.
- **Écriture de tests pour les fonctions, classes et composants TypeScript** : Écrivez des tests pour vérifier le comportement des fonctions, des classes et des composants TypeScript. Utilisez les types pour garantir la sécurité et la cohérence des tests.
- **Exécution et débogage des tests** : Exécutez régulièrement les tests pour détecter les problèmes et les erreurs. Utilisez des outils de débogage pour identifier et résoudre les problèmes.

# MongoDB et Express: astuces



# Ajouter les types sur vos requêtes Express

Pour typer les `params` et `body` des requêtes Express, nous allons utiliser les paramètres génériques de l'interface `Request` de TypeScript. Voici comment procéder :

<p class="callout info">Rappel: req.params est un objet contenant les paramètres d'url (selon la configuration de la route).
Et req.body contient le corps de la requête (POST, PATCH, PUT)</p>

##### 1. Créez des interfaces pour les `params` et `body`

Créez des interfaces pour les types de données que vous attendez dans les `params` et `body` de vos requêtes.

Par exemple, supposons que vous ayez une route pour récupérer un utilisateur par ID et une autre pour créer un nouvel utilisateur :

```typescript
// src/types.ts
interface UserParams {
  userId: string;
}

interface CreateUserBody {
  name: string;
  email: string;
  age: number;
}
```

##### 2. Utilisez les paramètres génériques de l'interface `Request`

Utilisez les interfaces définies à l'étape 1 en tant que paramètres génériques pour l'interface `Request` dans vos gestionnaires de routes.

Par exemple :

```typescript
// src/index.ts
import express, { Request, Response } from 'express';
import { UserParams, CreateUserBody } from './types';

const app = express();
app.use(express.json());

// Route pour récupérer un utilisateur par ID
app.get('/users/:userId', (req: Request<UserParams>, res: Response) => {
  const { userId } = req.params;
  // Récupérez l'utilisateur à partir de la base de données en utilisant userId
  // ...
});

// Route pour créer un nouvel utilisateur
app.post('/users', (req: Request<unknown, unknown, CreateUserBody>, res: Response) => {
  const { name, email, age } = req.body;
  // Créez un nouvel utilisateur dans la base de données en utilisant name, email et age
  // ...
});
```

Notez que `Request` accepte quatre paramètres génériques, dans l'ordre :

1. `P` pour les `params`
2. `ResBody` pour le corps de la réponse
3. `ReqBody` pour le corps de la requête
4. Query pour les variables ajoutées dans l'URL

Dans cet exemple, nous avons utilisé `UserParams` pour les `params` et `CreateUserBody` pour le corps de la requête. Nous avons également utilisé `unknown` pour les types non utilisés (`ResBody` dans notre cas).

Ainsi, vous pouvez maintenant bénéficier d'un typage complet pour les `params` et `body` de vos requêtes Express en utilisant les paramètres génériques de l'interface `Request` de TypeScript.

# MongoDB et Typescript

Ces explications fonctionnent avec le driver mongodb natif, pour mongoose il faut lire leur documentation.

```bash
npm i --save mongodb
```

Nous ajouterons les types via les paramètres génériques de la classe `Collection` de MongoDB en TypeScript, procédez comme suit :

##### 1. Créez une interface qui représente le schéma de la collection que vous souhaitez utiliser.

Par exemple, supposons que vous ayez une collection d'utilisateurs :

```typescript
// src/types.ts
interface User {
  name: string;
  email: string;
  age: number;
  profession?: string;
}
```

##### 2. Utilisez les paramètres génériques de la classe `Collection`

Utilisez l'interface définie à l'étape 1 en tant que paramètre générique pour la classe `Collection` lorsque vous travaillez avec MongoDB.

Par exemple, voici comment vous pourriez vous connecter à la base de données et récupérer des utilisateurs :

```typescript
// src/db.ts
import { MongoClient, Db, Collection } from 'mongodb';
import { User } from './types';

const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

let db: Db;

export async function connectToDb() {
  try {
    await client.connect();
    db = client.db('my_database');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export function getUsersCollection(): Collection<User> {
  return db.collection<User>('users');
}
```

Dans cet exemple, la fonction `getUsersCollection()` renvoie une instance de la collection `users` typée avec l'interface `User`. Cela garantit que toutes les opérations effectuées sur cette collection respectent le schéma de l'interface `User`.

Voici un exemple de la façon dont vous pourriez utiliser la collection typée pour insérer un nouvel utilisateur :

```typescript
// src/index.ts
import express, { Request, Response } from 'express';
import { connectToDb, getUsersCollection } from './db';
import { CreateUserBody, User } from './types';

const app = express();
app.use(express.json());

app.post('/users', async (req: Request<unknown, unknown, CreateUserBody>, res: Response) => {
  const { name, email, age } = req.body;

  try {
    const user: User = {
      name,
      email,
      age,
    };

    const usersCollection = getUsersCollection();
    await usersCollection.insertOne(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la création de l\'utilisateur');
  }
});

app.listen(3000, async () => {
  await connectToDb();
  console.log('Le serveur écoute sur le port 3000');
});
```

En utilisant cette méthode, vous pouvez bénéficier d'un typage complet pour vos collections MongoDB en utilisant les paramètres génériques de la classe `Collection` en TypeScript.

#### Un exemple avec find ou findOne

```typescript
app.get('/users/:userId', async (req: Request<UserParams>, res: Response) => {
  const { userId } = req.params;

  try {
    const usersCollection = getUsersCollection();
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      res.status(404).send('Utilisateur introuvable');
    } else {
      res.json(user); // { "name": "...",  .. }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la recherche de l\'utilisateur');
  }
});
```

# Axios et Typescript

```typescript
// src/api.ts
import axios from 'axios';
import { Book } from './types';

const API_BASE_URL = 'http://localhost:3000';

export async function getAllBooks(): Promise<Book[]> {
  const response = await axios.get<Book[]>(`${API_BASE_URL}/books`);
  return response.data;
}
```

# Exercices



# Exercice 1: Simple conversion

#### Conversion de Celsius en Fahrenheit

Objectif : Créez une fonction TypeScript pour convertir une température en degrés Celsius en degrés Fahrenheit.

##### Instructions :

1. Créez une fonction `celsiusToFahrenheit` qui prend un argument `celsius` de type `number`.
2. Calculez la conversion en utilisant la formule : `fahrenheit = (celsius * 9/5) + 32`.
3. Retournez le résultat sous forme de `number`.
4. Testez la fonction avec plusieurs valeurs de températures en Celsius et vérifiez que la conversion est correcte.

# Exercice 2: Filtrage des nombres pairs

Objectif : Créez une fonction TypeScript pour filtrer les nombres pairs dans un tableau.

##### Instructions :

1. Créez une fonction `filterEvenNumbers` qui prend un argument `numbers` de type `number[]`.
2. Utilisez la méthode `filter()` pour ne conserver que les nombres pairs du tableau.
3. Retournez le tableau filtré.
4. Testez la fonction avec différents tableaux de nombres et vérifiez que seuls les nombres pairs sont retournés.

# Exercice 3: Implémentation d'une interface

Objectif : Créez une classe TypeScript qui implémente une interface définie.

##### Instructions :

1. Créez une interface `Shape` avec une méthode `area()` qui retourne un `number`.
2. Créez une classe `Rectangle` qui implémente l'interface `Shape`.
3. Ajoutez un constructeur à la classe `Rectangle` pour initialiser les propriétés `width` et `height` de type `number`.
4. Implémentez la méthode `area()` dans la classe `Rectangle` pour calculer et retourner l'aire du rectangle.
5. Créez une instance de la classe `Rectangle` et testez la méthode `area()` pour vérifier que le calcul est correct.
6. Répétez les instructions avec une class "Triangle".

# Exercice 4 : Gestion d'une file d'attente générique

Objectif : Créez une classe TypeScript générique pour gérer une file d'attente avec des opérations d'ajout et de suppression d'éléments.

##### Instructions :

1. Créez une classe générique `Queue<T>` avec une propriété privée `elements` de type `T[]` pour stocker les éléments de la file d'attente.
2. Ajoutez une méthode `enqueue(element: T)` pour ajouter un élément à la fin de la file d'attente.
3. Ajoutez une méthode `dequeue(): T | null` pour retirer et renvoyer le premier élément de la file d'attente, ou `null` si la file d'attente est vide.
4. Ajoutez une méthode `isEmpty(): boolean` pour vérifier si la file d'attente est vide.
5. Ajoutez une méthode `size(): number` pour obtenir la taille de la file d'attente.
6. Testez la classe `Queue` avec différents types d'éléments et vérifiez que les opérations de file d'attente fonctionnent correctement.

# Exercice 5 : Gestion d'un carnet d'adresses

Objectif : Créez une application TypeScript pour gérer un carnet d'adresses avec des opérations de recherche, d'ajout, de modification et de suppression de contacts.

##### Instructions :

1. Créez une interface `Contact` avec les propriétés suivantes :
    - `id: string` : identifiant unique du contact
    - `name: string` : nom du contact
    - `email: string` : adresse e-mail du contact
    - `phone?: string` : numéro de téléphone du contact (optionnel)
2. Créez une classe `AddressBook` avec une propriété privée `contacts` de type `Contact[]` pour stocker les contacts.
3. Ajoutez des méthodes pour effectuer les opérations suivantes :
    - Rechercher des contacts par nom, e-mail ou numéro de téléphone
    - Ajouter un nouveau contact
    - Modifier les informations d'un contact existant
    - Supprimer un contact en fonction de son identifiant
4. Gérez les erreurs et les cas particuliers, par exemple les contacts en double ou les contacts inexistants.
5. Testez la classe `AddressBook` avec différents scénarios d'utilisation pour vérifier que les opérations de gestion des contacts fonctionnent correctement.
