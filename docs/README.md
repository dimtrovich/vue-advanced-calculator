An advanced scientific calculator for Vue.js

Vue-advanced-calculator est composant vuejs avec **aucune dependance externe** qui vous permet de disposer d'une calculatrice puissance dans votre application sans vous cassez la tête. 

C'est vrai que j'ai dis qu'il n'a pas besoin de dependance mais, le style est basé sur bootstrap 4, donc il faudra l'avoir et pour avoir les icônes n'oubliez pas font-awesome 😅


# Usage

## NPM
`npm install vue-advanced-calculator`

## Utilisation de la balise script
Téléchargez les fichiers css et js à partir du dossier `dist` ou utilisez directement celui disponible sur github
```html
<link rel="stylesheet" href="https://unpkg.com/vue-advanced-calculator/dist/vue-advanced-calculator.min.css">
<script src="https://unpkg.com/vue-advanced-calculator/dist/vue-advanced-calculator.js"></script>
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
//component code
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
