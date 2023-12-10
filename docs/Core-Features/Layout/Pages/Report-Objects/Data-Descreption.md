---
sidebar_position: 4
---

# Data Description

The content of the report objects is defined using the data description. Here you can create multidimensional queries. In multidimensional query, a selection of the usable cubes is displayed after the data source has been selected. The cubes and dimensions that can be used here are created under Data – Data Model – Multidimensional. Levels and values can only be dragged and dropped into the designated areas in the Select tab.

A relational query can also be selected, but it is not recommended to use since it is still under development.

A preview of the query result can be displayed using the ➤ arrow. Below the preview you can select the data model.

## Select

The selection of the elements is given step by step to the user. After selecting the cube, any number of dimension levels and attributes can be drawn from its dimension hierarchies into the rows (Y-axis) or columns (X-axis) for display. After right clicking the mouse you can access further settings for the areas. Only hierarchies, levels, or attributes, can be drawn, but not entire dimensions.

Several hierarchies can be created in one dimension. Thus, the lowest levels of the individual hierarchies would be displayed twice or more. The selected items can be edited further via the context menu. Special items such as Calculated Value, Empty Item, and Variable Item can also be dragged into the allowable areas. The calculated value is defined in more detail under Tasks. Variables item under the Variables tab. An empty element inserts an empty column or row.

## Filter

In this section you can filter the query results based on different criteria defined by the user, for example a minimum hard coded value, or a dynamic value that is taken from a report control element.

| **Property** | **Description** |
| --- | --- |
| Hierarchy | The value which should be filtered (Can be dropped down from the levels area) |
| Default | Set default filters, which will be static |
| Variable | Set dynamic filter, via predefined variable (The normal way, via variables) |

## Variables

Variables are listed here and they can be defined using the formula editor.

## Tasks

Defining tasks for the Data Description.

| **Property** | Description |
| --- | --- |
| ⤒ | Move to first position |
| ↑ | Move up one position |
| ↓ | Move down one position |
| ⤓ | Move to last position |
| 👁 | Set the task to active/inactive |
| **+** | Add new task |
| ⊞ | Copy task |
| 🗑 | Delete task |
| Ⓧ | Delete all |

Data tasks are used to generate data dynamically based on different criteria, the data tasks are evaluated top to bottom, meaning if one task is defined at the bottom, the values given to it might be changed by all tasks above it. When you add a new task you can select among the following:

| Task | Description |
| --- | --- |
| Accumulate | Select the value for the task to be accumulated (needs to me inserted in the select) |
| Level Sum | Select the value to be summed up and the Axis value (X/Y), the level can be selected via the numbers 1, 2, 3... |
| Filter | Select the value to be filtered and from which level, Set the condition for the filter, and the opposing level for the filter |
| Sort | Sort of selected value, and on which level it should be sorted, Sort by the available properties for the value (Code, Caption, Attribute, Measure) |
| Top-Down | Display selected top results, add the value for the display reference, select the level and the number (e.g., number 3 will display the first 3 top results) , "Add up the rest" adds an additional row with the remaining outputs summed up |
| Display | Select the level and how to be displayed (Code, Description ,Code Description) |
| Edit | Edit the selected value |
| Rank | Display the results as numbers, the result can also be sorted out |
| Calculated value | If we have selected a calculated value from the "Select" panel, we can give it the values here |

## Value Definition

Here you can define some specific values for the measurements using 5 different ways:

1. Cumulation: Aggregate over all the items in this specific axis.
2. Element referencing: select specific elements in specific levels to use in this aggregation.
3. Parent referencing: select how many levels do you want to do the aggregations over.
4. Dynamic time referencing: use the dynamic time for aggregations.
5. Time summation: Aggregate over specific periods of time.

The available properties are:

| Property | Description |
| --- | --- |
| Caption | Value name |
| Visibility | Visibility of selected value |
| Aggregation | The type of aggregation |

## Cumulation

| Property | Description |
| --- | --- |
| YearToDate | Display the year as month and date |
| MonthToDate | Display the month as days |
| WeekToDate | Display the week as days |
| Period referencing | Select the Level where the reference will take place and the value (e.g., If we want to have a previous month period value we will set the Month as a level, and the Value will be –1, this means that this property will always hold the previous period) |
