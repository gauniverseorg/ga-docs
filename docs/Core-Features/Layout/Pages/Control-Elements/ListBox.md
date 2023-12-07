---
sidebar_position: 17
---
# ListBox

A list that supports data binding and provides filter/search functionality

| **Property** | **Description** |
| --- | --- |
| Display Member | If the data source is stored, selection of the member to be displayed |
| Extended display | Select which properties of the object to be visible (Ex. In the formula editor is entered Firstname + "" Lastname – then in the listbox the 2 names are shown together) |
| Order | Sort shown elements (asc & desc) |
| Multiselect | Multiselect choice |
| DisableAutoLoad | No automatic filling with data from the stored data source |
| ShowFilter | Show input box that allows the user to filter the elements inside the list box based on a criteria they enter. |
| Grow | When turned on the element can grow in height to force the page to be scrollable instead of the element itself. |

| Exclusive event | Description |
| --- | --- |
| Selection Changed | When selecting an item, item data is passed to the WFB. |
| On Focus | When focusing on an item, no data is passed to the WFB |

The listbox has three options for data connection:

- Set Data source on a layout element above the list box: The list box tries to load and display all entries of the DataSource. A selection of properties of the DataSource is available in the DisplayMember.
- Set DataSource on layout above the list box that contains a property that is a list: In the ListboxMenuTab it is now possible to set a data binding on this list. If an object of the DataSource type is now placed on the Grid/Flex, this list property is displayed in the ListBox, and a selection of properties also appears here.
- No DataSource is set: The list must be set directly to the list box using the Set value workflow module, for example. There is no selection in the DisplayMember. However, the PropertyName can be specified there directly.
