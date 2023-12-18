---
sidebar_position: 3
---
# BulkOperations

It contains several methods that perform batch operations on an object database. Here's an overview of the class and its methods:

## Properties

- SupportsBatch: Indicates whether batch operations are available for the container
- EnableBatch: Gets or sets a value indicating whether batch operations are enabled
- BatchSize: Gets or sets the batch size for batch operations

## Constructor

- Takes a GUID parameter called classId and initializes the class fields based on it

## Methods

- Delete(RestFilter filter = null): Deletes documents from the container based on the specified filter. RestFilter can be found under Models modules
- DeleteFrom(List &lt;UpdateColumnWrapper&gt; updates, RestFilter filter = null): Deletes specific columns from documents based on the specified filter
- Search(RestFilter filter = null): Executes a search query on the container based on the specified filter and returns the results
- Update(List updates, RestFilter filter = null): Updates documents in the container based on the specified filter and column updates
- Insert(JObject obj): Inserts a new document into the container using the provided JObject.  JObject can be found under Models modules
- Replace(JObject obj, RestFilter filter = null): Replaces documents in the container based on the specified filter with the provided JObject
- InsertMany(List&lt;JObject&gt; objs): Inserts multiple objects into the container
- Flush(): Forces the execution of all pending batch actions

## UpdateColumnWrapper class

- Represents a wrapper class for column updates
- Contains properties that correspond to the different update options, such as value, increment, factor, source column, etc
- Provides a ToColumn() method that converts the wrapper object to an UpdateColumn object. UpdateColumn can be found under Models modules

The BulkOperationsWrapper class provides a convenient way to perform batch operations on an object database, such as deleting documents, updating documents, searching, and more
