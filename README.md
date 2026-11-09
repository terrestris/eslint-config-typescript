# eslint-config-typescript

## Installation

1. Install:

```bash
npm i -D @terrestris/eslint-config-typescript
```

2. Install peerDependencies

Can be omitted for already existing dependencies, also usually the latest version will be installed when omitting the version when running `bun/npm i -D <package>`.

```bash
npm i -D eslint@^10
npm i -D typescript-eslint@^8
npm i -D @stylistic/eslint-plugin@beta
npm i -D typescript@^6
```

Alternatively using bun:

```bash
bun i -D eslint
bun i -D typescript-eslint
bun i -D @stylistic/eslint-plugin
bun i -D typescript
```

3. Use config in your `eslint.config.ts` (Flat Config)

```javascript
const terrestrisConfig = require('@terrestris/eslint-config-typescript');

module.exports = [
  ...terrestrisConfig,
  // your own overrides...
];
```

Or using ESM (`eslint.config.mjs`):

```javascript
import terrestrisConfig from '@terrestris/eslint-config-typescript';

export default [
  ...terrestrisConfig,
  // your own overrides...
];
```

## Release

```bash
npm run release
```
