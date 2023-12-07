---
sidebar_position: 11
---
# Data table

Table to represent data.

## Data Table Settings

| **Property** | **Description** |
| --- | --- |
| Paging type | Type of paging behavior (Scroll, Pager, Endless): <p>- Scroll: functions as a long page giving you the ability to scroll up and down</p> <p>- Pager: creates pagination links on the bottom of the page and splits up the page's content</p> <p>- Endless: allows you to scroll endlessly even after the intended page </p> |
| Page Size | Number of entries fetched per paging request: <p>Regulation of the traffic caused per request. Paging Type related setting to paging, for example, 30 lines can be displayed, 50 can be loaded, scrolling is already possible without reloading) Fallback = 300 (value recommendation; a different value is required if there are many columns) </p> |
| Select Mode | Select one of the following: <p>- None </p> <p> - Single</p> <p>- Multi </p><p> - OS: Can select one or many using CTRL key.</p>|
|*Use Caching| Queries are stored in redis cache for each user and processed from there. Held there until the query completes. Use not recommended |
| ColumnsReorderable | Columns can be arranged by user |
| Columns Resizable | Column width can be changed by the user |
| Columns Resizable – Resize Mode | Select one of : <p>- Expand: The table won't take the entire width of screen, it will only take as much as you give it. </p> <p> - Fit: the table will take the entire width of the screen. </p>|
| DisableAutoLoad | No automatic filling with data from the stored data source |

## DataTableColumns

| **Property** | **Description** |
| --- | --- |
| Select | Selection of the displayed columns |
| Column – Text | Displayed header text of the column |
| Column – Fetch Data | Get the value of the column. Data that is not also displayed in the table can be used for processing |
| Column – Is Visible | Adjust the visibility of the column |
| Column – Is Filterable | Show filter option |
| Column – Is Sortable | Show sorting option |
| Column – IsCommaSeparated | If Parent or Column is of type List |
| Column – Numeric Precision | Decimal places |
| Column – Date Format | Date format |
| Column – Is Sticky | Column cannot fall out of display area |
| Column – Prefix | Prefix that is additionally added to the column data |
| Column – Suffix | Suffix that is additionally added to the column data |
| Column – Position | Position of the column, starting with 0 from the left |
| Column – Width | Column width |
| Column – Default sort | Column data sorting |
| Column – Use Icons | Use Icons for displayed the column in the datatable |

## DataTableFixedColumns

| **Property** | **Description** |
| --- | --- |
| Fixed Columns | Definition of the fixed columns |
| Fixed Columns – Left | Number of frozen columns from the left |
| Fixed Columns – Right | Number of frozen columns from the right |

## DataTableStyle

| **Property** | **Description** |
| --- | --- |
| Styles – Header Background | Header background color |
| Styles – Header Foreground | Font color of the header |
| Styles – Line | Line color |

| Exclusive event | Description |
| --- | --- |
| Click | A click of the element |
| Selection Changed | When changing the selected item from a datatable |
| Double Click | When double-clicking on an item |
| Value Changed | Triggered when the table is editable and some specific cell value is changed |
| On Focus | Focusing on an item (Clicking on it, etc) |
