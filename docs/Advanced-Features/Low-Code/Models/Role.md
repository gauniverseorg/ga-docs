---
sidebar_position: 24
---
# Role

This class represents a role in a security system and extends the BaseObject class. The Role class has several properties with various attributes applied to them:

- Name: Represents the name of the role and is of type TranslatedString
- IsAdministrator: Represents whether the role is an administrator role. It is of type bool
- Everyone: Represents whether the role applies to everyone. It is of type bool
- SecurityList: Represents a list of EnumSecurity objects
- ChildRoles: Represents a list of Guid values that are child roles of the current role
- CanEdit: Represents whether the role can be edited. It is of type bool

Overall, the Role class represents a role in a security system with various properties and methods for managing security-related information associated with the role.
