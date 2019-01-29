import Vue, { VueConstructor } from "vue";
import { PluginObject, PluginFunction } from "vue/types/plugin";

declare module PluginInstaller {
  export class PluginInstaller implements PluginObject<any> {
    /**
     * Create plugin installer instance.
     * @param vue Vue.js instance
     * @param library Target library
     * @param pluginName Name for use on components
     * @param options Vue.js plugin options
     */
    constructor(vue: VueConstructor<Vue>, library: any, pluginName: string, options?: object | null);
    /**
     * Install library to plugin.
     * @param vue Vue.js instance
     * @param options Vue.js plugin options
     */
    install(vue: VueConstructor<Vue>, options?: object | null): PluginFunction<any>;
    /**
     * Any property provided by Vue.js
     */
    [key: string]: any;
  }
} 
