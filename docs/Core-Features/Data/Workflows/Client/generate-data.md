---
sidebar_position: 3
---

# Generate Data

WFBs that are used to generate data.

| Name                 | Description                                                             | Parameters                                                                                                                                                                                      | Result                                   |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Define Values        | Define values (variables) to be used later with the status key          | <li>Formula: Value that is assigned to status key</li><li>Status Key: Key that can be used for accessing value</li>                                                                             | Returns a current parameter if enabled   |
| Define Objects       | Defines an object with properties for later use                         | <li>Status Key: Key that can be used for accessing object </li><li>Datasource: Source from which data is be based on </li><li>Default Values: Values that are initially set for the object</li> | Returns a current parameter when enabled |
| Define Text          | Define a string value and store it in a status key                      | <li>Text: Value to be assigned to status key</li><li>Status key: Status key that can be used for accessing value</li>                                                                           | Returns a current parameter              |
| Define Datetime      | Define date value(Can choose current time) and store it in a status key | <li>Use the current date: Using current time as a value </li><li>Date: Specify a date to be used as a value </li><li>Status key: Status key that can be used for accessing value </li>          | Returns a current parameter when enabled |
| Define List          | Defining list of values to be used later with status key                | <li>Status key: Status key that can be used for accessing value</li><li>Values: Values added to the list</li>                                                                                   | Returns a current parameter              |
| Get Current User     | Get the object for the user who executed the workflow                   | <li>Property: User property </li><li>Status key: Status key that can be used for accessing value </li>                                                                                          | Returns a current parameter              |
| Get Current Location | Get the current geolocation of the user                                 | Status key: Status key that can be used for accessing value                                                                                                                                     | Returns a current parameter when enabled |
| Get Current Language | Returns current language as LCID                                        | Status key: Status key that can be used for accessing value                                                                                                                                     | Returns a current parameter when enabled |
