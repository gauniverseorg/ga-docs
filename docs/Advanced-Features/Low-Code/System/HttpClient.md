---
sidebar_position: 16
---
# HttpClient

It is a wrapper around the HttpClient class to simplify HTTP requests. Here's an overview of the class:

- Constructor: The class has multiple constructors that allow you to initialize an instance of HttpClientWrapper with a base address, enable/disable cookie usage, and ignore SSL certificate errors
- setTimeout(int seconds): Sets the timeout for HTTP requests in seconds
- setHeader(string name, string value): Sets a custom header for HTTP requests
- setBasicAuth(string username, string password): Sets the Basic Authentication header for HTTP requests
- clearHeader(): Clears all custom headers
- post(string uriPath, object cont, string type): Performs a POST request to the specified URI path with the provided content. The cont parameter can be a string, a Stream, or a byte array. The type parameter specifies the content type (default is "application/json"). Returns an HttpResult object with the response details
- put(string uriPath, object cont, string type): Performs a PUT request to the specified URI path with the provided content. The parameters are similar to the post method
- patch(string uriPath, string cont, string type): Performs a PATCH request to the specified URI path with the provided content. The parameters are similar to the post method
- get(string uriPath): Performs a GET request to the specified URI path. Returns an HttpResult object with the response details
- getWithBody(string uriPath, string cont, string type): Performs a GET request with a body to the specified URI path. The parameters are similar to the post method
- delete(string uriPath): Performs a DELETE request to the specified URI path. Returns an HttpResult object with the response details
- head(string uriPath): Performs a HEAD request to the specified URI path. Returns an HttpResult object with the response details
- CreateQueryString(Dictionary<string, string> parameters): Creates a query string from a dictionary of parameters
- UrlEncode(string text): URL-encodes the specified text
- UrlDecode(string text): URL-decodes the specified text

The HttpClientWrapper class provides a simplified interface for making HTTP requests using the HttpClient class. It supports common HTTP methods (POST, PUT, PATCH, GET, DELETE, HEAD) and provides convenient methods for setting headers, handling authentication, and working with query strings. The responses are encapsulated in an HttpResult object, which includes the status code, success status, response content, headers, and more.
