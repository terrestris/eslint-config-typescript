# eslint-config-typescript


1. Install:
```bash
npm i -D @terrestris/eslint-config-typescript 
```

2. Install peerDependenc
Can be omitted for allready existing dependencies.
```
npm i -D eslint@^7
npm i -D @typescript-eslint/eslint-plugin@^4
npm i -D eslint-plugin-react@^7
npm i -D eslint-plugin-react-hooks@^4
npm i -D typescript@^3
```

3. Use config in your `eslintrc.js`
```javascript
module.exports = {
  extends: '@terrestris/eslint-config-typescript'
};
```
