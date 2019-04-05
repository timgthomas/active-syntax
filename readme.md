![Active Syntax](https://raw.githubusercontent.com/timgthomas/active-syntax/master/logo.png?raw=true)

# Active Syntax

A simple syntax theme based on colors from Apple's Activity apps.

![A preview of the theme](https://raw.githubusercontent.com/timgthomas/active-syntax/master/preview.png?raw=true)

## Installation

To install Active, search for `active-syntax` on Atom's "Install" screen, or use APM:

```
$ apm install active-syntax
```

## Development

To make changes to Active:

1. Inside the repo directory, run `apm link -d`. This will symlink the repo folder to `~/.atom/dev/packages/`.
1. Open the directory in dev mode with `atom -d .`. In this mode, any changes you make will appear immediately.

## Publishing to APM

```
npm version X.X.X
git push && git push --tags
apm publish -t vX.X.X
```
