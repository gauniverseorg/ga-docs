---
sidebar_position: 2
---
# RestFilter

The RestFilter class is a data structure used for representing a filter configuration in the context of a RESTful service. It contains properties that define various aspects of the filter, including the filter conditions, sorting criteria, requested columns, pagination parameters, and additional parameters.
Here are the key properties of the RestFilter class:

- Filters: Represents a collection of FilterColumn objects. These objects define the filter conditions to be applied to the data. Multiple filter conditions can be combined using logical operators
- Sort: Represents a collection of SortColumn objects. These objects specify the sorting criteria for the data. Each SortColumn contains the column name and the sort direction (ascending or descending)
- Columns: Represents a collection of RequestColumn objects. These objects define the columns to be included in the result set. Only the specified columns will be retrieved from the data source
- StartRow: Specifies the starting row index for pagination purposes. It is used to retrieve a subset of the data starting from the specified row
- EndRow: Specifies the ending row index for pagination purposes. It is used to retrieve a subset of the data up to the specified row
- Top: Specifies the maximum number of rows to be retrieved from the data source. It limits the total number of rows returned
- Parameter: Represents a collection of Parameter objects. These objects can be used to pass additional parameters or settings to the filter

Overall, the RestFilter class provides a structured way to define and pass filter configurations for RESTful service endpoints. It encapsulates various filter-related parameters and options, allowing for
flexible and customizable data retrieval based on specific criteria.
