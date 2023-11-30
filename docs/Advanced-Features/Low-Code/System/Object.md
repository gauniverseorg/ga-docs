---
sidebar_position: 24
---
# Object

The code provides utility methods for working with objects. The class has three static methods:

- The keys method takes an obj parameter of type object and returns an array of keys extracted from the object. The method checks the type of the object and performs different operations based on the type:
  - If the object is a JObject, it retrieves the properties of the JObject and selects their names
  - If the object is an ExpandoObject, it casts the object to IDictionary and retrieves the keys
  - If the object is an InstanceClass, it retrieves the keys from the Properties dictionary of the InstanceClass
  - If the object is an array, it creates an array of integers representing the indices of the array
  - If the object is an IDictionary, it retrieves the keys directly from the dictionary
- The values method takes an obj parameter of type object and returns an array of values extracted from the object. The method performs similar operations to the keys method, but retrieves the values instead of the keys
- The assign method takes two parameters: target and source, both of type object. It performs an assignment operation, where the properties or entries from the source object are assigned to the target object. The method checks the types of the target and source objects and performs different operations based on the types:
  - If both the target and source objects are JObject, the method iterates over the properties of the source object and assigns them to the corresponding properties of the target object
  - If the target object is IDictionary<string, object> and the source object is ExpandoObject, the method iterates over the entries of the source object and assigns them to the corresponding entries of the target object

The ObjectWrapper class provides convenient methods for extracting keys and values from objects, as well as assigning properties or entries from one object to another.
