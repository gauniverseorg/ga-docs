---
sidebar_position: 30
---
# ContainerFieldFilter

The ContainerFieldFilter class has the following properties:

- IgnoreFormula (Boolean): Indicates whether to ignore any formula associated with the field filter
- FieldName (string): The name of the field
- FieldId (Guid): The ID of the field
- Value (object): The value to compare with the field
- Value2 (object): An optional second value to compare with the field
  - Only used when using between filter
- Operator (Comparer): The comparison operator to use for the field filter
- ConcatOperator (Concat): The concatenation operator to use when combining multiple field filters
- Filters (List): A list of nested ContainerFieldFilter objects to create complex filter expressions

The ContainerFieldFilter class is used to define filters for container fields. It allows specifying various conditions and operators to filter the data based on specific field values or combinations of multiple field filters.
