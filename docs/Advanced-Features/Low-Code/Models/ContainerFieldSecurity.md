---
sidebar_position: 28
---
# ContainerFieldSecurity

This class represents the security settings for a specific field within a container. The class has the following properties:

- FieldId: Represents the identifier of the field to which the security settings apply. It is of type Guid.
- Access: Represents the field access level using the DataAccess enumeration. It specifies the permissions or restrictions on accessing the field.
- RecursiveSecurity: Indicates whether the security settings should be applied recursively to child fields within the container
  - This means that the security settings are also transferred to the children. E.g. if it is a ContainerClassObject which has a property which is again an object. if you then set a field security on the property, these settings are transferred to all properties of the nested object.

By using the ContainerFieldSecurity class, you can define and manage the security settings for individual fields within a container, including access levels and recursive security settings.
