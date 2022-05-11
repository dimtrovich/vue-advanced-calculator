
<h1 align="center">Vue Advanced Calculator</h1>
<h4 align="center">An advanced scientific calculator for Vue.js</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-advanced-calculator"><img src="https://img.shields.io/npm/v/vue-advanced-calculator.svg"></a>
  <a href="https://www.npmjs.com/package/vue-advanced-calculator"><img src="https://img.shields.io/npm/dt/vue-advanced-calculator.svg"></a>
<a href='https://coveralls.io/github/dimtrovich/vue-advanced-calculator?branch=master'><img src='https://coveralls.io/repos/github/dimtrovich/vue-advanced-calculator/badge.svg?branch=master' alt='Coverage Status' /></a>
  <a href="https://github.com/dimtrovich/vue-advanced-calculator/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <a href="http://img.badgesize.io/dimtrovich/vue-advanced-calculator/master/dist/vue-advanced-calculator.min.js.svg?compression=gzip&style=flat-square">
    <img src="http://img.badgesize.io/dimtrovich/vue-advanced-calculator/master/dist/vue-advanced-calculator.min.js.svg?compression=gzip&style=flat-square">
  </a>
</p>


Vue-advanced-calculator est composant vuejs avec **aucune dependance externe** qui vous permet de disposer d'une calculatrice puissance dans votre application sans vous cassez la tête. 
La calculatrice a été inspirée par celle de Windows 10 et essaie plus ou moins de reproduire les fonctionnalités de cette dernière.

C'est vrai que j'ai dis qu'il n'a pas besoin de dependance mais, le style est basé sur bootstrap 4, donc il faudra l'avoir et pour avoir les icônes n'oubliez pas font-awesome 😅


# Usage

## NPM
`npm install vue-advanced-calculator`

## Utilisation de la balise script
Téléchargez les fichiers css et js à partir du dossier `dist` ou utilisez directement celui disponible sur github
```html
<link rel="stylesheet" href="https://unpkg.com/vue-advanced-calculator/dist/vue-advanced-calculator.min.css">
<script src="https://unpkg.com/vue-advanced-calculator/dist/vue-advanced-calculator.min.js"></script>
```
## Chargement du composant
```js
//Chargement global
import VueAdvancedCalculator from 'vue-advanced-calculator'
import 'vue-advanced-calculator/dist/vue-advanced-calculator.min.css'
Vue.use(VueAdvancedCalculator)

//Chargement local
import {VueAdvancedCalculator} from 'vue-advanced-calculator'
import 'vue-advanced-calculator/dist/vue-advanced-calculator.min.css'

//Intégration du composant
components: {
  VueAdvancedCalculator
}
```
## Template

```html
<vue-advanced-calculator />
```
## Compatibilité

Vue-advanced-calculator fonctionne avec Vue > 2.2, mais l'exemple utilisé dans cette documentation utilise Vue 2.6.

## Props
```js
props: {
  title: {
    type: String,
    default: 'Vue Advanced Calculator'
  },
  description: {
    type: String,
    default: 'An advanced scientific calculator for Vue.js'
  },
  /**
  * Valeurs admissibles: 'standard|scientific|date_calculation|currency|length|area|weight_and_mass|hour|data'
  */
  defaultMode: {
    type: String,
    default: 'standard'
  },
  locale: {
    type: String,
    default: 'fr'
  }
}
```

# Demos
Basic [demo](https://jsfiddle.net/Dimtrovich/xpegj9ys/14/)

# Contribution
Toutes vos contributions sont vivement attendues. Je serai honoré que vous vous joignez à moi pour d'avantage améliorer ce travail.

1. Clonez le depôt
2. executez `npm install`
3. `npm run serve` pour lancer l'exemple de developpement
4. Après avoir fait vos changements, assurez-vous de faire un pull à partir du dépôt distant pour eviter les conflits
5. `npm run build` pour générer les nouveaux bundles js et css
6. Commitez vos changements + les bundles js et css. Ca devrait etre plus facile de tester sur fiddles, codepen etc
7. Ouvrez une demande de fusion. Pour plus d'informations referez-vous à [github forking workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
