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

![calvin_and_hobbes](https://user-images.githubusercontent.com/338885/179893520-14274099-8277-431a-b8d5-65f9bc6a5871.png)

## Technical Details

Write bmp top to bottom for microcontrollers or low memory chips.

## Why?

Quick utility to make assets for monochrome displays.
