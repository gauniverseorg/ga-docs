---
sidebar_position: 33
---
# WorkflowStatus

This class serves as a wrapper for interacting with a WorkflowStatus object. Here is an explanation of the code:

- The class has a constructor that accepts a WorkflowStatus object and assigns it to the private field _Status
- The class provides several properties and methods for working with the workflow status:
  - ActualParameter: Gets or sets the actual parameter of the workflow status
  - ActualEntryOption: Gets the actual entry option of the workflow status
  - this[string key]: Allows accessing values in the workflow status using an indexer. It retrieves the value associated with the specified key or sets a new value for the key
  - SetValue: Sets a value in the workflow status context associated with the specified key
  - GetValue: Retrieves the value from the workflow status context associated with the specified key
  - SetCacheValue: Sets a value in the workflow status cache associated with the specified key
  - GetCacheValue: Retrieves the value from the workflow status cache associated with the specified key
  - LogInfo: Logs an informational message using the logger of the workflow status
  - LogError: Logs an error message using the logger of the workflow status
  - LogWarning: Logs a warning message using the logger of the workflow status
  - AddToList: Adds an object to a list in the workflow status context associated with the specified key. If the key does not exist or the value is not a list, it returns false

The StatusWrapper class provides a convenient and simplified interface for interacting with a WorkflowStatus object, allowing you to get and set values, log messages, and perform operations on lists within the workflow status.
