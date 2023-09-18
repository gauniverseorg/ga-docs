---
sidebar_position: 1
---

# Container Dimensions

Used to create dimensions which can be used later on inside the cubes.

Available properties:

| Property           | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | The name of the dimension                                                                                                                                                        |
| Translation        | The translation of the dimension into different languages                                                                                                                        |
| Use case sensitive | Mark the dimension keys as being case sensitive                                                                                                                                  |
| Process dimension  | Process the dimension, only used in case that one of the columns has a parent column that is referenced. When clicked the hierarchy and the columns are automatically generated. |

## Edit query definition

Here you can select the table and which fields to include in the dimension. After dragging and dropping a table into the query, you can select the fields which can be inserted, a gray check mark means that it is required, a green check mark means that it is optional and can be omitted. You can also select the aggregation type from here, but it is not recommended.

## Attributes

Here you can the properties which can be used later on in the cube.

Available properties:

| Property                  | Description                                                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +                         | Add a new attribute                                                                                                                                                                                                                                                            |
| ⊕                         | Choose multiple attributes to add at once.                                                                                                                                                                                                                                     |
| Attribute – Name          | The name of the attribute to be added                                                                                                                                                                                                                                          |
| Attribute – Description   | The description of the attribute to be added                                                                                                                                                                                                                                   |
| Attribute – Key Column    | The column which will be used as the key of the current attribute                                                                                                                                                                                                              |
| Attribute – Name Column   | The name which will be used as the actual value of the current attribute                                                                                                                                                                                                       |
| Attribute – Parent column | Select this in the case that this attribute is used in a hierarchy and it has a parent. Note: rarely used                                                                                                                                                                      |
| Attribute – Type          | The type of current attribute: <li>Regular</li><li>All</li><li>Calculated</li><li>Time</li><li>TimeYears</li><li>TimeHalfYears</li><li>Time quarter</li><li>Time months</li><li>Time weeks</li><li>Time days</li><li>Time hours</li><li>Time minutes</li><li>Time seconds</li> |
| Attribute – Key           | Check this if this attribute will be used as the key of the current dimension                                                                                                                                                                                                  |
| Attribute – Translations  | Used in case you want to translate the attribute                                                                                                                                                                                                                               |

## Hierarchies

Here you can create hierarchies if needed, thes hierarchies can be automatically used by the queries if designed correctly.

Available properties:

| Property    | Description                                                                           |
| ----------- | ------------------------------------------------------------------------------------- |
| Name        | The name of the hierarchy                                                             |
| Translation | The translation of the hierarchy into different languages                             |
| Attribute   | Here you can design the hierarchy of the dimension, only if your attributes allow it. |

## Relations

Here you can define the relations between the attributes, they are automatically generated or can be designed manually by the user

Available properties:

| Property                           | Description                                     |
| ---------------------------------- | ----------------------------------------------- |
| +                                  | Add new relation                                |
| Source Attribute                   | The attribute which has relation attached to it |
| Target attribute/Related attribute | The related attribute                           |
| 🗑️                                 | Delete relations                                |
