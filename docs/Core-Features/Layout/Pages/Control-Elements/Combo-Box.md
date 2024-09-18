---
sidebar_position: 13
---
# Combo Box

A combo box is a dropdown list. It allows users to select an option from a predefined list.

| **Property** | **Description** |
| --- | --- |
| Display Member Path | Depending on the data binding. Select column to display on the combo box |
| Display Formula | Combine several conditions with existing data bindings |
| Value Member Path | Depending on the data binding. Use the selected column value |
| Order | Sorting on Display Member Path |
| Line Height | Row Height |
| Load All | Load all data. Disables Page Size and ComboMaxHeight |
| Page Size | Number of entries fetched per paging request. Regulation of the traffic caused per request |
| ComboMaxHeight | Height of the ComboBox popup |
| Multiple | Multiple selection possible |
| Use Chips | Use chips display, allowing you to deselect elements from the combo box using an X. Only visible after multiple is selected |
| New Entry | Add an extra entry to the control that fires an event that triggers the user to create a new entry |
| Empty Entry | Adds an extra entry to the control that has a NULL value |
| UseFloatingLabel | Only in connection with Bootstrap theme. Placeholder moves |
| Show Filter | Show filters |
| Show Clear | Show delete |

| Exclusive event | Description |
| --- | --- |
| Selection Changed | When selecting an option different than your current option |
| New entry selected | When choosing a new entry in the combobox |
| On Focus | When its focused on |

The Combo Box has three ways of data connection options:

1. **Set DataSource on a layout element above the ComboBox:** The ComboBox tries to load and display all entries of the DataSource. A selection of properties of the DataSource is available in the DisplayMember
2. **Set DataSource on a layout element above the ComboBox containing a property that is a list:** In the ComboBoxMenuTab it is now possible to set a data binding on this list. If an object of the DataSource type is now placed on the Grid/Flex, this list property is displayed in the combo box, and a selection of properties also appears here
3. **No DataSource is set:** The list must be set directly to the ComboBox using the Set Value workflow module, for example. There is no selection in the DisplayMember. However, the PropertyName can be specified there directly
A small box that can be checked or unchecked by the user

| **Property** | **Description** |
| --- | --- |
| Caption | A caption for the combobox |
| Label Position | Position of the text |

| Exclusive event | Description |
| --- | --- |
| Checked | Activates when the checkbox is on the "checked" state |
| Unchecked | Activates when the checkbox is on the "unchecked" state |
