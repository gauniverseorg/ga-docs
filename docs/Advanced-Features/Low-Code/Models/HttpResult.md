---
sidebar_position: 21
---
# HttpResult

This class represents the result of an HTTP request and contains the following properties:

- StatusCode: An enumeration of type HttpStatusCode that represents the HTTP status code of the response.
- IsSuccessStatusCode: A boolean value indicating whether the HTTP request was successful or not.
- IsString: A boolean value indicating whether the Result property should be treated as a string. It is initialized to true by default.
- Result: A string that contains the result of the HTTP request. This property is used when IsString is set to true.
- Headers: A dictionary that stores the headers of the HTTP response. The dictionary uses string keys and string values.
- Bytes: An array of bytes that contains the raw response data. This property is used when IsString is set to false or when the response is not textual.
