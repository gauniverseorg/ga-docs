---
sidebar_position: 1
---

# Layout

WFBs that affect the page layout

| Name                    | Description                                                                                   | Parameters                                                                                                                                                                                         | Result                      |
| ----------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Read Values             | Read values from page element and assign it to a status key or keep it as a current parameter | <li>Element: Element which data is read from</li><li>Status Key: Key used to access data later</li>                                                                                                | Returns a current parameter |
| Set Values              | Set Values of a page element to the desired status using the status key                       | <li>Element: Element which data is read from</li><li>Status Key: Key used to access data later</li>                                                                                                | Returns a current parameter |
| Add Item To List        | Add value to a predefined list                                                                | Element: Element whose data will be added to the list                                                                                                                                              | N/A                         |
| Remove Item From List   | Remove a specified value from a list                                                          | Element: element which has the list stored on                                                                                                                                                      | N/A                         |
| Set Focus               | Set the focus to a specific element                                                           | Element: Element which will be focused on                                                                                                                                                          | N/A                         |
| ScrollTo                | Scrolls to the selected element                                                               | <li>Element: Element which will be scrolled to</li><li>Smooth scroll: Enables scrolling to the element position smoothly</li><li>Scroll to position: Set the X and Y coordinates to scroll to</li> | N/A                         |
| Set Control Properties  | Change the element’s properties                                                               | <li>Element: Element whose properties will be changed</li><li>Property: Property of the element that will be changed</li><li>Formula: The new property value</li>                                  | N/A                         |
| Read Control Properties | Retrieve the element’s properties                                                             | <li>Element: Element whose properties will be read</li><li>Property: Property of the element that will be read</li><li>Status Key: The key used to access that property</li>                       | N/A                         |
