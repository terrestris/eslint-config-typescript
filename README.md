# eslint-config-typescript

## Installation

1. Install:

```bash
npm i -D @terrestris/eslint-config-typescript
```

2. Install peerDependencies

Can be omitted for already existing dependencies, also usually the latest version will be installed when omitting the version when running `bun/npm i -D <package>`.

```bash
npm i -D eslint@^9
npm i -D @typescript-eslint/eslint-plugin@^8
npm i -D @stylistic/eslint-plugin@^4
npm i -D typescript@^5
```

Alternatively using bun:

```bash
bun i -D eslint
bun i -D @typescript-eslint/eslint-plugin
bun i -D @stylistic/eslint-plugin
bun i -D typescript
```

3. Use config in your `eslintrc.js`

```javascript
module.exports = {
  extends: '@terrestris/eslint-config-typescript'
};
```

4. Using eslint v9

First of all, make sure you use a recent node version!

After that, you can use a simple config like this to use this with eslint v9:

```js
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends('@terrestris/eslint-config-typescript-react'), {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tsParser,
  },
}];
```

## Release

```bash
npm run release
```
