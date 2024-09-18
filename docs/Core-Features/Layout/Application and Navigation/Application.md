---
sidebar_position: 1
---
# Application 

Applications are created by clicking on the **+ Create New** button on the Dashboard. Select **New Application/Workflow**, then select **Create Application.**

You will see an Application Creation pop up:
1. Write the name of your application.
2. Edit baselayout, (if you want to).
3. Click on the Save button. 
4. Drag and drop your favorite control elements and then click on the save button in the Appbuilder.

The available properties when updating an applications are: 

| Property | Description |
| --- | --- |
| UserRegistrationWorkflow | The workflow stored here is called when the registration URL is called (e.g., for user creation) No login is required for this, as anonymous access is permitted. |
| Landing page | The page, where the user arrives after login. Here the pages from the Layout – Pages can be selected (landing page can be changed) |
| Default Theme | The theme that applies to the navigation structure is defined here The themes are defined under "Corporate Identity – Themes" |
| Available Themes | The themes provided to users for this navigation structure. These are available via Theme – Control. The themes are defined under Corporate Identity – Themes |
| CSSFiles | CSS files that were created under Settings - Corporate Identity - CSS Classes are made available |
| Ignore Error Messages | This should only be checked when the application is in production. When in development it should be off for easier debugging |
| Base Layout | The base layout for this navigation structure can be defined using the pencil. A New Page opens in Edit Mode. Editing can be completed with the X at the top right. With the X the base layout can be removed. The changes are only saved when you click on Save in the bottom left of the overview view or by confirming the prompt dialog when changing menus |
| Login | The login layout for this navigation structure can be defined using the pencil. A new page opens in Edit Mode. Editing can be completed with the X at the top right. With the X the base layout can be removed. The changes are only saved when Save in the bottom left of the overview view is clicked or by confirming the prompt dialog when changing menus. As soon as a login has been made for an instance on a navigation structure, this login also counts for other navigation structures. Logins can be maintained for each navigation structure in order to trigger a correspondingly displayed login for these direct entry points |
| FavIcon | The Icon which is shown in the browser tab when the page is opened |
| PWAIcon | Progressive Web App Icon which is used when installing from the browser (currently not implemented) |
