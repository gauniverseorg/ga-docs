---
sidebar_position: 1
---
# Overview

Here you can create, edit and delete navigation. Navigation structures in italics are imported from capsules. Navigation structures in bold are overridden imported navigation structures. A new navigation can be created at the bottom using + Create New button. Whenever a navigation is added, it is automatically added to all app switchers. The available properties when creating or editing a navigation are:

| Property | Description |
| --- | --- |
| Key | Unique key. This is also used in the application switcher. No translation possible |
| Default Navigation | The selected navigation structure is activated for the user during login |
| UserRegistrationWorkflow | The workflow stored here is called when the registration URL is called (e.g., for user creation) No login is required for this, as anonymous access is permitted. |
| Landing page | The page, where the user arrives after login. Here the pages from the Layout – Pages can be selected (landing page can be changed) |
| Default Theme | The theme that applies to the navigation structure is defined here The themes are defined under "Corporate Identity – Themes" |
| Available Themes | The themes provided to users for this navigation structure. These are available via Theme – Control. The themes are defined under Corporate Identity – Themes |
| CSSFiles | CSS files that were created under Settings - Corporate Identity - CSS Classes are made available |
| Jira | Assign Jira connection - currently not integrated |
| Ignore Error Messages | This should only be checked when the application is in production. When in development it should be off for easier debugging |
| Base Layout | The base layout for this navigation structure can be defined using the pencil. A New Page opens in Edit Mode. Editing can be completed with the X at the top right. With the X the base layout can be removed. The changes are only saved when you click on Save in the bottom left of the overview view or by confirming the prompt dialog when changing menus |
| Login | The login layout for this navigation structure can be defined using the pencil. A New Page opens in Edit Mode. Editing can be completed with the X at the top right. With the X the base layout can be removed. The changes are only saved when Save in the bottom left of the overview view is clicked or by confirming the prompt dialog when changing menus. As soon as a login has been made for an instance on a navigation structure, this login also counts for other navigation structures. Logins can be maintained for each navigation structure in order to trigger a correspondingly displayed login for these direct entry points. |
| FavIcon | The Icon which is shown in the browser tab when the page is opened |
| PWAIcon | Progressive Web App Icon which is used when installing from the browser (currently not implemented) |
