---
sidebar_position: 13
---
# ExportObject

It wraps an IExportObject instance and provides methods and properties to interact with it. Here's an overview of the class:

- Constructor ExportObjectWrapper(Guid classId): Initializes an instance of the ExportObjectWrapper class by retrieving an IExportObject instance based on the provided classId. The classId is used to get the container object of type ContainerClassObject
- Property FirstRun: Gets or sets the value indicating whether it's the first run of the export object.
- Property EnableBlockModus: Gets or sets the value indicating whether block modus is enabled for the export object
- Property BlockLines: Gets or sets the number of block lines for the export object
- Method Clear(): Clears the export object
- Method Flush(): Flushes the export object
- Method IsBlockSupported(): Checks if block mode is supported by the export object
- Method IsExportSupported(): Checks if export is supported by the export object
- Method SaveObject(JObject jObject): Saves the provided JObject to the export object. It invokes the SaveObject method of the underlying IExportObject and returns the _Id property value of the jObject as a Guid
