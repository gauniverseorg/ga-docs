---
sidebar_position: 13
---
# DBUser

The DBUser class represents a simplified version of a user in the database. Here's a breakdown of its structure and functionality:

- Properties:
  - DisplayName: A string property representing the display name of the user.
  - UserName: A string property representing the username of the user.
  - ID: A string property representing the unique identifier of the user.
  - Properties: A dictionary that stores additional properties of the user as key-value pairs. The keys in the dictionary represent property names, such as "Email", "Phone", "LastName", and "FirstName", and the values represent the corresponding property values.
- Constructor
  - The constructor takes an AuthUser object as a parameter.
  - It extracts the necessary information from the AuthUser object and initializes the corresponding properties of the DBUser object.
  - The ID property is set to the Id property of the AuthUser object.
  - The UserName property is set to the UserName property of the AuthUser object.
  - The DisplayName property is set to the DisplayName property of the AuthUser object.
  - The Properties dictionary is populated with the user's email, phone number, last name, and first name from the AuthUser object.
  
The DBUser class provides a simplified representation of a user that can be used for various purposes, such as data storage, serialization, or transferring user information within the application.
