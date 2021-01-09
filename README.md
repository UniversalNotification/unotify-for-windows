# unotify for Windows

Command-line [UniversalNotification](https://github.com/UniversalNotification/spec) notifier for Windows 10.

## Requirements

- [PowerShell](https://github.com/PowerShell/PowerShell)
- [BurntToast](http://www.powershellgallery.com/packages/BurntToast/)

## Install

```sh
npm install -g unotify-for-windows
# or
yarn global add unotify-for-windows
```

### Install from source

```sh
yarn install
yarn build
yarn global add "file:$(pwd)"
```

## Usage

`unotify` parses the text stream line by line from stdin.

```sh
echo '{ "message": "Hello World" }' | unotify
```

Example of working with [sse-cat](https://www.npmjs.com/package/sse-cat).
```sh
sse-cat 'http://localhost:8080/sse' | unotify
```
