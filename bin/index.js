#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
var Jimp = require('jimp');
var bmpJs = require('bmp-js');
var bit1Encoder = require('./../encoder');

const red = (text) => '\x1b[31m' + text + '\x1b[0m';
const bold = (text) => '\033[1m' + text + '\033[0m';
const green = (text) => '\x1b[32m' + text + '\x1b[0m';

const error = red(bold('Error:'));

if (process.argv.length < 3) {
    console.error(error, red('Missing file argument. Ex: image-to-bmp file-name.png'));
    process.exit(1);
}

const dir = process.cwd();
const fileName = process.argv[2];

const withPath = path.join(dir, fileName);
if (!fs.existsSync(withPath)) {
    console.error(error, red(`Cannot find file ${fileName}`));
    process.exit(1);
}

const parts = fileName.match(/^(.+)\.([^\.]+)$/);
if (parts === null) {
    console.error(error, red(`File must have a valid extension. Ex: *.png`));
    process.exit(1);
}
const exts = ['bmp', 'png', 'jpg', 'tiff', 'gif'];
if (!exts.includes(parts[2])) {
    console.error(error, red(`Invalid file type. Must be ${exts.join(',')}`));
    process.exit(1);
}

const file = parts[0];
const name = parts[1];

let modify = 1;
if (process.argv.length === 4) {
    const num = parseFloat(process.argv[3]);
    if (!(num > 0 && num <= 2)){
        console.error(error, red(`Argument 2 must be 0 > x < 2; default 1`));
        process.exit(1);
    }
    modify = num;
}

Jimp.read(withPath, (err, image) => {
  if (err) throw err;
  image
    .background(0xFFFFFFFF)
    .flip(false, true)
    .getBuffer(Jimp.MIME_BMP, (err, data) => {
      if (err) throw err;
      var bmpData = bmpJs.decode(data);
      const bit1 = bit1Encoder(bmpData, modify);
      fs.writeFileSync(path.join(dir, `${name}.bmp`), bit1.data);
      if (modify === 1) {
        console.log(green(bold('Converted:')), file, '->', green(`${name}.bmp`));
      } else {
        console.log(green(bold('Converted:')), file, `-(${modify})->`, green(`${name}.bmp`));
      }
    });
});