---
sidebar_position: 4
---
# Cache

The Cache class provides a simple way to store and retrieve objects in a shared cache. It uses a dictionary to store the objects, and each object is associated with a key and a validity period. When retrieving an object, the validity period is checked to determine if the object is still valid. If an object's validity has expired or it doesn't exist in the cache, null is returned.

All service workflows are executed in a separate worker. Unless you explicitly state that the workflow should run in the service node. Here’s an overview of the class and its methods:

1. Methods

    - cache(string key, object obj, int validInMinutes = -1): Adds an object to the cache with the specified key and validity period in minutes. By default, the validity period is set to –1, indication that the object has no expiration
    - get(string key): Retrieves an object from the cache based on the specified key. If the object exists and its validity period has not expired, it is returned; otherwise, null is returned
    - remove(string key): Removes an object from the cache based on the specified key

2. CacheObject class

    - Represents an object stored in the cache
    - Contains the following properties:
        - AddedToCache: Represents the date and time when the object was added to the cache
        - ValidInMinutes: Specifies the validity period of the object in minutes
        - Object: Stores the actual object
