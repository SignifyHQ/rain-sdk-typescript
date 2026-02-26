# Changelog

## 0.1.0-alpha.4 (2026-02-26)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/SignifyHQ/rain-sdk-typescript/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([568931c](https://github.com/SignifyHQ/rain-sdk-typescript/commit/568931c50e5fb67b547afa469fd01e2309cf2b6d))


### Chores

* **internal:** move stringifyQuery implementation to internal function ([3d4b612](https://github.com/SignifyHQ/rain-sdk-typescript/commit/3d4b612e9912de4c289352cc8af09f67ffb4167d))
* **internal:** remove mock server code ([d857135](https://github.com/SignifyHQ/rain-sdk-typescript/commit/d85713519d6a46ce4c034d6dd934cef0b0cad5da))
* update mock server docs ([45f59c1](https://github.com/SignifyHQ/rain-sdk-typescript/commit/45f59c100b5548a0e08c1f451ad891861a673620))

## 0.1.0-alpha.3 (2026-02-17)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/SignifyHQ/rain-sdk-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* **internal/client:** fix form-urlencoded requests ([3a3cd89](https://github.com/SignifyHQ/rain-sdk-typescript/commit/3a3cd8969dd618983b96458f8e0fc4cd9f36fb9b))

## 0.1.0-alpha.2 (2026-02-17)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/SignifyHQ/rain-sdk-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** change package name ([955545e](https://github.com/SignifyHQ/rain-sdk-typescript/commit/955545eff9f63e0bd67768ac18e77daa61168e68))


### Bug Fixes

* **publishing:** update npmjs package name ([25779d8](https://github.com/SignifyHQ/rain-sdk-typescript/commit/25779d8f1852654ea407180551b5b99788747324))

## 0.1.0-alpha.1 (2026-02-13)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/SignifyHQ/rain-sdk-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** manual updates ([a2ad0dd](https://github.com/SignifyHQ/rain-sdk-typescript/commit/a2ad0dd84be85fb90913c1e10ceb32ee8935de72))
* **api:** manual updates ([4cf2617](https://github.com/SignifyHQ/rain-sdk-typescript/commit/4cf2617b19c6a247ff5e9f674b1f60feeb15608c))
* **api:** manual updates ([3f9ceda](https://github.com/SignifyHQ/rain-sdk-typescript/commit/3f9ceda7cea2c40d301023125c800ab526ccc95d))
* **api:** manual updates ([85e92c3](https://github.com/SignifyHQ/rain-sdk-typescript/commit/85e92c326a01b8e75918ce79a1405ea2b69314f7))
* **api:** manual updates ([f1bce16](https://github.com/SignifyHQ/rain-sdk-typescript/commit/f1bce16dee90235f79e32c99e2898524812eed59))
* **api:** update readme ([afe39ea](https://github.com/SignifyHQ/rain-sdk-typescript/commit/afe39ea0f9d0ed8fbbdb1862fef3a42553d5e98c))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([6dba1c7](https://github.com/SignifyHQ/rain-sdk-typescript/commit/6dba1c791766cded90ab9b312e45875d0e3456de))
* **client:** avoid removing abort listener too early ([a68d4b0](https://github.com/SignifyHQ/rain-sdk-typescript/commit/a68d4b046c51e1bd81cc4fd54e563b57d24d8edf))
* **client:** explicitly copy fetch in withOptions ([f2a110c](https://github.com/SignifyHQ/rain-sdk-typescript/commit/f2a110c101220d21827d9502a0cd9a0559f446e2))
* **client:** get fetchOptions type more reliably ([251d540](https://github.com/SignifyHQ/rain-sdk-typescript/commit/251d5404031a12321ccc5b4e9174ed60c3713846))
* **mcp:** correct code tool API endpoint ([79b835f](https://github.com/SignifyHQ/rain-sdk-typescript/commit/79b835fab6ea3c8992dc8e87a403bfe63cfe53e6))
* **mcp:** return correct lines on typescript errors ([e848129](https://github.com/SignifyHQ/rain-sdk-typescript/commit/e8481290652fe2b3fc5a7504c33a80569ac694f6))
* **naming:** change sdk package names ([30b23ae](https://github.com/SignifyHQ/rain-sdk-typescript/commit/30b23ae613b504655805aa17dfa8a804de6e354c))


### Chores

* add docs to RequestOptions type ([7b8e2f3](https://github.com/SignifyHQ/rain-sdk-typescript/commit/7b8e2f3cf18cc4ebbcbb4dcce731ab66a9fe48f1))
* break long lines in snippets into multiline ([9f5c630](https://github.com/SignifyHQ/rain-sdk-typescript/commit/9f5c63035ee3dcc83bb24b1b369e591380ed1163))
* change publish docs url ([3b21a46](https://github.com/SignifyHQ/rain-sdk-typescript/commit/3b21a469577ca2b2a8922473aac40ef76333a3d7))
* **ci:** only run for pushes and fork pull requests ([907e24b](https://github.com/SignifyHQ/rain-sdk-typescript/commit/907e24bc1a76058e7f1ae4f8d6cfc1f5d3ca9d4e))
* **ci:** upgrade `actions/github-script` ([1293e4a](https://github.com/SignifyHQ/rain-sdk-typescript/commit/1293e4af95f70a9cc0edf7a4ad83dce3a80eedfd))
* **client:** do not parse responses with empty content-length ([97ff9f7](https://github.com/SignifyHQ/rain-sdk-typescript/commit/97ff9f7549739ee6cbad50f131cdfd3eacc524dc))
* **client:** fix logger property type ([53a9dd7](https://github.com/SignifyHQ/rain-sdk-typescript/commit/53a9dd7f73eb7098f3257b8b32664787eab82efa))
* **client:** improve path param validation ([9f980f7](https://github.com/SignifyHQ/rain-sdk-typescript/commit/9f980f74a775c75abcf918fd5a143efc282402a3))
* **client:** restructure abort controller binding ([df6459d](https://github.com/SignifyHQ/rain-sdk-typescript/commit/df6459d317864c4d65ce95be7c69abf6132d0c12))
* **internal:** avoid type checking errors with ts-reset ([dde5ab4](https://github.com/SignifyHQ/rain-sdk-typescript/commit/dde5ab4f33af38b6389e962e77e24d0d07b0fc51))
* **internal:** codegen related update ([52d02fb](https://github.com/SignifyHQ/rain-sdk-typescript/commit/52d02fbca41a2f5bb28772137225cb26c91ddd17))
* **internal:** codegen related update ([e072b4b](https://github.com/SignifyHQ/rain-sdk-typescript/commit/e072b4b047ccdaa827a6318ac0cca554ea438562))
* **internal:** codegen related update ([6178266](https://github.com/SignifyHQ/rain-sdk-typescript/commit/6178266ca8b6f7520a670a149c783ff46318a65d))
* **internal:** update `actions/checkout` version ([de9ed03](https://github.com/SignifyHQ/rain-sdk-typescript/commit/de9ed0348a280a671c16f2b688d8892455a37132))
* **internal:** upgrade babel, qs, js-yaml ([a83e173](https://github.com/SignifyHQ/rain-sdk-typescript/commit/a83e173c075333e82ed2e9fc32b8448a10900b5e))
* **internal:** upgrade eslint ([16d5bf8](https://github.com/SignifyHQ/rain-sdk-typescript/commit/16d5bf80cb1f3beb180e3b3dcfde896ad05af10e))
* make some internal functions async ([9ffb910](https://github.com/SignifyHQ/rain-sdk-typescript/commit/9ffb910268df72566d4106f6ab78965b887111e6))
* **ts:** reorder package.json imports ([094791e](https://github.com/SignifyHQ/rain-sdk-typescript/commit/094791ef6a3dfcd6e01cfc93455cd969369c839d))
* update SDK settings ([4148aa3](https://github.com/SignifyHQ/rain-sdk-typescript/commit/4148aa3a83fe2957c82fade0991288b9b0437d6d))
* update SDK settings ([a3e6ceb](https://github.com/SignifyHQ/rain-sdk-typescript/commit/a3e6cebd627d5bc1e01cb95fc4cf58f35e3eb686))
* update SDK settings ([9768a0c](https://github.com/SignifyHQ/rain-sdk-typescript/commit/9768a0cbea36b6895efa303312d4b2a1ee0561e7))
