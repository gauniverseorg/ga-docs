---
sidebar_position: 23
---
# Numbers

The code provided defines a static class called Numbers. Here’s a breakdown of the class:

- The Numbers class contains static methods for managing number ranges.
- The class has an internal static NoReadLockSyncDictionary<GUID, NumberCircle> _Circle field, which is a thread-safe dictionary used to store number circles.
  - Note: Number circle is the internal name for number range.
- The static constructor initializes the_Circle dictionary and registers message channels for Redis communication.
- The Instance_MessageReceived method is the event handler for Redis message reception. When a message is received on the registered channels, the _Circle dictionary is cleared and reloaded with number circles from the database.
- The class has internal methods for creating, deleting, and checking the existence of number circles in the database.
- The GetNextNC method retrieves the next number from the specified number circle based on its ID. It updates the number circle's value in the database and returns the formatted number.
- The GetNextNCByName method retrieves the next number from the number circle with the specified name. It first checks if the number circle is present in the_Circle dictionary. If not, it attempts to load the number circle from the database using its name and then calls the GetNextNC method to get the next number.
- The GetActualNumberInfo method retrieves the current number from the specified number circle based on its ID. It retrieves the number circle from the _Circle dictionary or loads it from the database. Then it retrieves the current number from the database, applies the number circle's format string if available, and returns the formatted number.

Overall, the Numbers class provides functionality for managing number circles, including creating, deleting, retrieving next numbers, and retrieving current number information. It utilizes Redis for inter-process communication and a database connector for accessing the underlying database.
