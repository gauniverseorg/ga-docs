---
sidebar_position: 5
---
# ContainerDatasourceAccess

It is a wrapper class for working with container objects. Here's an overview of the class and its methods:

1. Constructor

    - ContainerDSWrapper(Container container, Dictionary <string, object> properties = null): Initializes a new instance of the ContainerDSWrapper class. It takes a Container object and an optional dictionary of properties as parameters. The constructor creates a connector using the CreateConnector method of the container object and assigns it to the _Connection field. It also sets the_DSRead field to the_Connection object if it implements the IDataSourceRead interface. Additionally, it determines the_Table value by converting the container to a table if it implements the IContainerTable interface, otherwise it uses the container's name

2. Methods

    - Clear(): Clears the connection by calling the Clear method on the _Connection object
    - SetFilter(RestFilter filter): Sets a REST filter on the data source read connector. It uses the _DSRead object and the_Table field to call the SetRestFilter method, passing the provided filter and table. RestFilter can be found under Models modules
    - GetReaderSQL(string sql): Executes an SQL query and returns a ReaderStruct object. It uses the _DSRead object to call the GetReaderSQL method, passing the provided SQL query
    - GetDataTableSQL(string sql): Executes an SQL query and returns a DataTable object containing the query results. It uses the _DSRead object to call the GetDataTableSQL method, passing the provided SQL query
    - GetTableInfoSQL(string sql): Retrieves table information for an SQL query and returns a Table object. It uses the _DSRead object to call the GetTableInfoSQL method, passing the provided SQL query

The ContainerDSWrapper class provides a simplified interface for working with container objects that implement the IDataSourceRead interface. It encapsulates the connection, filtering, and querying functionality, allowing you to interact with the container and retrieve data from a data source using SQL queries.
