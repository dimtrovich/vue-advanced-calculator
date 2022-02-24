import Vue from 'vue'

export type CalculatorMode = 'standard' | 'scientific' | 'date_calculation' | 'currency' | 'length' | 'area' | 'weight_and_mass' | 'hour' | 'data'

export declare class AdvancedCalculator extends Vue {
  /**
   * Identifiant de la calculatrice.
   * 
   * Valeur par défaut: 'vac-<timestamp-in-milliseconds>'
   */
  id: string

  /**
   * Titre de la calculatrice.
   * 
   * Valeur par défaut: 'Vue Advanced Calculator'
   */
  title: string

  /**
   * Description de la calculatrice.
   * 
   * Valeur par défaut: 'An advanced scientific calculator for Vue.js'
   */
  description: string

  /**
   * Mode de calculatrice activé par défaut.
   * 
   * Valeur par défaut: 'standard'
   */
   defaultMode: CalculatorMode

  /**
   * La langue d'affichage des elements
   * 
   * Valeur par défaut: 'fr'
   */
   locale: string
}
