---
sidebar_position: 18
---
# JSON

It is a static wrapper class called JSON. This class provides methods for parsing and stringifying JSON data using the Newtonsoft.Json library.
The class provides three static methods:

- parse: This method parses a JSON string (str) and returns the deserialized JSON object as a JToken (which is a representation of a JSON token). The Function parameter (func) is not used in the method  
- stringify: This method serializes an object (obj) into a JSON string. The serialized JSON string is returned as a string. The Function parameter (func) is not used in the method
- parseIgnoreDate: This method is similar to the parse method but it includes a JsonSerializerSettings object to handle date parsing. It specifically sets the DateParseHandling property to DateParseHandling.None, which means that dates in the JSON string will not be automatically parsed as dates. The deserialized JSON object is returned as a JToken

The JSON class provides a convenient way to parse JSON strings into objects and serialize objects into JSON strings.
