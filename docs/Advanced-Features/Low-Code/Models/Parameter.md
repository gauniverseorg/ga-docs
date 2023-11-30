---
sidebar_position: 6
---
# Parameter

The Parameter class is used in script related functionality.
Here is a breakdown of the Parameter class:

- Name: Represents the name of the parameter. It is of type string
-Class: Represents the class of the parameter. It is of type string
-Default: Represents the default script operation associated with the parameter. It is of typeScriptOperation
- IsOptional: Indicates whether the parameter is optional. It is of type bool and determines if the parameter can be omitted when executing the script
- __id: Represents an internal identifier for the parameter. It is of type int and is initialized to -1 by default
The Parameter class also contains two internal methods:
- Serialize: Takes a MemoryStream as input and serializes the Parameter object into the stream. It writes the values of the Name, Class, Default, and IsOptional properties into the stream
- DeSerialize: Takes a MemoryStream and a Module as input and deserializes the Parameter object from the stream. It reads the values from the stream and assigns them to the corresponding properties of the Parameter object
