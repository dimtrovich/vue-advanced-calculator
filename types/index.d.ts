import Vue from 'vue'
import { PluginFunction } from "vue";

export function install (vue: typeof Vue): void

export {
  AdvancedCalculator,
} from "./AdvancedCalculator"

import { AdvancedCalculator } from "./AdvancedCalculator"

declare class VueAdvancedCalculator {
  static install: PluginFunction<never>;

  AdvancedCalculator: AdvancedCalculator;
}

export default VueAdvancedCalculator;
