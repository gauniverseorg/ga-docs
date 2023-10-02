---
sidebar_position: 23
---
# WhereArrayPart

This class represents a part of an array used in the context of column updates. It has the following properties:

- Path: A string representing the path to the array part.
- IsArray: A Boolean indicating whether the part represents an array.

It is only a part of the update column. It is to provide a way to specify a specific part of an array when performing updates on array columns. The Path property allows you to specify the location or index of the array element to be updated, and the IsArray property indicates whether the specified part is itself an array.

By using the WhereArrayPart class within the UpdateColumnWrapper class, you can define a list of WhereArrayPart objects to represent multiple parts of an array to be updated. This allows for granular control over the specific elements or sub-arrays within an array column that need to be modified.
