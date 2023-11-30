---
sidebar_position: 8
---
# ContainerRelationalAccess

It is a wrapper class, specifically designed for working with relational databases. Here's an overview of the class and its methods:

1. Constructor

    - ContainerRelWrapper(Container container, Dictionary<string, object\> properties = null): Initializes a new instance of the ContainerRelWrapper class. It takes a Container object representing the database container and an optional dictionary of properties as parameters. The constructor assigns various interfaces to the \_Connection, \_RelRead, \_RelWrite, and \_RelBulk fields, based on the connector created from the container using the provided properties. It also assigns the corresponding table for relational operations by converting the container to a table using ConvertToTable() method if the container implements the IContainerTable interface

2. Methods

    - Clear(): Clears the container by calling the Clear method on the _Connection object
    - SetFilter(RestFilter filter): Sets a REST filter for the container by calling the SetRestFilter method on the _RelRead object, passing the provided filter and the table as parameters
    - ExecuteCount(): Executes a count operation on the table by calling the ExecuteCount method on the _RelRead object. It returns an integer representing the count
    - ExecuteScalar(): Executes a scalar operation on the table by calling the ExecuteScalar method on the _RelRead object. It returns an object representing the scalar value
    - ExistsTable(string table, string schema = null): Checks if a table exists in the database by calling the ExistsTable method on the _RelRead object, passing a DatabaseObject representing the table name and schema as parameters. It returns a Boolean indicating the existence of the table
    - GetReader(): Retrieves a reader for the table by calling the GetReader method on the _RelRead object. It returns a ReaderStruct object representing the reader
    - GetTableInfo(string table, string schema = null): Retrieves information about a table by calling the GetTableInfo method on the _RelRead object, passing a DatabaseObject representing the table name and schema as parameters. It returns a Table object representing the table information
    - GetTables(string filter = null, int top = -1): Retrieves a list of tables in the database by calling the GetTables method on the _RelRead object, passing an optional filter and top parameter. It returns a list of Table objects representing the tables
    - ExecuteDelete(): Executes a delete operation on the table by calling the ExecuteDelete method on the _RelWrite object. It returns an integer representing the number of deleted rows
    - ExecuteInsert(Dictionary<string, object\> inserts): Executes an insert operation on the table with the provided insert values by calling the ExecuteInsert method on the _RelWrite object. It accepts a dictionary of column-value pairs as a parameter and returns an integer representing the number of inserted rows
    - ExecuteInsertInto(Guid container, List<string\> inserts): Executes an insert operation into another table specified by the container with the provided insert values by calling the ExecuteInsertInto method on the _RelWrite object. It accepts a container (as a GUID) representing the target table, a list of column names to insert, and returns an integer representing the number of inserted rows
