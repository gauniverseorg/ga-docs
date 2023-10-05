---
sidebar_position: 5
---

# Data

This data tutorial will be going over Datamodels, DataObjects, and Enums.

## Datamodels

Datamodels are the container that contains all your data, useful for containing data for different separate functions (User interaction, Database, Reporting).

### Creating Datamodel

The following are the steps needed to create a datamodel:

1. Navigate to the settings
2. Navigate to the Data tab, and then select the datamodel tab
3. Open the overview and create your data model by clicking the + button
   - Note: For this example we assume that you have already created a datasource and configured it. If not, please refer to the documentation on how to create a datasource

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

### Creating a DataObject

1. Open the newly created Datamodel and choose the DataObjects tab
2. Create a new DataObject by clicking the + button
3. Add fields and types
4. Name the table
5. Save

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

## Enums

One other important data type is the Enum or the Enumeration. They are essentially a group of certain values/constants that doesn’t get appended to or removed during the app execution

### Creating Enums

1. Navigate to the settings page
2. Open the data tab then the data model tab
3. Open the data model we created in the last example and select the Enums tab
4. Create your Enum from the + button in the lower left corner
5. By clicking the + button in the middle you can add a new Enum value. And these values are unchanged and constant. You can reference these values by an Id that you can get by clicking to the left of the Enum name
6. Name the Enum and save it

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

## Operations on Datamodels

Now you have an Enum, and a data table and you are probably wondering how can I add data to the data model? There are many ways to add the data and you can find it in the documentation but for now we will go about how we add the data from a page

For this example, we assume that you have already made a data object that has 3 data fields, two for string and for an integer value. We also assume that the page is empty and has nothing except the base grid

1. Navigate to the page where you want your data table
2. Open the AppBuilder by clicking F2
3. Divide the base grid into 2 different rows
4. In the first row, add a flex add 3 TextBoxes and Buttons inside that flex
5. Customize the elements as wanted
6. Add a DataTable element in the second row

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

7. Now go to the base grid properties and add a data source. And also go to the textboxes and the checkbox and bind the data relevant to the control item. Note: The Datasource type is dynamic
8. After adding the data source, go to the datatable properties and choose the data table columns and select all the data you want to show. Note: you must select the \_Id as must be used when fetching data and filtering and so on

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

Now you have to create the workflows to add, save, and delete the data.

### Add workflow

1. Drop a "Add Item" WFB which uses the flex element
2. Drop a "Refresh" WFB to be used on the DataTable
3. Save as add

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

### Save workflow

1. Drop a "Save Item" WFB which uses the flex element. Note: Link the successfully recreated and saved successfully to the next step
2. Drop a "Refresh" WFB to be used on the DataTable
3. Save as save

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

### Delete workflow

This requires 2 different workflows

- One for selecting the item to delete
- One for the actual deletion

#### Selection

1. Drop a "Get List Item" WFB and set it to get the first entry. Note: this is done because when we later select any item from the datatable the selection is always an array of objects and what we are doing here is just casting it into one object
2. Drop a "Read Properties" WFB and set it to read the property name "\_Id" and assign it a status key (Ex. idToDelete)
3. Drop a "Read Data" WFB and select your datasource and filter it by comparing "\_Id" with "idToDelete"
4. Drop a "Get List Item" WFB once again
5. Drop a "Set Values" WFB and select the flex element
6. Save as onSelect

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

#### Deletion

1. Drop a "Delete Item" WFB which uses the flex element
2. Drop a "Refresh" WFB to be used on the DataTable
3. Save as delete

After making the workflows, we have to link them with events.

- Add the workflows on their respective buttons by toggling the "MouseClick" event and assign respective workflow. (Add, Delete, and Save)
- On the Datatable, bind the "OnSelect" event to the onSelect workflow

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

That should be it! Try it out by adding, saving and deleting

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

### Datatable Changes

Lets assume you were instructed to change the table schema to add 2 elements, an isActive flag and the employee's department

1. Navigate to DataObjects page in the settings
2. Add the isActive field and set default as true
3. Add the department and pick the Enum you created before

These changes should be reflected on the page as well

1. Add a combobox inside the flex and data bind it to the department field
2. Add a checkbox inside the flex and data bind it to the isActive field
3. Modify their properties to make them editable
4. Add the 2 columns to the datatable and set them to visible to be able to show them in the datatable

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

That's it! The page now functions as intended. Note: if there were any previous data points the new values will be null so it should be changed when the new columns are added. This can be done using a service side workflow or done manually.

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

## Images

To store an image in your datatable:

- Make sure you have a media source.

  1. In the settings go to the data tab.
  2. Inside the data tab, go to the media sources.
  3. Add your preferred media source and its credentials.
  4. Make sure you have a data source.

- Create a DataObject for an image class
  1. Create a new dataobject named “Images”
  2. Create 2 text data fields
  3. Name the first “url”
  4. Name the second “name”

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

If you want to include the image in your DataObject:

1. Create a new class data field
2. Select the "Images" DataObject you created for the data model without reference

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

For page changes:

1. Drop a layout inside the flex (Grid, Repeat, etc). For multiple images, use a Repeat layout
2. Bind it to the image field
3. Add an upload button, and set it's type as image
4. Drop image element in the layout
5. Bind the image element to the URL
6. Select Media Source
7. Optionally, drop a text box for the title

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>

You now need a workflow to display the image, create a workflow that is triggered on the event on Upload Complete

Inside the workflow drop the following:

1. For Loop
2. Set Status as image
3. Define object. Select the data source for the image. The default value: name => GetProperty(image; "OriginalFilename") and the url=> GetProperty(image; "ResultingFilename")
4. Add item to list (If multiple images)
5. Set values onto the image layout

<center>

![Hello world gif](../../static/img/placeholder.gif)

</center>