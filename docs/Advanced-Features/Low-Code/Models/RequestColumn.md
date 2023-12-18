---
sidebar_position: 5
---
# RequestColumn

The RequestColumn class is a data structure used to represent a column or field in a data retrieval request or filter configuration. It provides properties to specify various aspects of the column, such as its name, aggregation, expression, alias, and additional modifiers. Here are the properties of the RequestColumn class:

- Name: Represents the name of the column or field to be included in the data retrieval request. It specifies the attribute or property whose value is requested
- IsCommaSeparated: Indicates whether the values of the column should be treated as comma separated. This property is useful when dealing with multiple values within a single column
- Aggregation: Specifies the aggregation function to be applied to the column, such as sum, average, count, etc. It is of type Aggregation, which is an enumeration defining various aggregation options
- Expression: Represents an expression or formula to be applied to the column during data retrieval. It allows performing calculations or transformations on the column values
- Alias: Represents an alternative name or label for the column. It provides a way to assign a different name to the column in the retrieved data
- Value: Specifies a value or criterion associated with the column. It can be used for filtering or comparison purposes
- Negate: Indicates whether the value associated with the column should be negated or reversed. It is used in conjunction with filtering or comparison operations
- Increment: Represents an increment value to be applied to the column during data retrieval. It allows adjusting the column values by a specific amount
- Factor: Represents a multiplication factor to be applied to the column during data retrieval. It allows scaling or adjusting the column values by a specific factor

The RequestColumn class is typically used within the RestFilter class to define the columns or fields to be included in a data retrieval request. By creating instances of RequestColumn and setting its properties accordingly, you can specify the desired columns, their aggregation or transformation, filtering criteria, and additional modifiers.

This class helps in building structured and customizable data retrieval configurations in applications.
