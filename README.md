# Vite Template

Base:
https://github.com/yooneskh/vite-tauri-template

ESLint+Prettier:
https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/

Vuex:
https://github.com/infantiablue/vhnews

settings.json:
"editor.formatOnSave": true,

    "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "vue"],
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

## vue3-table-lite
https://linmasahiro.github.io/vue3-table-lite/

## Vite.js

[Vite.js](https://vitejs.dev/) is a new modern bundler for javascript which is blazing fast and includes many sensible defaults.

## Vue 3

[Vue.js](https://vuejs.org/) is an incremental frontend framework which is an absolute joy to work with. It has seen very impressive improvements in version 3 including Composition Api, script setup, dynamic css binding and ... .

## Vuetify 3

[Vuetify](https://vuetifyjs.com/) is arguably the best component library for Vue 3 and is currently in alpha stage but will soon be ready for production. Lots of premade components will make your job as application developer easier and more fun.

### Bonus: Vue Global Api

[Vue Global Api](https://github.com/antfu/vue-global-api) globally registers commonly used composition api functions such as `ref`, `reactive` and ... . makes your `script setup` sections cleaner.

-   **Note:** You only need to install global things such as rust and other os level packages. Any thing related to application itself is already installed and ready for you.

-   Clone repository `git clone https://github.com/yooneskh/vite-tauri-template app-name`

-   `yarn` or `npm i`

-   Modify these files according to your app.
    -   `index.html`
    -   `package.json`
    -   `public/favicon.ico`
    -   `src/assets/logo.*`

## Usage

-   `yarn serve` launches vite and you can test and develop your app in the browser at `http://localhost:8080`.

-   `yarn build:web` only builds the web application and puts it in `./dist` directory. You should not normally want this. Difference of this web app with the one build with normal `yarn build` is that this one uses axios for network calls.

## License

Do whatever you want with it!
