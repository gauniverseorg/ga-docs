---
sidebar_position: 27
---
# QR

This class provides a static method for generating QR codes using the QRCoder library. The class has a static method called GenerateQRImage that accepts three parameter:

- Content: The content or data that will be encoded into the QR code.
- ErrorCorrectionLevel: The error correction level to be used for the QR code. It determines the amount of data redundancy added to the QR code to ensure its accuracy even if it is partially damaged or obscured.
- PixelPerModule: The number of pixels used to represent a single module (cell) of the QR code. This affects the size and level of detail in the generated QR code image.
- Finally it returns the QR code image as a byte array.

In summary, the QRWrapper class provides a convenient wrapper for generating QR code images using the QRCoder library by abstracting the necessary steps and providing a simplified interface.
