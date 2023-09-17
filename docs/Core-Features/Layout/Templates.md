---
sidebar_position: 3
---
# Templates

Templates are predesigned pages that can be dropped to another page to expedite the development process.
For example, if you have a kind of certain grid that is used in different pages it could be better for you to have it as a template so you can:
- Save time in replicating it
- Save time in changing it
- Standardize the development process

## Template Creation

1. Go to Settings – Layout – Templates
2. Click on the add (+) button
3. Name the template and click save
4. Open the template using the Pen sign:
    1. Change the name of the undefined element into root.
    2. Set the data source on renamed element
    3. Insert text blocks or other elements that can store the data
    4. Data bind the variables into the elements

## Editing Templates

1. From the creation page select template
2. Click on the edit button (Pen sign)

## Inserting Into Page

1. Go to page you want to insert into
2. In the base select the data source, also select overflow scroll and position absolute, since you might want to make the page scrollable
3. Insert a repeat element inside the base
    - You can insert it into a another layout element if its not a list of data objects.
4. From the toolbox pick select templates
5. Look up template name
6. Drag and drop template into repeat element, make sure to select load by reference since you want to load it using the default options not new ones

## Template Settings

Load by reference allows mirroring of changes to and from the original template page.
