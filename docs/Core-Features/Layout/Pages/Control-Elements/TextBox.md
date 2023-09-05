---
sidebar_position: 1
---
# Textbox

Input box that allows user to type into. Placeholder and tooltip can be set

| **Property** | **Description** |
| --- | --- |
| Input Type | Color, Date, Date Time, Email, Month, Number, Password, Search, Phone, Text, Time, URL, Week |
| Input Mode | None, Text, Decimal, Numeric, Telephone, Search, Email, URL |
| Read-only | Unable to edit box |
| Use Validation | Checkbox to allow validation use |
| **Use Validation – Filter Type** | pint (positive integer), int, pnum (positive number), money, num, hex (hexadecimal), email, alpha (alphabetical), alphanum (alphanumerical), regex (regular expression) |
| Use Validation – Validation Only | Validates when a key is pressed and triggered event |
| Use Validation – CheckWholeExpression | Validates complete text and raises event. Depending on Validate Only only in connection with RegEx |
| Use Validation – Message | Displays message if validation failed |
| Use Key Down Delay | Activate Key Down Delay (Delay is in ms) |
| UseFloatingLabel | Only in connection with Bootstrap ThemeWhen the clicks on the text box, the placeholder is moved to above the box. |

| Exclusive event | Description |
| --- | --- |
| Text Changed | When entering text and confirming it with the enter key |
| KeyPress | When a key is entered (Obsolete.) |
| KeyDown | When a key is entered |
| KeyUp | When the key is no longer pressed |
| ValidationFailed | When the text validation specified fails |
