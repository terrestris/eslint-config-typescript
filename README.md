# eslint-config-typescript

## Installation

1. Install:

```bash
npm i -D @terrestris/eslint-config-typescript
```

2. Install peerDependencies

Can be omitted for already existing dependencies.
```bash
npm i -D eslint@^8
npm i -D @typescript-eslint/eslint-plugin@^6
npm i -D typescript@^5
```

3. Use config in your `eslintrc.js`

```javascript
module.exports = {
  extends: '@terrestris/eslint-config-typescript'
};
```

## Release

```bash
npm run release
```
