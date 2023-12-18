---
sidebar_position: 17
---
# InternalUserAccess

This class provides various methods for managing internal user data and performing operations such as saving, updating, deleting, and retrieving user information.
Here is a breakdown of the code:

- The class contains private static fields: _Client of type HttpClient and_BaseUrl of type string. These fields are used for making HTTP requests to a server
- The class has a static constructor that initializes the _Client and_BaseUrl fields. The initialization depends on the Statics.ServiceType value
- The class provides several static methods:
  - SaveUser: Saves a user by either creating a new user or updating an existing user. The method checks the user parameter and the current user's rights before performing the operation. The implementation of this method depends on the Statics.ServiceType
  - UpdateUser: Updates an existing user. The implementation depends on the Statics.ServiceType
  - DeleteUser: Deletes a user based on the provided id. The implementation depends on the Statics.ServiceType
  - FindUserById: Finds a user by their id. The implementation depends on the Statics.ServiceType
  - FindUserByName: Finds a user by their name. The implementation depends on the Statics.ServiceType
  - GetAllUsers: Retrieves a list of all users. The implementation depends on the Statics.ServiceType
  - UserNamesExisting: Checks for existing usernames based on the provided list. The implementation depends on the Statics.ServiceType
  - CheckUserNameExisting: Checks if a username exists. The implementation depends on the Statics.ServiceType
  - CheckUserEmailExisting: Checks if an email address exists. The implementation depends on the StaticsServiceType
  - GetEmailValidationCode: Retrieves the email validation code for the given email address. The implementation depends on the Statics.ServiceType
  - EmailValidation: Performs email validation for the given email and validation token. The implementation depends on the Statics.ServiceType
  - RequestPasswordResetCode: Requests a password reset code for the given email address. The implementation depends on the Statics.ServiceType
  - ResetUserPassword: Resets the password for a user based on the provided reset information. The implementation depends on the Statics.ServiceType
  - ChangeUserPassword: Changes the password for a user based on the provided change information. The implementation depends on the Statics.ServiceType

ServiceType is an enum which indicates the node where the script is running. And it makes only sense to run the InternalUserAccess class when it is App, Middleware or Portal.
