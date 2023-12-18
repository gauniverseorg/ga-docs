---
sidebar_position: 17
---
# JObject

It contains asynchronous methods for writing and loading a JObject from a JsonReader.
Here's a breakdown of the code:

- WriteToAsync Method:
  - The WriteToAsync method is used to write the JObject to a JsonWriter asynchronously. It starts by writing the start object token and then iterates over the properties of the JObject, writing each property asynchronously. If any property write operation is not completed successfully, the method uses a local function called AwaitProperties to await the remaining properties and then writes the end object token
- LoadAsync Method:
  - The LoadAsync method is used to asynchronously load a JObject from a JsonReader. It first checks the current token of the reader and if it is JsonToken.None, it reads the next token. It then moves to the content of the reader and checks if the current token is the start object token. If not, it throws a JsonReaderException. Finally, it creates a new instance of JObject, sets the line information, and calls the ReadTokenFromAsync method to read the token hierarchy from the reader and populate the JObject
