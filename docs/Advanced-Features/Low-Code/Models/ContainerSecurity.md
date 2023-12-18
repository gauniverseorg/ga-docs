---
sidebar_position: 25
---
# ContainerSecurity

The code represents the security settings for a container. The ContainerSecurity class has the following properties:

- ContainerId: Represents the identifier of the container. It is of type Guid
- RoleId: Represents the identifier of the role associated with the container. It is of type Guid
- Access: Represents the structure access for the container. It is of type StructureAccess
- DataSecurity: Represents a list of ContainerDataSecurity objects:
  - By using the ContainerDataSecurity class, you can define and manage the security settings for data within a container, including access levels, field restrictions, and filtering
- FieldSecurity: Represents a list of ContainerFieldSecurity objects:
  - By using the ContainerFieldSecurity class, you can define and manage the security settings for individual fields within a container, including access levels and recursive security settings

The ContainerSecurity class defines the security settings for a container, including the container's identifier, the associated role, the structure access, and lists of data and field security settings.
