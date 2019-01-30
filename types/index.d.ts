import Vue, { VueConstructor } from "vue";
import { PluginObject, PluginFunction } from "vue/types/plugin";

declare namespace VuePluginInstaller {
  type PluginOptionType = { library: any, name: string };
}

declare class VuePluginInstaller implements PluginObject<VuePluginInstaller.PluginOptionType> {
  install: PluginFunction<VuePluginInstaller.PluginOptionType>;
  [keys: string]: any;
}

export default VuePluginInstaller;
export type PluginOptionType = VuePluginInstaller.PluginOptionType;
