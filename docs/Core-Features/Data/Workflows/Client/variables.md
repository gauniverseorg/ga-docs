---
sidebar_position: 8
---

# Variables

WFBs that are used to manipulate variables

| Name                  | Description                                                                                | Parameters                                                                                                                                                                                                                                            | Result |
| --------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Set Variables         | Set a local variable. A variable must be defined beforehand                                | <li>Element: the element to set the variable on </li><li>Variable: Variable previously defined on the element </li><li>Formula: Value for the variable</li>                                                                                           |   N/A     |
| Read Variables        | Read a local variable                                                                      | <li>Element: The element which variables are set from </li> <li>Variable: the variable to read </li><li>Status key: Workflow status </li><li>Set as current parameter: checkbox that sets the variable to be automatically used by the next WFB </li> |  N/A      |
| Set Global Variables  | Set a global variable that is bound to the session. The user must be logged in to use it   | <li>Variable: The global variable which will be changed</li><li>Formula: Value for the variable </li>                                                                                                                                                 |   N/A     |
| Read Global Variables | Read a global variable that is bound to the session. The user must be logged in to read it | <li>Variable: Global variable which will be read</li><li>Status Key: The key which will be used for accessing the variable </li><li>Set as current parameter: checkbox that sets the variable to be automatically used by the next WFB </li>          |  N/A      |
