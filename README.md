# vue-music

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
vue-music
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 2a
│  │  │  └─ 79d1ad07c7b92914208a15e38b5d7e0f963174
│  │  ├─ 40
│  │  │  └─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  ├─ 41
│  │  │  └─ 235286563508e0feb4c451a34b598ef822ec21
│  │  ├─ 55
│  │  │  └─ df315325bff60798291a7a13720ef273f6c3bb
│  │  ├─ 63
│  │  │  └─ eb05f711c8cb5cda45128882fa69c351f105fb
│  │  ├─ 64
│  │  │  └─ afaea7e0f99e8262f35bd394af63c86e2c04b3
│  │  ├─ 65
│  │  │  └─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  ├─ 87
│  │  │  └─ 9051a29739fdfb17ae82ed23b53fac251c2b7e
│  │  ├─ 94
│  │  │  └─ 890dfdda1497124ed564a919f6d7b510790ed2
│  │  ├─ 9d
│  │  │  └─ 446a15a10d556f411c1b05aba0773190828692
│  │  ├─ cc
│  │  │  └─ 64c8894ca30af9cfbbc54ad9fba1ade0cd53e1
│  │  ├─ d5
│  │  │  └─ 620b27c23e58fc206aacb7dc636bcf021dcf4c
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e9
│  │  │  ├─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  │  └─ df268777f9b25b3c199e265eb2dab5c9c483a3
│  │  ├─ f3
│  │  │  └─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  ├─ fe
│  │  │  └─ bd19c147155bfe4e202a01feaaadb174875519
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  ├─ App.vue
│  ├─ assets
│  │  └─ logo.png
│  ├─ base
│  ├─ common
│  │  ├─ fonts
│  │  │  ├─ music-icon.eot
│  │  │  ├─ music-icon.svg
│  │  │  ├─ music-icon.ttf
│  │  │  └─ music-icon.woff
│  │  ├─ image
│  │  │  └─ default.png
│  │  ├─ js
│  │  └─ stylus
│  │     ├─ base.styl
│  │     ├─ icon.styl
│  │     ├─ index.styl
│  │     ├─ mixin.styl
│  │     ├─ reset.styl
│  │     └─ variable.styl
│  ├─ components
│  │  └─ m-header
│  │     ├─ logo@2x.png
│  │     ├─ logo@3x.png
│  │     └─ m-header.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ store
├─ vue.config.js
└─ yarn.lock

```
```
vue-music
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 2a
│  │  │  └─ 79d1ad07c7b92914208a15e38b5d7e0f963174
│  │  ├─ 40
│  │  │  └─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  ├─ 41
│  │  │  └─ 235286563508e0feb4c451a34b598ef822ec21
│  │  ├─ 55
│  │  │  └─ df315325bff60798291a7a13720ef273f6c3bb
│  │  ├─ 63
│  │  │  └─ eb05f711c8cb5cda45128882fa69c351f105fb
│  │  ├─ 64
│  │  │  └─ afaea7e0f99e8262f35bd394af63c86e2c04b3
│  │  ├─ 65
│  │  │  └─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  ├─ 87
│  │  │  └─ 9051a29739fdfb17ae82ed23b53fac251c2b7e
│  │  ├─ 94
│  │  │  └─ 890dfdda1497124ed564a919f6d7b510790ed2
│  │  ├─ 9d
│  │  │  └─ 446a15a10d556f411c1b05aba0773190828692
│  │  ├─ cc
│  │  │  └─ 64c8894ca30af9cfbbc54ad9fba1ade0cd53e1
│  │  ├─ d5
│  │  │  └─ 620b27c23e58fc206aacb7dc636bcf021dcf4c
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e9
│  │  │  ├─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  │  └─ df268777f9b25b3c199e265eb2dab5c9c483a3
│  │  ├─ f3
│  │  │  └─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  ├─ fe
│  │  │  └─ bd19c147155bfe4e202a01feaaadb174875519
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  ├─ App.vue
│  ├─ assets
│  │  └─ logo.png
│  ├─ base
│  ├─ common
│  │  ├─ fonts
│  │  │  ├─ music-icon.eot
│  │  │  ├─ music-icon.svg
│  │  │  ├─ music-icon.ttf
│  │  │  └─ music-icon.woff
│  │  ├─ image
│  │  │  └─ default.png
│  │  ├─ js
│  │  └─ stylus
│  │     ├─ base.styl
│  │     ├─ icon.styl
│  │     ├─ index.styl
│  │     ├─ mixin.styl
│  │     ├─ reset.styl
│  │     └─ variable.styl
│  ├─ components
│  │  └─ m-header
│  │     ├─ logo@2x.png
│  │     ├─ logo@3x.png
│  │     └─ m-header.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ store
├─ vue.config.js
└─ yarn.lock

```