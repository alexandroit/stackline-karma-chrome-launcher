# Upstream review

Based on karma-chrome-launcher@3.2.0, source [e92a2b4c19d43fe47a3322a31f72d2a5bfcf77b0](https://github.com/karma-runner/karma-chrome-launcher/commit/e92a2b4c19d43fe47a3322a31f72d2a5bfcf77b0). The registry gitHead source manifest contains the previous semantic-release version, but every upstream published runtime file matches this commit byte-for-byte. Only package metadata differs in the upstream tarball, whose integrity was checked independently.

## Issue triage (2026-09-29)

- [#291: Enterprise user-data-dir](https://github.com/karma-runner/karma-chrome-launcher/issues/291): Preserve configurable chromeDataDir and test argument generation.
- [#158: Root sandbox startup](https://github.com/karma-runner/karma-chrome-launcher/issues/158): CI uses a dedicated no-sandbox headless launcher only in the test configuration; library defaults stay unchanged.
- [#246: WSL binary selection](https://github.com/karma-runner/karma-chrome-launcher/issues/246): Preserve original platform detection; do not claim an untested Windows/WSL migration.

No upstream maintainer was contacted. Runtime files and original license/authorship are retained. Development tooling uses Node24; package engine declarations remain unchanged.

## Verification

`npm ci --ignore-scripts`, `npm test`, `npm run test:package`, `npm audit --audit-level=low`. Packed tests install the actual archive and exercise the exported plugin. Publication uses the exact CI tarball only after CI and CodeQL succeed.
