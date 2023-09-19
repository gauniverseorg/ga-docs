---
sidebar_position: 21
---
# NonDatabase

This class is used as a wrapper for interacting with a non-database data source.
Here is a breakdown of the code:

- The class has a private field _Database of type INonDatabase, which represents the non-database data source.
- The class constructor takes two parameters: modelName and nonDBName. It initializes the _Database field by searching for the specified non-database data source based on the provided model name and non-database name. It uses the ContainerWrapper.ModelNameToId method to convert the model name to an ID. It then creates a filter dictionary to search for the data source based on the model ID and name. It uses the Core.Base.Statics.MetaDatabase.LoadAll method to load all data sources that match the filter criteria. It iterates through the loaded sources and assigns the first non-null non-database object to the_Database field.
- The class has a method called ListResources that takes a path parameter. It checks if the _Database field is not null and calls the ListResources method on the_Database object, passing the provided path. If the_Database field is null, it returns an empty list of NonDatabaseResourceItem.
  - For example, in a media server like the MinIO, you can display the content of a path. The return object in the list indicates, among other things, the name of the file, the size and whether it is a folder.

This NonDatabaseWrapper class provides a convenient way to interact with a non-database data source by encapsulating the logic of finding and accessing the data source. It allows you to list resources within the data source based on a specified path.
