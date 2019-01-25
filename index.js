const Vue = require("vue");

function PluginInstaller(vue, library, pluginName, options) {
  checkArguments(vue, library, pluginName, options);
  this.install = (vue, options) => this.prototype[pluginName] = library
}

function checkArguments(vue, library, pluginName, options) {
  if (!vue || typeof vue !== "object") {
    throw new Error("Vue instance is not an object or cannot found.");
  }
  if (!library || typeof library !== "object") {
    throw new Error("Library is not an object or cannot found.");
  }
  if (!pluginName || typeof pluginName !== "string" || pluginName.length === 0) {
    throw new Error("PluginName is not a string or length is 0.");
  }
  if (["object", "undefined", "null"].indexOf(typeof options) < 0) {
    throw new Error("Options are have to be a object, undefined, or null.");
  }
}

module.exports = PluginInstaller;
