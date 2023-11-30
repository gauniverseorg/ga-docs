---
sidebar_position: 9
---
# ContainerAccess

It contains various static methods that serve as wrapper functions for interacting with containers and performing operations on them. Here's an overview of the class and its methods:

- Save(Guid classId, object obj): Serializes the provided object to JSON format and saves it to the container identified by the given class ID. It returns an array of GUIDs representing the saved objects
- GetExportObject(Guid classId): Returns an instance of the ExportObjectWrapper class for the specified class ID. This wrapper class allows writing data to the corresponding ClassObjectContainer
- GetBulkOperations(Guid classId): Returns an instance of the BulkOperationsWrapper class for the specified class ID. This wrapper class enables performing bulk or batch operations on the corresponding ClassObjectContainer
- CreateContainerRelationalAccess(string modelName, string containerName, Dictionary<string, object\> properties = null, Guid? dataSourceID = null): Creates and returns a ContainerRelWrapper object for accessing a relational database container. It takes the model name, container name, optional properties, and an optional data source ID as parameters
- CreateConnectorContainerRelationalAccess(Guid connectorId, string containerName, Dictionary<string, object\> properties = null): Creates and returns a ContainerRelWrapper object for accessing a relational database container using a connector. It takes the connector ID, container name, and optional properties as parameters
- CreateContainerDatasourceAccess(string modelName, string containerName, Dictionary<string, object\> properties = null, Guid? dataSourceID = null): Creates and returns a ContainerDSWrapper object for accessing a container with a data source. It takes the model name, container name, optional properties, and an optional data source ID as parameters
- CreateConnectorContainerDatasourceAccess(Guid connectorId, string containerName, Dictionary<string, object\> properties = null): Creates and returns a ContainerDSWrapper object for accessing a container with a data source using a connector. It takes the connector ID, container name, and optional properties as parameters
- CreateContainerObjectCollectionAccess(string modelName, string containerName, Dictionary<string, object\> properties = null, Guid? dataSourceID = null): Creates and returns a ContainerObjectCollectionWrapper object for accessing a container that holds object collections. It takes the model name, container name, optional properties, and an optional data source ID as parameters
- CreateConnectorContainerObjectCollectionAccess(Guid connectorId, string containerName, Dictionary<string, object\> properties = null): Creates and returns a ContainerObjectCollectionWrapper object for accessing a container that holds object collections using a connector. It takes the connector ID, container name, and optional properties as parameters
- ModelNameToId(string modelName): Converts a model name to its corresponding GUID identifier and returns it
- DataSourceNameToId(string dataSourceName): Converts a data source name to its corresponding GUID identifier and returns it
- ContainerNameToId(string modelName, string containerName, Guid? dataSourceID = null): Converts a container name and model name to their corresponding GUID identifier and returns it. Optionally, a data source ID can be provided to narrow down the search
- GetDbInfo(Guid dataSourceId): Retrieves the database information for the specified data source and returns it as an ADBInfo object
- ForceDelete(Guid classId, Guid id, Guid version): Deletes an object forcefully from the container. It takes the class ID, object ID, and object version as parameters and returns a string indicating the result of the operation
- Delete(Guid classId, Guid id, Guid version): Deletes an object from the container. It takes the class ID, object ID, and object version as parameters and returns a string indicating the result of the operation
- DeleteByFilter(Guid classId, RestFilter filter = null): Deletes objects from the container based on the specified filter. It takes the class ID and an optional filter as parameters and returns the number of deleted objects. RestFilter can be found under Models modules
- SearchObjects(Guid classId, RestFilter filter = null): Searches for objects in the container based on the specified filter and returns an array of deserialized objects. RestFilter can be found under Models modules
- SearchJObjects(Guid classId, RestFilter filter = null): Searches for objects in the container based on the specified filter and returns an array of JSON objects. RestFilter can be found under Models modules
- CountObjects(Guid classId, RestFilter filter = null): Counts the number of objects in the container based on the specified filter and returns the count
- OpenQuery(Guid containerId, RestFilter filter = null): Executes a query on the container with the provided filter and returns a query identifier (GUID) representing the query result
- InternalExecuteCount(Guid containerId, RestFilter filter = null): Executes a count query on the container with the provided filter and returns the count of matching objects
- ExecuteCountQuery(Guid queryId): Executes a count query using the specified query identifier and returns the count of matching objects
- ExecuteQuery(Guid containerId, RestFilter filter = null): Executes a query on the container with the provided filter and returns an array of query results
- ExecuteObjectQuery(Guid containerId, RestFilter filter = null): Executes a query on the container with the provided filter and returns an array of deserialized objects
- ExecuteJObjectQuery(Guid containerId, RestFilter filter = null): Executes a query on the container with the provided filter and returns an array of JSON objects
- ExecutePagedQuery(string queryId, int startRow = 0, int endRow = -1): Executes a paged query using the specified query identifier and returns an array of paged query results within the specified row range
- CloseQuery(string queryId): Closes the query associated with the specified query identifier
- CleanDeleted(Guid classId): Cleans up deleted objects from the container for the specified class ID
- CleanObsolete(Guid classId): Cleans up obsolete objects from the container for the specified class ID
- GetFields(Guid containerId): Retrieves the fields (elements) of the container identified by the given container ID and returns them as a list of ContainerElement objects. Container Element can be found under Models modules
