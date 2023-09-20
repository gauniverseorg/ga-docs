---
sidebar_position: 34
---
# ContainerElement

Is a base class for all fields in all structures in framework. This class is only used in the script to read the field properties of a structure (e.g. ContainerClassObject). System module “ContainerAccess” -> function “GetFields”

- public Guid ID { get; set; } = Guid.NewGuid();: This property represents the ID of the container element and is assigned a new unique identifier using Guid.NewGuid().
- public Type DataTyp { get; set; }: This property represents the data type of the container element. It is of type Type.
- public bool IsPrimary { get; set; }: This property indicates whether the container element is a primary element.
- public bool IsAutoIncrement { get; set; }: This property indicates whether the container element has auto-increment enabled.
- public bool IsFilterable { get; set; }: This property indicates whether the container element is filterable.
- public bool IsSortable { get; set; }: This property indicates whether the container element is sortable.
- public Container Parent { get; set; }: This property represents the parent container of the element. It is of type Container.

The ContainerElement class serves as a base class for container elements, providing common properties and functionality.
