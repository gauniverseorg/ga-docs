---
sidebar_position: 6
---
# ContainerMultiAccess

It is a wrapper class for working with multidimensional containers and querying the data within them. Here's an overview of the class and its methods:

1. Constructor

    - ContainerMultiWrapper(GUID datasource, Dictionary<string, object\> properties = null): Initializes a new instance of the ContainerMultiWrapper class. It takes a Guid representing the data source and an optional dictionary of properties as parameters. The constructor retrieves the database information for the specified data source using the GetDBInfo method. It then creates a connector using the CreateConnector method from evidanza.Shared.Database.DBHelper and assigns it to the _Connection field. The connector is cast to IQueryEngine to enable querying functionality.

2. Methods

    - GetDatabase(): Retrieves the database associated with the datasource that the class was initialized with. It calls the GetDatabase method on the _Connection object, passing the_DataSource field as a parameter. Returns a evidanza.Shared.Queries.Database object representing the database.
    - Process(GUID container): Processes a specific container within the data source. It calls theProcess method on the \_Connection object, passing the \_DataSource and the provided container GUID as parameters.
    - ProcessAll(): Processes all dimensions and cubes within the data source. It retrieves the database associated with the data source and iterates over the dimensions and cubes, calling the Process method on the _Connection object for each dimension and cube.
    - GetDatabase(GUID datasource): Retrieves the database associated with the specified data source. It loads the DataSource object using the provided datasource GUID and creates a connector using the database information from ds.DBInfo. It calls the GetDatabase method on the connector and returns the resulting evidanza.Shared.Queries.Database object.
    - Process(GUID datasource, GUID container): Processes a specific container within the specified data source. It loads the DataSource object using the provided datasource GUID and creates a connector using the database information from ds.DBInfo. It calls the Process method on the connector, passing the datasource and container GUIDs as parameters.

The ContainerMultiWrapper class provides methods for accessing and processing multidimensional containers. It allows you to retrieve the associated database, process individual containers or all containers within a data source, and perform queries on the data._ContainerMultiAccess_

It is a wrapper class for working with multidimensional containers and querying the data within them. Here's an overview of the class and its methods:

1. Constructor

    - ContainerMultiWrapper(GUID datasource, Dictionary<string, object\> properties = null): Initializes a new instance of the ContainerMultiWrapper class. It takes a Guid representing the data source and an optional dictionary of properties as parameters. The constructor retrieves the database information for the specified data source using the GetDBInfo method. It then creates a connector using the CreateConnector method from evidanza.Shared.Database.DBHelper and assigns it to the _Connection field. The connector is cast to IQueryEngine to enable querying functionality.

2. Methods

    - GetDatabase(): Retrieves the database associated with the datasource that the class was initialized with. It calls the GetDatabase method on the _Connection object, passing the_DataSource field as a parameter. Returns a evidanza.Shared.Queries.Database object representing the database.
    - Process(GUID container): Processes a specific container within the data source. It calls theProcess method on the \_Connection object, passing the \_DataSource and the provided container GUID as parameters.
    - ProcessAll(): Processes all dimensions and cubes within the data source. It retrieves the database associated with the data source and iterates over the dimensions and cubes, calling the Process method on the _Connection object for each dimension and cube.
    - GetDatabase(GUID datasource): Retrieves the database associated with the specified data source. It loads the DataSource object using the provided datasource GUID and creates a connector using the database information from ds.DBInfo. It calls the GetDatabase method on the connector and returns the resulting evidanza.Shared.Queries.Database object.
    - Process(GUID datasource, GUID container): Processes a specific container within the specified data source. It loads the DataSource object using the provided datasource GUID and creates a connector using the database information from ds.DBInfo. It calls the Process method on the connector, passing the datasource and container GUIDs as parameters.

The ContainerMultiWrapper class provides methods for accessing and processing multidimensional containers. It allows you to retrieve the associated database, process individual containers or all containers within a data source, and perform queries on the data.
