---
sidebar_position: 10
---
# Convert

It contains various static methods for converting between different data types and performing encoding/decoding operations. Here's an overview of the class and its methods:

- ToDouble(object value): Converts the provided value to a double and returns the result
- ToInt32(object value): Converts the provided value to an int (32-bit integer) and returns the result
- ToInt64(object value): Converts the provided value to a long (64-bit integer) and returns the result
- ToUInt32(object value): Converts the provided value to an unsigned int (32-bit unsigned integer) and returns the result
- ToUInt64(object value): Converts the provided value to an unsigned long (64-bit unsigned integer) and returns the result
- ToDecimal(object value): Converts the provided value to a decimal number and returns the result
- ToDateTime(object value): Converts the provided value to a DateTime object and returns the result. If the value is a JValue representing a date in JSON format, it extracts the DateTime value from it
- TryParseDouble(string value, double ret): Tries to parse the provided string value as a double and returns a Boolean indicating whether the parsing was successful. If successful, the parsed double value is assigned to the ret output parameter
- TryParseInt32(string value, int ret): Tries to parse the provided string value as an int and returns a Boolean indicating whether the parsing was successful. If successful, the parsed int value is assigned to the ret output parameter
- TryParseInt64(string value, out long ret): Tries to parse the provided string value as a long and returns a Boolean indicating whether the parsing was successful. If successful, the parsed long value is assigned to the ret output parameter
- TryParseDecimal(string value, out decimal ret): Tries to parse the provided string value as a decimal and returns a Boolean indicating whether the parsing was successful. If successful, the parsed decimal value is assigned to the ret output parameter
- ConvertToDynamic(JToken jobj): Converts a JToken (JSON token) object to a dynamic ExpandoObject by serializing and deserializing it using JSON.NET. It returns the resulting dynamic object
- ToBase64String(string plainText): Converts the provided plain text string to a Base64-encoded string and returns the result
- FromBase64String(string base64EncodedData): Converts the provided Base64-encoded string to its corresponding plain text representation and returns the result
- BytesToBase64String(byte[] bytes): Converts the provided byte array to a Base64-encoded string and returns the result
- BytesFromBase64String(string base64EncodedData): Converts the provided Base64-encoded string to its corresponding byte array representation and returns the result
