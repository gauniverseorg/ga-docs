---
sidebar_position: 1
---

# Data Objects

Definition of the available data structure as ContainerClassObject. Dataobjects serve as GA_universe's internal basis for surfaces etc. The GA_universe is optimized for these objects. The data for data objects are in the standard in the cluster.

Available properties are:

| Property        | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delete Complete | When ever the object is deleted, is completely erased from the data base. If this is turned off, only the status is updated to hidden.                                                                                                                                                                                                                     |
| Versioning      | When this is turned on, when the object is changed or updated, a new object is created and the \_Version value is updated indicating that a new version is added, while the older version is hidden. If it is turned off, the object itself is updated without changing the \_Version value and without hiding any object since no new ones are created.   |

## Creation

1. Navigate to Data – Data Model – (Choose the data model) – Datastructure – Dataobjects

2. Click on the add (+) button

3. Complete the related information (Name, Datasource)

   1. Name: Unique name, under which the dataobject is saved

   2. Translation: Name that is displayed for the maintained language

   3. Datasource: MongoDB comes with a standard capsule and is used for data storage. The standard size is 10 GB, but this can be changed via the portal

   4. Delete Complete: No Delete flag, only direct deletion

   5. Versioning: Every save action creates a new document with versioning

   6. Offline: Is activated in the instance(Settings – General – Offline). The data is loaded in IndexedDB and stays available even when the Internet connection is interrupted

4. Click on the add (button) to add new fields

5. Fill the related field information

   1. Name: Unique name, under which the dataobject is saved

   2. Translation: Name that is displayed for the maintained language

   3. Type: Type of the field (Any, Class, Boolean, Date, Double, Enum, Guid, Integer, Long, Text, TimeSpan, Multilingual Text, Type, User)

   4. Primary Key

   5. ReadOnly

   6. Mandatory Field

   7. Nullable: Field must not be NULL

   8. List: Field is list of objects

   9. Default: Default value

6. Repeat steps 4 & 5 for number of fields needed

7. Save
