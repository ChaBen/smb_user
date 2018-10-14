# smb_user

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Eslint
vscode 저장시 자동 eslint fix 해주기
vscode 사용자 설정에 아래부분추가
```javascript
"files.autoSave": "off",
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "vue-html",
  {
  "language": "vue",
  "autoFix": true
  }
],
"eslint.run": "onSave",
"eslint.autoFixOnSave": true,
"emmet.includeLanguages": {
  "vue-html": "html",
  "vue": "html"
}
```