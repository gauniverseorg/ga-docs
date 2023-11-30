---
sidebar_position: 5
---
# Connector

Here you can specify connection to a data source like SAP or other programs that can not be called directly using their databases. After completing a connector, it can be used as a data source inside the data model. And an object view or container view should be created to see if the connection as successful or not.

When creating a connector you can give it the following information:

| Property | Description |
| --- | --- |
| Name | The name of the connector |
| Translation | The name of the connector in different languages. |
| Usage | Depends on connector type, for example if you only want to read object or you want to write into a relational table.You can select any of: <li> Document store/read</li><li> Document store/write</li><li> Document Store/Bulk</li><li> Data source read</li><li> Data source write</li><li> Data source Db Connection</li><li> Data source read with method type</li><li> Relational Read</li><li> Relational Write</li><li> Relational Create Structure</li><li> Relational Packages</li><li> Relational Stored Procedure</li><li> Relational Functions</li><li> Object Read</li><li> Object Write</li>|
| Variables | Here you can specify variables that can be used later on when creating the script to read connect to the outside source |
| Before execute workflow | Workflow to be executed before connecting |
| After Execute workflow | Workflow to be executed after connecting |

## Datasources

Here you can create a connection that can be used later on in a data model for connection, it should be of type No data source.

## Datastructure / Relational / Object / Multidimensional

Depending on the type of the data you will have to create a corresponding table/object that can hold the data that you want to get from the connecter.

## Scripts

Here you will create a script that can be used later on to get elements from the connection, for example if you want to read data from a document object, you will need to create at least 2 methods, the first to get only the top element from the data source, the second to get all elements. To build a connection you should use an HttpClient object.

## Workflow-Mapping

Here you can map specific requests to the script you created above using workflow blocks, for example an execute script workflow block.

Available requests are:

| Request | Description |
| --- | --- |
| Select | Select multiple elements from the connector |
| First | Select only one element from the connector |
| Update | Update a specific element from the connector |
| Replace | Replace a specific element from the connector |
| Insert | Insert a new element into the connector |
| Delete | Delete a specific element from the connector |
| Count | Get the number of elements from the connector |
