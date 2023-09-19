---
sidebar_position: 5
---

# Report Functions

WFBs used for reporting functionalities
| Name | Description  | Parameters | Result |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Apply View | Applying a view to a query. Within the same workflow block, you have to deactivate an activated view, otherwise this would add up in the background. The table must be refreshed after this WFB. | <li>Query: Query of the objects </li><li>Restriction to Individual Objects: Apply visibility to individual items</li><li>X-Axis/Y-Axis: select a level or value to change its visibility</li><li>Apply View?: The view is applied (true) or not (false) using the formula editor with the result as bool </li> | |
| Switch Tasks | Tasks which were created for the report object can be turned on/off/switched here. | <li>Report Object: Report object in which the tasks are set </li> <li>Query Datatasks: Query Datatask of the Report Object </li><li>Object Datatasks: Object Datatask of the Report Object </li><li>Object Format Tasks: Object Format Tasks of the Report Object </li> | |
| Get Coordinates | Returns the selected coordinates and cells in a table object as a SelectedCoordinate object. It contains XPath and YPath properties which can be looped over to do different functionalities as needed. Often used with master child relations. | <li>Element: Element to get coordinates for </li><li>Status Key: Status Key used for the coordinates </li> | Returns a current parameter if set |
