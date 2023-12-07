---
sidebar_position: 8
---

# DataChecks

WFBs that are used to dictate the workflow’s path.

| Name        | Description                                                                                         | Parameters                                                                                                                                                                                                                                                                                                                                      | Result |
| ----------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Condition   | Condition that dictates the path of the workflow (data types are: Boolean, Text, Numeric, and Date) | <li>Datatype: Bool, Text, Numeric, Date.</li><li>If text was chosen, these conditions can be used: Equals, NonEquals, Contains, StartsWith, EndsWith, IsNullOrEmpty</li><li>If Numeric or Date was chosen, these conditions can be used: Equal, NonEqual, Between, NotBetween, Less, Greater, GreaterOrEqual, LessOrEqual, IsNull, NotNull</li> | N/A    |
| Data Switch | Using the status information to specify a data switch                                               | <li>Name: Output designation of the WFB</li><li>Formula: Specify a value that returns a bool as a result</li>                                                                                                                                                                                                                                   | N/A    |
| Enum        | Checking a variable against stored enums                                                            | <li>Value to be checked: Value to validate if is specified enum or not</li><li>System Enum: If checked it will check the values against system defined enums</li><li>Data Model: Where enums are placed</li>                                                                                                                                    | N/A    |
