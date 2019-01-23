const Vue = require("vue");

const momentPlugin: PluginObject<moment.Moment> = {
  install: (vue: VueConstructor<Vue>, options?: object)  => {
    vue.prototype.$moment = moment;
  },
};

Vue.use(momentPlugin);

function PluginInstaller(vue, options, library, pluginName) {
  this.install = () => this.prototype[pluginName] = library
}

module.exports = { PluginInstaller };
