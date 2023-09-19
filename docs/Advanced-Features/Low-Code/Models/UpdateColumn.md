---
sidebar_position: 22
---
# UpdateColumn

This class represents a wrapper object used to update a column in some context. Is only used in the script in connection with a bulk operation on Document store databases. It is used as a parameter in two functions in the BulkOperations class (DeleteFrom and Update). It contains the following properties:

- Value: An object representing the new value for the column.
- Increment: A nullable double representing the increment value for the column (if applicable).
- Factor: A nullable double representing the factor value for the column (if applicable).
- SourceColumn: A string representing the source column to be updated.
- IsArrayUpdate: A boolean indicating whether the update operation is for an array (if applicable).
- ArrayPart: A list of WhereArrayPart objects representing the parts of the array to be updated.
- Column: A Column object representing the column to be updated.

Methods:

- ToColumn():  returns an instance of the UpdateColumn class.
