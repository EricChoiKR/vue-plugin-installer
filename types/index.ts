import Vue, { VueConstructor } from "vue";
import { PluginObject } from "vue/types/plugin";

export abstract class PluginInstaller implements PluginObject<any> {
  constructor(vue: VueConstructor<Vue>, options: object, library: any, name: string) { }
  public install(vue: VueConstructor<Vue>, options: object) { }
}
