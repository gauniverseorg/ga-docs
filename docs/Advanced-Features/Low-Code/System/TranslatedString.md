---
sidebar_position: 32
---
# TranslatedString

The TranslatedString class represents a translated string. Here's a breakdown of the code:

- The class has the following properties:
  - DefaultValue: Represents the default value of the translated string.
  - Translations: Represents the translations of the string stored in a dictionary, with the LCID (Locale Identifier) as the key and the translation as the value.
  - SerializedTranslations: This property is used for XML and JSON serialization.
- The class has constructors, methods, and operators for working with translated strings:
  - TranslatedString(): Initializes a new instance of the TranslatedString class with default values.
  - TranslatedString(String defaultValue): Initializes a new instance of the TranslatedString class with the specified default value.
  - Clone(): Creates a deep copy of the TranslatedString object.
  - Value: Gets the translation of the string based on the current set language of the client.
  - ToString(): Overrides the ToString() method to return the translated value.
  - SaveTranslation(int lcid, string value): Saves a translation for the specified LCID.
  - GetTranslation(int lcid): Retrieves the translation for the specified LCID.
  - Implicit and explicit operators: Allow implicit conversion from a string to a TranslatedString object and explicit conversion from a TranslatedString object to a string.
  - IsChanged(TranslatedString tsOld, TranslatedString tsNew): Compares two TranslatedString objects to determine if there are any changes.

Note: all LCID follow the Microsoft language list, found [here](<https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a>)
