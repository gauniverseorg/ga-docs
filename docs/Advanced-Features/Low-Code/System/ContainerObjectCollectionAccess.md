---
sidebar_position: 7
---
# ContainerObjectCollectionAccess

It is a wrapper class for working with a collection of objects stored in a container. Here's an overview of the class and its methods:

1. Constructor

    - ContainerObjectCollectionWrapper(Container container, Dictionary<string, object\> properties = null): Initializes a new instance of the ContainerObjectCollectionWrapper class. It takes a Container object representing the collection container and an optional dictionary of properties as parameters. The constructor assigns various interfaces to the \_Connection, \_DocumentRead, \_DocumentWrite, \_DocumentBulk, and \_DocumentBatch fields, based on the connector created from the container using the provided properties. It also assigns the resource table from the container to the \_Table field and sets the table for document read operations.

2. Methods

    - Clear(): Clears the container by calling the Clear method on the _Connection object.
    - SetFilter(RestFilter filter): Sets a REST filter for the container by calling the SetRestFilter method on the _DocumentRead object, passing the provided filter and the resource table as parameters. RestFilter can be found under Models modules.
    - SearchDocuments(): Searches for documents in the container by calling the SearchDocuments method on the _DocumentRead object. It returns an IEnumerable representing the search results.
    - GetFirstDocument(): Retrieves the first document in the container by calling the FirstDocument method on the _DocumentRead object. It returns an object representing the first document.
    - GetDocumentCount(): Retrieves the count of documents in the container by calling the GetDocumentCount method on the _DocumentRead object. It returns an integer representing the document count.
    - DeleteDocuments(): Deletes documents from the container by calling the DeleteDocuments method on the _DocumentWrite object. It returns an integer representing the number of deleted documents.
    - UpdateDocuments(Dictionary<string, object\> values): Updates documents in the container with the provided values by calling the UpdateDocuments method on the _DocumentWrite object. It accepts a dictionary of column-value pairs as a parameter. It returns an integer representing the number of updated documents.
    - InsertDocument(object obj): Inserts a new document into the container by creating a document access object and loading it with the provided object. It then calls the InsertDocument method on the _DocumentWrite object, passing the document access object as a parameter.
    - ReplaceDocument(object obj): Replaces an existing document in the container with the provided object. It creates a document access object, loads it with the object, and calls the ReplaceDocument method on the _DocumentWrite object, passing the document access object as a parameter. It returns a boolean indicating whether the replacement was successful.
    - WriteBulk(List<object\> objs): Writes a bulk of documents to the container. It creates a list of document access objects based on the provided list of objects and calls the WriteBulk method on the _DocumentBulk object, passing the list of document access objects as a parameter.
    - Flush(): Flushes any pending batch operations by calling the Flush method on the _DocumentBatch object.

3. Properties

    - SupportsBatch: Gets a boolean value indicating whether batch operations are supported by the container. It returns the value of the SupportsBatch property of the _DocumentBatch object.
    - EnableBatch: Gets or sets a boolean value indicating whether batch operations are enabled for the container. It gets or sets the value of the EnableBatch property of the _DocumentBatch object.
    - BatchSize: Gets or sets the batch size for batch operations on the container. It gets or sets the value of the BatchSize property of the _DocumentBatch object.

The ContainerObjectCollectionWrapper class provides methods for manipulating and querying a collection of objects stored in a container. It allows you to perform operations such as searching, retrieving, deleting, updating, inserting, and replacing documents in the container. It also provides support for writing bulk documents and batch operations if enabled.
