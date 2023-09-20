---
sidebar_position: 5
---

# Container Operations

WFBs that control container operations

| Name    | Description                 | Parameters                                                                                                                                                                                                                                                                                                        | Result                 |
| ------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Insert  | Insert data into containers | <li>Datamodel, Datasource, and Table: Table to write to</li><li>Values name: Value name</li><li>Values Formula: Value for associated value name</li>                                                                                                                                                              | N/A                    |
| Update  | Update data In containers   | <li>Datamodel, Datasource, and Table: table that includes data to update</li><li>Filter: Define filter for update</li><li>Values: Set values for updates</li>                                                                                                                                                     | Number of updated rows |
| Replace | Replace data in container   | <li>Datamodel, Datasource, and Table: table that includes data to update</li><li>Filter: Define filter for update</li><li>Status Key: Record to be inserted. The object instance given to the workflow block should have both the \_ID and \_Version given to be replaced, else it will insert a new object.</li> | N/A                    |
| Delete  | Delete data in container    | <li>Datamodel, Datasource, and Table: table that includes data to delete</li><li>Filter: Define filter for delete</li>                                                                                                                                                                                            | Number of deleted rows |
| Read    | Read data from container    | <li>Datamodel, Datasource, and Table: table that includes data to read</li><li>Filter: Define filter for read</li>                                                                                                                                                                                                | N/A                    |
