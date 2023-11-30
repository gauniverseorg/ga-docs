---
sidebar_position: 19
---
# JArray

The code includes two methods: WriteToAsync and LoadAsync. Here's an explanation of each method:

- WriteToAsync:
  - This method is used to write the contents of a JArray to a JsonWriter asynchronously. It iterates over the elements in the JArray and writes each element to the JsonWriter. The method accepts a JsonWriter instance, a CancellationToken to monitor for cancellation requests, and an optional array of JsonConverter objects to be used during the writing process
- LoadAsync:
  - This method is used to asynchronously load a JArray from a JsonReader. It reads the JSON content from the JsonReader and constructs a JArray object based on the content. The method accepts a JsonReader instance, a JsonLoadSettings object (or null for default settings), and a CancellationToken to monitor for cancellation requests. It returns a Task representing the asynchronous loading operation
