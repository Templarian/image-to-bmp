# image-to-bmp

Convert image to 1 bit depth BMP. File formats `.jpg`, `.png`, `.bmp`, `.tiff`, and `.gif`. Thanks to the [Jimp](https://www.npmjs.com/package/jimp) library.

## Usage

```
npx image-to-bmp file.png
npx image-to-bmp file.png 1.2
npx image-to-bmp <filename> <brightness>
```

Brightness can be 0 to 2.

**Note:** This assumes you have nodejs installed.

> Installing globally is also an option:
>
> ```
> npm install -g image-to-bmp
> ```

## Example

![original 0.6 and 1](https://user-images.githubusercontent.com/338885/180120169-f8070160-3ae0-4531-8e71-770107cd93da.png)


## Technical Details

Write bmp top to bottom for microcontrollers or low memory chips.

## Why?

Quick utility to make assets for monochrome displays.
