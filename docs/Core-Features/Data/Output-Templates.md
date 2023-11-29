---
sidebar_position: 8
---

# Output Templates

Here Templates are generated, which can be delivered as a PDF file using a workflow module. Output templates in italic are imported from capsules. Output templates in bold are overridden imported Output templates. Several pages are built up one after the other and are output. To use dynamic data a data source and data model should be selected.

Texts and images defined on Root layout are output on every page. The other pages are divided into Single and Multi.

Multi Page breaks down into:

| Section | Description |
| --- | --- |
| BaseLayout | Settings here will effect only the current multi page template, if you have 2 different multipage templates, each one will have its own specific base layout |
| Single Page | If the section can fit into one page this page is used |
| Multi start page | The first page that is printed in a multi page document |
| Multi middle page | This will be repeated until all the pages are filled correctly, it should have a repeat element inside of it for the list to be generated correctly |
| Multi end page | The final page inside a multi page output template |

The available properties are:

| Property | Description |
| --- | --- |
| Name | Unique name, under which the Output Template is saved |
| Root Layout – Edit | Editing the root for e.g., header and footer |
| Root Layout – Use | Applying the root |
| Root Layout – Change orientation | Changes the orientation of the root side |
| Page Type | Single = single pageMulti = multipage page |
| Datamodel | Data model available for this page |
| New page at overflow (single) | If object longer than one page, page will wrap |
| + (bottom right) | Add new single page |
| (+) (bottom right) | Add new multipage |
| Copy | Add new page via copy function |
| Change orientation | Change the orientation of the page |
| Delete | Delete page |
| Arrows | Move position of this page within the pages |
| Single/Multi page – edit | Edit Single/Multipage |
| Single/Multi page – use | Use Single / Multi Page |
