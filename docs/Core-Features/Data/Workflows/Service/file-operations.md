---
sidebar_position: 6
---

# File Operations

WFBs that edits files.

| Name            | Description                   | Parameters                                                                                                                                                                                                                                                                                                                                                                                                               | Result |
| --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Load Resource   | Load file from media source   | <li>Datamodel and Datasource: Where the file is stored</li><li>Filename: Filename inside the source with extension included</li><li>Read File Name From Status: When activated, status key can be selected</li><li>Text/Bytes: Form of return.</li><li>Status key for the result: Status key in which the result is written</li><li>Set As current parameter: overwrite the current parameter and include the file</li> | N/A    |
| Save Resource   | Save file to media source     | <li>Datamodel and Datasource: Where the file will be stored</li><li>Filename: Filename with extension to be saved into the data source</li><li>Read File Name From Status: When activated, status key can be selected</li><li>Text/Bytes: Form of given file type</li><li>Read Text From Status: Read text to save to file from status key</li><li>Text: Text for file to be saved</li>                               | N/A    |
| Delete Resource | Delete file from media source | <li>Datamodel and Datasource: Where the file to be deleted is located</li><li>Filename: File name of the file to be deleted</li><li>Read File Name From Status: When activated, status key can be selected</li>                                                                                                                                                                                                          | N/A    |
