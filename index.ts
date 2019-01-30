import Vue, { VueConstructor } from "vue";
import { PluginFunction, PluginObject } from "vue/types/plugin";
import { PluginOptionType } from "./types";

export const VuePluginInstaller: PluginObject<PluginOptionType> = {
  install: (vue: VueConstructor<Vue>, options?: PluginOptionType) => {
    if (!options) {
      throw new Error("Cannot found options.");
    }
    if (!options.library || typeof options.library !== "object") {
      throw new Error("Cannot found options.library or it is not an object.");
    }
    if (!options.name || typeof options.name !== "string") {
      throw new Error("Cannot found options.name or it is not a string.");
    }
    vue.prototype[options.name] = options.library;
  }
};

export default VuePluginInstaller;
