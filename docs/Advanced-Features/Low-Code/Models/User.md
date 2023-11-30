---
sidebar_position: 15
---
# User

The User class represents a user entity in the application. Here's a breakdown of its structure:

- Properties:
  - CurrentUser: A static property representing the current user
  - CurrentRepository: A static property representing the current repository
  - CurrentAuthorization: A string property representing the current authorization of the user
  - DisplayName: A string property representing the display name of the user
  - UserName: A string property representing the username of the user
  - FirstName: A string property representing the first name of the user
  - MiddleName: A string property representing the middle name of the user
  - Address: An Address object representing the address of the user
  - LastName: A string property representing the last name of the user
  - Email: A string property representing the email address of the user
  - Image: A string property representing the image of the user
  - IstermsAndCondition: A Boolean property indicating whether the user has accepted the terms and conditions
  - IsExtern: A Boolean property indicating whether the user is an external user
  - IdentityId: A string property representing the identity ID of the user
  - Disabled: A Boolean property indicating whether the user is disabled
  - IsAdministrator: A Boolean property indicating whether the user is an administrator
  - IsValidated: A Boolean property indicating whether the user has been validated
  - IsManagedByPortal: A Boolean property indicating whether the user is managed by a portal
  - Companies: A list of CompanyPermissions objects representing the companies associated with the user
  - Instances: A list of InstanceAssignment objects representing the instances assigned to the user
  - LCID: An integer property representing the language code identifier of the user
  - Roles: A list of Guid values representing the roles assigned to the user
  - EffectiveRoles: A list of Guid values representing the effective roles of the user
  - Rights: A dictionary mapping string keys to integer values representing the rights of the user
  - ImpersonatedRoles: A list of Guid values representing the impersonated roles of the user
- Methods:
  - FindUsers: A static method that retrieves a list of users based on the specified identityId
- Overrides:
  - ToString(): Overrides the ToString() method to provide a customized string representation of the user object.
It returns the user's display name, or if it's empty, it concatenates the first name and last name. If both first name and last name are empty, it returns the user's SID (security identifier)
