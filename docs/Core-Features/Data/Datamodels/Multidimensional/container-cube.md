---
sidebar_position: 2
---

# Container Cube

Here you can use the dimensions to create a multi dimensional cube.

The available properties are:

| Property           | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| Name               | The name of the cube                                                               |
| Translation        | Name of the cube in different languages                                            |
| Writable           | Allows the user to enter values into the cube dynamically, used in planning tables |
| Use Case Sensitive | Allows the keys to be case sensitive                                               |

## Dimensions

Here you can add the dimensions you want to use in the cube

Available properties are:

| Property                        | Description                                                                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +                               | Add a new dimension                                                                                                                                            |
| 🗑️                              | Delete an existent dimension                                                                                                                                   |
| Dimension – Name                | The name of the dimension                                                                                                                                      |
| Dimension – Translation         | The name of the dimension in different languages                                                                                                               |
| Is check out                    | Only used when the cube is able to be written to. Used in planning tables                                                                                      |
| Dimension – Container Dimension | The dimension which will be used: After selecting the dimension you can select which attribute to use. And whether it can be used as an alternative key or not |

## Values

Here you can define the values or measurements that you want to show in the graphs, for example the count or summation of sales.

Available properties:

| Property    | Description                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | Name of the value to be measured                                                                                                                      |
| Translation | Translation of the value to be measured                                                                                                               |
| Type        | Type of the value: <li>Double</li><li>Long</li><li>Date Time</li><li>String</li>                                                                      |
| Aggregator  | How the value should be calculated <li>None</li><li>Sum</li><li>Max</li><li>Min</li><li>Avg</li><li>Count</li><li>Not set</li><li>Distinct count</li> |
| Formula     | If you want to create a new measurement type or aggregator type                                                                                       |

## Data Mapping

Here you can define the values from the facts table/container you have. After selecting the table you can select which column of the table will be mapped to which column in the mapped dimensions.

Available properties:

| Property | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| 🖊        | Edit current partition: Upon clicking this edit query definition is opened |

## Edit query definition

Here you can select the table and which fields to include in the dimension. After dragging and dropping a table into the query, you can select the fields which can be inserted, a gray check mark means that it is required, a green check mark means that it is optional and can be omitted. You can also select the aggregation type from here, but it is not recommended.
