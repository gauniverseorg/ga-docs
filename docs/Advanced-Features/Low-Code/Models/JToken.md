---
sidebar_position: 18
---
# JToken

The JToken class is part of the library's support for working with JSON data. The code includes asynchronous versions of the WriteTo and Load methods for the JObject class.

- WriteToAsync Method:
  - The WriteToAsync method is used to write the JSON representation of the JObject to a JsonWriter asynchronously. It accepts a JsonWriter object, a cancellation token, and an optional array of JsonConverter objects. The method returns a Task that represents the asynchronous write operation.
- LoadAsync Method:
  - The LoadAsync method is used to asynchronously load a JObject from a JsonReader. It accepts a JsonReader object, an optional JsonLoadSettings object, and a cancellation token. The method returns a Task that represents the asynchronous load operation.
