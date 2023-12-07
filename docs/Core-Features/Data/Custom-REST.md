---
sidebar_position: 7
---

# Custom REST

Here is defined the custom REST for the external access of data and also the start of the Workflows, which can be used externally. Custom REST in italic are imported from capsules. Custom REST in bold are overridden imported Custom REST. The available properties are:

| Property | Description |
| --- | --- |
| Name | Unique name, under which the Custom REST is saved |
| Translation | Name that is displayed for the maintained language |
| SendRawResult | Send raw result, if this is turned off, the result is sent along with 2 other elements in the json. |
| UseWorkflow | Allows you to select a specific workflow to use when this API is called |
| Use workflow – workflow | Select a specific workflow |
| Use workflow – Method type | Either a post or get request |
| Use workflow – Set body to parameter | Send the body to a specific parameter inside the workflow |
| Use workflow – Execute workflow directly | Runs workflow directly in middleware service and not in a worker. |
| Static Datasource | Static data source selectable by name |
| Datamodel | Datamodel for data source |
| Datasource | Select a specific data table inside the data mode |
| Type | Type of access to the data table, one of the following:<li> Save</li><li> Force Save</li><li>Delete</li><li> Force Delete</li><li>Delete By filter</li><li> Search Objects</li><li> Count Objects</li><li> Open Cached Query</li><li> Close Cached Query</li><li> Execute Cached Count Query</li><li> Execute Cached Query</li><li> Execute Query</li><li> Execute Object Query</li>|
| HeaderMapping | Override API's request and response parameters |
| AuthentificationHeaders | Credentials to authenticate a user agent with a server.If left empty, the user should use basic auth when calling this API endpoint |
| URL | URL path used to get to this current API endpoint |
| Method | The type of method which will be used |
| Headers | What header values should be included in the request |
| Body | What body values should be included in the request |

## Save

This type allows the user to insert into a table inside GA, before a save happens GA middleware first checks if the table can accept this object using different data types and such. The format for such custom rest is:

~~~ json
[
  {
    "Key": "body",
    "Value": {
      "name": "Test Name",
      "description": "Test Description"
    }
  }
]
~~~

## Force Save

Similar to Save, it will save an item to a data table but it won't check data types and fields of the passed parameters, not recommended to use. Uses the same format as Save.

## Delete

Deletes one item from a data table inside GA, it will first check if this item is used any where else in GA before deleting, if it is not used it will be deleted, if it is used it won't be deleted. It requires two parameters inside the body, and they are the version and GUID of the object to be deleted. The format for such a custom rest is:

~~~ json
[
  {
    "Key": "id",
    "Value": "00000000-0000-0000-0000-000000000000" // ID GUID
  },
  {
    "Key": "version",
    "Value": "00000000-0000-0000-0000-000000000000" // Version GUID
  }
]
~~~

## Force Delete

Similar to delete, the only difference is that it doesn't check if the object is used, and deletes it if it was found. Follows the same structure as delete.

## Delete By Filter

Allows the user to delete multiple objects at the same time using the same filtering structure that GA uses. The format for such a custom rest is:

~~~ json
[
  {
    "Key": "filter",
    "Value": {
      "Filters": [
        {
          "ConcatOperator": 0,  // 0 is and, 1 is or
          "Filters": [
            {
              "Name": "id",
              "Value": 2,
              "Operator": 0 // Takes the values off the enum in low code scripting.
            }
          ]
        }
      ]
    }
  }
]
~~~

## Search Objects

Returns a list of objects that follow the filtering criteria given to the body. Follows the same format given to delete objects by filter.

## Count objects

Returns the number of items that match the filtering criteria given to the body. Follows the same format given to delete objects by filter.

## Open Cached Query

Create a query that can be called using execute cached query/ execute cached query count. An ID is returned that can be used to call this opened query, it follows the same format given to delete objects by filter.

## Close Cached Query

Close an opened query that was created using the open cached query custom rest, it follows the following format:

~~~ json
[
  {
    "Key": "id",
    "Value": "00000000-0000-0000-0000-000000000000" // Guid for the opened query
  }
]
~~~

## Execute cached count query

Returns the number of items that match the opened query, follows this format:

~~~ json
[
  {
    "Key": "id",
    "Value": "00000000-0000-0000-0000-000000000000" // Guid for the opened query
  }
]
~~~

## Execute cached query

Execute an opened query by using its ID, returns a list of objects that match the opened query. Its format is:

~~~ json
[
  {
    "Key": "id",
    "Value": "00000000-0000-0000-0000-000000000000" // Opened query ID
  },
  {
    "Key": "start",
    "Value": "Integer"
  },
  {
    "Key": "end",
    "Value": "Integer"
  }
]
~~~

## Execute count

Returns the number of objects inside a table, follows a similar format to the delete objects by filter.

## Execute query

Returns a list of objects inside a table, follows a similar format to the delete objects by filter.

## Execute object query

Returns a list of objects inside a table, follows a similar format to delete objects by filter.
