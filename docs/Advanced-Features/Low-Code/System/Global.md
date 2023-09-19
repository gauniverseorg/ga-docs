---
sidebar_position: 14
---
# Global

It contains various static methods and properties that can be accessed globally within the application. Here's an overview of the class:

- Method sleep(int milli): Suspends the current thread execution for the specified number of milliseconds.
- Method createHash(string source): Generates a hash value for the given source string using the SHA1 algorithm and returns it as a string.
- Method verifyHash(string source, string hashValue): Verifies if the hash value of the given source string matches the provided hash value.
- Method getHash(HashAlgorithm hashAlgorithm, string input): Computes the hash value of the input string using the specified HashAlgorithm and returns it as a string.
- Method isNull(object obj): Checks if the provided object is null, a JSON null token, or a DBNull value.
- Property CurrentUICulture: Gets the current UI culture identifier.
- Property CurrentUserId: Gets the current user's ID.
- Method getTranslation(object obj): Retrieves the translation of an object. It supports various object types, including strings, TranslatedString, JObject, and ExpandoObject.
- Method GetMediaClient(string name): Retrieves an IMediaClient based on the provided media source name.
- Method GetMediaSource(string name): Retrieves a MediaSource based on the provided name.
- Method zipFiles(Dictionary files): Zips the provided dictionary of file names and byte arrays into a single byte array representing a zip archive.
- Method unzipFiles(byte[] bytes): Unzips the provided byte array, representing a zip archive, and returns a dictionary of file names and corresponding byte arrays.

These methods and properties are designed to provide utility functions and access to common functionalities across the application.
