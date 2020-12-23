# source-map-original

Source-map-original helps you to regenerate website's code if source maps are uploaded and available.

<center><img width="504" alt="Screen Shot 2020-12-23 at 10 21 12 PM" src="https://user-images.githubusercontent.com/11475858/103028794-b2e47300-456d-11eb-8db2-f522d0386746.png"></center>

## Installation

It can be installed using npm:

```bash
$ npm i -g source-map-original --unsafe-perm=true
```

**Note: "--unsafe-perm=true" is needed because puppeteer can not be installed globally without that permission.**

## Usage

After installation completed, you can use it with the following command:

```bash
$ source-map-original -u "website-url" -o "output-folder"
```
