---
sidebar_position: 48
---
# Simple Reporting

This control element will allow you to create a report for any data table as long as it has a value that can be aggregated over.

## Chart settings

| **Property** | **Description** |
| --- | --- |
| Chart Type | One of: <ol> <li>Bar chart</li> <li>Doughnut chart</li><li>Line chart</li> <li>Pie chart</li>  <li>Polar chart</li> <li>Radar chart</li></ol>|
| Disable Auto Load | Data won't be loaded on the initiation of the page, and will have to be triggered by a workflow using the refresh workflow block|
|Chart Palette| The chart palette the report chart will follow, they can be created in the corporate identity area|
|Legend Position| One of: <li>Top</li> <li>Bottom</li><li>Left</li> <li>Right</li>  <li>Hide</li> |
|X Label|The label shown on the X axis , further details can be set, including italic, bold, size and color of text|
|Y Label|The label shown on the Y axis axes, further details can be set, including italic, bold, size and color of text|
|Grid Color| The color of the grid shown in the background, only useful if the grid is shown|
|Hide X/Y Axis grid|Checkbox to hide/show the respective grid axis|

## Data For Reporting

| **Property** | **Description** |
| --- | --- |
|Data Source Type | One of: <ol> <li>Dynamic</li> <li>Static</li><li>Container</li></ol>|
| Data Model | The data model where the data table is stored|
|Data Table| The data table where the data is stored|
|Group by table columns|Select a table column to group by|
|Group by date|Select what type of group by date to do: <li>Years</li> <li>Months</li><li>Days</li>|
|Date Column|Select the date column to group by, only visible if you select a group by date option, the user should only select date columns|
|Aggregation|One of: <ol> <li>Sum</li> <li>Average</li><li>Count</li><li>Min</li><li>Max</li></ol>|
|Aggregate Value|The number value to aggregate over|
|Max no of results|How many top results are shown, for example if the user writes 3, then the top three results will be returned|
|Preview|Preview the query results|
