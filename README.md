# vue-plugin-installer

A plugin installer for using other library in Vue.js components.

## Install

You should install this library first, there are two ways to install.

```bash
npm install vue-plugin-install # Use NPM
git submodule add https://github.com/EricChoiKR/vue-plugin-installer #  Use Git Submodules
```

## How to use

You can install any library for using on Vue.js components.  
moment.js, lodash, and anything maybe.

### Example

src/plugins/moment.ts

```typescript
import Vue from "vue";
import * as moment from "moment";
import PluginInstaller from "vue-plugin-installer";

Vue.use(new PluginInstaller(Vue, moment, "$moment"));
```
