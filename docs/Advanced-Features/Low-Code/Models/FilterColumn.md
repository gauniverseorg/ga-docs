---
sidebar_position: 3
---
# FilterColumn

The FilterColumn class represents a single filter column used for filtering data. It contains properties that define the filter criteria, such as the column name, the value to be filtered, the comparison operator, and other related options. Here are the key properties of the FilterColumn class:

- IsOptional: Indicates whether the filter column is optional. If set to true, it means the filter is not required and can be omitted. If set to false (default), the filter is considered mandatory
- Name: Specifies the name of the column on which the filter is applied
- Value: Represents the value used for comparison when filtering the data
- Value2: This property is used for range-based filtering, where a range of values is specified
- Operator: Specifies the comparison operator used for filtering, such as equality, greater than, less than, etc
- ConcatOperator: Determines how multiple filter columns are combined. It can be set to either AND or OR, indicating whether all conditions must be met (AND) or at least one condition must be met (OR)
- Filters: Allows nesting of filter columns to create complex filter expressions. It is a list of FilterColumn objects
- ArrayElementMatch: Specifies whether the filter should match against any element of an array. When set to true (default), the filter will match if any element of the array satisfies the filter condition

The Concat enum is used to specify the concatenation operator when combining multiple filter columns. It has two possible values: AND and OR. AND means that all filter conditions must be satisfied, while OR means that at least one condition must be satisfied.
