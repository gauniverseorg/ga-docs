---
sidebar_position: 31
---
# ReaderStruct

It is a wrapper class to provide the relational reader and a close event. The ReaderStruct class encapsulates a data reader along with an associated action to be executed when the reader needs to be closed or its resources need to be released. This can be useful for managing and closing data readers in a structured manner, ensuring that the resources are properly disposed of when they are no longer needed. The reader is necessary to read data from a relational source. It has two properties:

- The reader is necessary to read data from a relational source.Reader (IDataReader): An interface representing a data reader, which allows forward-only access to a set of data returned from a data source. It provides methods for reading and retrieving data from the data source
- CloseAction (Action): An action delegate that represents a method to be executed. In this case, it is used to specify an action that should be performed to close the data reader or release any associated resources
