// Note you might want to edit bin/index.js
// - This file is just for dev testing

const fs = require('fs');
var Jimp = require('jimp');
var bmpJs = require('bmp-js');
var bit1Encoder = require('./encoder');

const file = 'example';

console.log(process.argv);

Jimp.read(`${file}.png`, (err, image) => {
  if (err) throw err;
  image
    .background(0xFFFFFFFF)
    .flip(false, true)
    .getBuffer(Jimp.MIME_BMP, (err, data) => {
      if (err) throw err;
      var bmpData = bmpJs.decode(data);
      const bit1 = bit1Encoder(bmpData);
      fs.writeFileSync(`${file}.bmp`, bit1.data);
    });
});