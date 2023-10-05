---
sidebar_position: 2
---

# Actions

WFBs that perform an action

| Name                  | Description                                                                                                                                     | Parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Result                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Play Audio            | Plays audio specified by URL upon reaching action                                                                                               | URL: Path of the audio file, For example: https://samplelib.com/lib/preview/mp3/sample-3s.mp3                                                                                                                                                                                                                                                                                                                                                                                                                                        | N/A                                                          |
| Run Workflow          | Running a different workflow inside the current running one, with the option of waiting for the nested workflow to finish                       | <li>Workflow: The workflow you want to run</li><li>Wait for the workflow to finish: Checkmark for whether you want to pause the workflow until the nested called one is finished</li><li>Execute in service: Should be turned on if the workflow won't take a long amount of time or data to finish. If left off, then a worker is used instead. A worker is much faster as compared to the service</li>                                                                                                                             | N/A                                                          |
| REST Call             | Sending a REST request (Get, Post, Delete, etc)                                                                                                 | <li>Method: None, Get, Post, Put, Update, Delete, or Options</li><li>User service URL: Use the service url</li><li>SSL: Secure Sockets Layer checkbox</li><li>Address</li><li>Port: The API port, only change this if the API doesn't use default HTTP/HTTPS ports</li><li>Path: The path which comes after this address</li><li>Parameters: The values passed to the API endpoint</li><li>Header: The values attached to the header</li><li>Authorization: If the API needs login</li><li>Body: The type of content to request</li> | Returns a current parameter                                  |
| Show Message          | Shows a message box pop up                                                                                                                      | <li>Title: Title displayed at the top of the message box</li><li>Message: Message contained in the message box</li>                                                                                                                                                                                                                                                                                                                                                                                                                  | N/A                                                          |
| Show Dialog           | Shows a dialog box pop up                                                                                                                       | <li>Title: Title displayed at the top of the dialog box</li><li>Type: Layout or Template</li><li>Internal URL (Layout): The page displayed Template</li><li>(Template): The template displayed</li><li>Buttons: The buttons displayed, OK, Cancel, OK and Cancel, or None</li><li>Workflow to be executed when closing with OK</li>                                                                                                                                                                                                  | Returns a current parameter                                  |
| Execute Script        | Execute a typescript code that has 3 default methods (constructor, run, stop), you can add more as you need. You can import the system library. | Use JObject: JObject is used for serialization and deserialization of .NET objects and JSON, it came from the [Newtonsoft](https://www.newtonsoft.com/json) library. Checking this box enables the script to only work with JObject, otherwise it would work with [ExpandoObjects](https://learn.microsoft.com/en-us/dotnet/api/system.dynamic.expandoobject?view=net-7.0). Using both is not possible.                                                                                                                              | Returns a current parameter                                  |
| Leave the Dialog open | Prevents the dialog from closing, used in the case of errors                                                                                    |                                                                                                                                                    N/A                                                                                                                                                                                                                                                                                                                                                                                  |                      N/A                                        |
| Close Dialog          | Closes the dialog option, used in the case of errors                                                                                            | Close with: Choose the button to close the dialog. OK, or Cancel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                       N/A                                       |
| Send Notification     | Shows a notification box in the bottom right corner                                                                                             | <li>Message Type: Success, Warning, Error, and Information</li><li>Title: Title of the notification</li><li>Message: Message of the notification</li>                                                                                                                                                                                                                                                                                                                                                                                |              N/A                                                |
| Close Dropdown        | Closes dropdown                                                                                                                                 | Element: Dropdown to close                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |              N/A                                                |
| Open Dropdown         | Unfolds dropdown                                                                                                                                | Element: Dropdown element to open                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                           N/A                   |
| Use Styles            | Set specific styles to an element                                                                                                               | <li>Style reference: Reference to a predefined style</li><li>General: Allows the user to edit general elements styles (Visibility, Editability)</li><li>Content: Changing element’s content styles (Text, Dimensions, Margins, etc.) </li><li>Decorations: Change decoration styling (Background color, bold, etc.) </li><li>Advanced: Change element’s positioning styles</li>                                                                                                                                                      |                           N/A                                   |
| Convert to Image      | Converts an element to a png file, and stores it in a blob in the database or bound to an image control                                         | <li>Element: Element to be converted to png </li><li>Auto Save: Instant download of created image </li><li>Formula: Name of the file to download when Auto Save is enabled </li>                                                                                                                                                                                                                                                                                                                                                     | Returns a current parameter with the Base64 URL of the image |
| Download              | Download a file from a media source                                                                                                             | <li>UseMediaSource: Select the desired media source </li><li>Resource: File resource </li><li>Auto Save: Save automatically </li><li>Filename: Name of the file which will be saved if Auto Save is enabled </li>                                                                                                                                                                                                                                                                                                                    |                              N/A                                |
| Undo Styles           | Remove styles from an element                                                                                                                   | Element: Element which styles will be removed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |               N/A                                               |
| Delay                 | Sleeps a specified amount (in ms)                                                                                                               | Delay in ms: Amount of milliseconds to sleep                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                    N/A                                          |
| Login                 | Displays a login popup                                                                                                                          | <li>Name: Login name </li><li>Password: Login password </li><li>Code: The MFA code, only used in case MFA is selected in the settings</li><li>Security Provider: Security provider of the login </li>                                                                                                                                                                                                                                                                                                                                |                       N/A                                       |
| Link External         |                             N/A                                                                                                                    | Security Provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | N/A                                                             |
| Logout                | Logout of the currently logged in user                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              N/A        |                      N/A                                        |
| Show Wizard           | Open the WFB Wizard                                                                                                                             | Wizard: Wizard from Settings – Data – Workflow – Wizard                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                             N/A                                 |