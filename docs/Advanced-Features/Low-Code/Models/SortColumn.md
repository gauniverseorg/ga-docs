---
sidebar_position: 4
---
# SortColumn

The SortColumn class is a data structure used to represent a sorting criterion within a filter configuration. It is typically used in conjunction with the RestFilter class to specify the sorting behavior for a data retrieval operation. Here are the properties of the SortColumn class:

- Name: Represents the name of the column or field by which the data should be sorted. It specifies the attribute or property on which the sorting operation is performed.
- Order: Represents the sorting order for the specified column. It is of type DbSorting, which is an enumeration that defines the sorting options such as ascending or descending order.
- Position: Represents the position or priority of the sorting criterion within the overall sorting order. It is an optional property and can be used to indicate the relative importance of the sorting criterion when multiple criteria are specified.

The SortColumn class is typically used within the RestFilter class to define the desired sorting behavior for a dataset. By creating instances of SortColumn and populating its properties, you can specify the column to sort by, the sorting order (ascending or descending), and the position within the overall sorting order.
This class helps in building structured and customizable sorting configurations for data retrieval operations in applications.
