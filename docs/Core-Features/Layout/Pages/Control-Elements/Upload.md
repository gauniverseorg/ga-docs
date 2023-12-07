---
sidebar_position: 30
---
# Upload

Allows users to select and upload files from their local device to a website or application.

| **Property** | **Description** |
| --- | --- |
| UseForBlob | Image is not based on media source, but can be filled by a blob format. with manual filling and not from data binding: data: [\<mediatype\>] [;base64], \<data\> |
| File types | File type allowed for upload (CSV, Excel 97-2003, Excel 2007+, Text, Image, Html, Video, Audio, Pdf) |
| Select Mediasource | Destination – select media source |
| HideAllFiles | Hides the all files options when uploading a specific file using the button. |
| MaxFileSize | Maximum size of the upload file in bytes |
| Path | Upload destination path |
| Check for existing file | Check whether identical file already exists |
| Multiple | Multiple upload possible |

## Exclusive events

| Exclusive event | Description |
| --- | --- |
| Upload complete | When an file is successfully uploaded the event is activated |
| Upload starting | After you select and confirm the file the event is activated |
| Upload started | After you select and confirm the file the event is activated |
| Upload failed | When an upload fails |
