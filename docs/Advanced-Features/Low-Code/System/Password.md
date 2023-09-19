---
sidebar_position: 25
---
# Password

This class provides a static method called GeneratePassword for generating passwords. Here is an explanation of the code:

- The class has a static method called GeneratePassword that takes several parameters:
  - includeLowercase: A boolean flag indicating whether to include lowercase letters in the generated password.
  - includeUppercase: A boolean flag indicating whether to include uppercase letters in the generated password.
  - includeNumeric: A boolean flag indicating whether to include numeric characters in the generated password.
  - includeSpecial: A boolean flag indicating whether to include special characters in the generated password.
  - passwordLength: An integer specifying the length of the generated password.
  - The GeneratePassword method creates an instance of the PasswordGenerator.Password class and calls its Next method to generate a password based on the provided parameters.
  - The generated password is returned as a string.

The PasswordWrapper class provides a convenient way to generate passwords with different configurations, such as including lowercase letters, uppercase letters, numbers, and special characters, and specifying the desired password length.
