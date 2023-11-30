---
sidebar_position: 3
---
# User Roles

In the overview you can add and delete roles, and edit basic information about user roles, mainly whether they are used by admins or everyone in the overview, the individual roles are defined. Roles in italic are imported from capsules. Roles in bold are overridden imported roles. The Roles Initial Admin and User are provided by GA Universe. The properties here are:

| Property | Description |
| --- | --- |
| Name | Unique name, under which the Role is saved |
| Administrator | Is an administrator role and all functions are available |
| Everyone | This security role applies to Everyone without restriction to the user|

In a specific role page, you can edit three options:

## Permission

A bold marking shows that authorizations have been set for individual points. Here you can give access to role to use specific features of GA and they are

### User

| Property | Description |
| --- | --- |
| DeveloperRight – UseAppBuilder | Appbuilder usage (F2) |
| DeveloperRight – UseDebugger | F12 – open internal Debugger |
| LoginRight – BasicAuth | Login via other services via our REST interface for technical user access from external systems |
| LoginRight – CanLogin | Login possible |
| UserAdminRight – DeleteRole | User Management – Delete roles |
| UserAdminRight – DeleteUser | User Management – Delete user |
| UserAdminRight – Impersonate | For development – changing in-between roles |
| UserAdminRight – SaveRole | User Management – Save roles |
| UserAdminRight – SaveUser | User Management – Save user |
| AccessRight – Agent | Access to external agent |
| AccessRight – Application | Access Navigation – Overview |
| AccessRight – Class | Access to ContainerClassObject, no effect on UI display |
| AccessRight – Container | Access to Container, no effect on UI display |
| AccessRight – DynamicData | Access to interface for data retrieval (data binding in controls), no effect on UI display |
| AccessRight – Enum | Access to Enums, no effect on UI display |
| AccessRight – Formula | Access to Formula Editor, no effect on UI display |
| AccessRight – General | Access to Settings – Data – Datasources, Settings – E-Mail, no effect on UI display |
| AccessRight – InternalUser | Access to User management – User, no effect on UI display |
| AccessRight – Media | Access to Media sources, no effect on UI display |
| AccessRight – Output | Access to Output-Templates, no effect on UI display |
| AccessRight – Roles | Access to User Roles, no effect on UI display |
| AccessRight – Translation | Access to Translations, no effect on UI display |
| AccessRight – Variable | Access to global variables no effect on UI display |
| AccessRight – Workflow | Access to Workflow, no effect on UI display |
| AdminRight – General | Settings that are not covered by other points, e.g., e-mail settings |
| AdminRight – InternalUser | Access to Identity User for the Systems |
| AdminRight – Tracer | Access to REST on log file outputs |
| AdminRight – Translation | Access Settings – Translations |
| AgentRight – Register | DBAgent User can register |
| AgentRight – SendResult | DBAgent User can send data |
| GlobalVariableRight – Delete | Settings - Data – delete Global Variables |
| GlobalVariableRight – Save | Settings - Data – save Global Variables |
| DesignerRight – Class | Settings- Data - Data model - Data structure - Edit data objects |
| DesignerRight – Enum | Settings- Data - Data model - Data structure - Edit enums |
| DesignerRight – Layouts | AppBuilder - Toolbox - Layouts usage |
| DesignerRight – LayoutTemplates | AppBuilder - Toolbox - Templates usage |
| DesignerRight – Media | AppBuilder - Mediasources usage |
| DesignerRight – SideNav | Settings - Layout - Naviation edit |
| DesignerRight – Style | AppBuilder - Decorations usage |
| WorkflowRight – Delete | Delete Workflow |
| WorkflowRight – Execute | Execute Workflow |
| WorkflowRight – Save | Save Workflow |
| WorkflowRight – Template | Save Workflow as template |
| ContainerDataRight – Delete | Data - Data Model - Data Structure - Data Objects Delete |
| ContainerDataRight – Read | Data - Datamodel - Datastructure - read Dataobjects |
| ContainerDataRight – Write | Data - Datamodel - Datastructure - edit Dataobjects |

### Settings

| MultidimensionalContainerRight - ContainerCube | Access and visibility of Data – Data Model – Multidimensional – ContainerCube |
| --- | --- |
| MultidimensionalContainerRight - ContainerDimension | Access and visibility of Data – Data Model – Multidimensional – ContainerDimension |
| MultidimensionalContainerRight - Multidimensional | Access and visibility of Data – Data Model – Multidimensional |
| ObjectContainerRight – ContainerJson | Access and visibility of Data – Data Model – Object –ContainerJson |
| ObjectContainerRight – ContainerObjectView | Access and visibility of Data – Data Model – Object – ContainerObjectView |
| ObjectContainerRight – ContainerRest | Access and visibility of Data – Data Model – Object – ContainerRest |
| ObjectContainerRight – ContainerXML | Access and visibility of Data – Data Model – Object – ContainerXML |
| ObjectContainerRight – Object | Access and visibility of Data – Data Model – Object |
| RelationalContainerRight – ContainerCSV | Access and visibility of Data – Data Model – Relational – ContainerCSV |
| RelationalContainerRight – ContainerDateTime | Access and visibility of Data – Data Model – Relational – ContainerDateTime |
| RelationalContainerRight – ContainerEnumTables | Access and visibility of Data – Data Model – Relational – ContainerEnumTables |
| RelationalContainerRight – ContainerExcel | Access and visibility of Data – Data Model – Relational – ContainerExcel |
| RelationalContainerRight – ContainerTable | Access and visibility of Data – Data Model – Relational – ContainerTable |
| RelationalContainerRight – ContainerView | Access and visibility of Data – Data Model – Relational – ContainerViews |
| RelationalContainerRight – ContainerWebFeed | Access and visibility of Data – Data Model – Relational – ContainerWebFeed |
| RelationalContainerRight – ContainerRelational | Access and visibility of Data – Data Model – Relational |
| WorkflowWizardRight – Wizard | Access and visibility of Workflow – Wizard |
| LayoutRight – Context | Access and visibility of Layout context |
| LayoutRight – Events | Access and visibility of Layout – Events |
| LayoutRight – Layout | Access and visibility of Layout |
| LayoutRight – Navigation | Access and visibility of Layout – Navigation |
| LayoutRight – Pages | Access and visibility of Layout – Page |
| LayoutRight – Template | Access and visibility of Layout – Templates |
| DataRight – Data | Access and visibility of Data |
| DataRight – DataEnum | Access and visibility of Data – Data Model – Datastructures – Enum |
| DataRight – DataModel | Access and visibility of Data – Data Model |
| DataRight – DataObject | Access and visibility of Data – Data Model – Dataobjects |
| DataRight – DataSource | Access and visibility of Data – Data Model – Datasources |
| DataRight – DataStructure | Access and visibility of Data – Data Model – Datastructures |
| DataRight – GlobalVariables | Access and visibility of GlobalVariable |
| DataRight – Jira | Access and visibility of Jira |
| DataRight – MediaSource | Access and visibility of Mediasources |
| DataRight – Output | Access and visibility of Output Templates |
| DataRight – Scheduler | Access and visibility of Scheduler |
| DataRight – Script | Access and visibility of ScriptLibrary |
| DataRight – Workflow | Access and visibility of Workflow |
| DataRight – Workflow\_Client | Access and visibility of Workflow – Client |
| DataRight – Workflow\_Service | Access and visibility of Workflow – Service |
| UsermanagementRight – Groups | Access and visibility of User Management – Groups |
| UsermanagementRight – Provider | Access and visibility of User Management – Provider |
| UsermanagementRight – Roles | Access and visibility of User Management – Roles |
| UsermanagementRight – Usermanagement | Access and visibility of User Management |
| Corporate Identity – Chart Palette | Access and visibility of Corporate Identity – Chart Palette |
| Corporate Identity – Control Styles | Access and visibility of Corporate Identity – Control Styles |
| Corporate Identity – CSS Variables | Access and visibility of Corporate Identity – CSS Variables |
| Corporate Identity – Fonts | Access and visibility of Corporate Identity – Fonts |
| Corporate Identity – Icons | Access and visibility of Corporate Identity – Icons |
| Corporate Identity – Metatags | Access and visibility of Corporate Identity – Meta Tags |
| Corporate Identity – Themes | Access and visibility of Corporate Identity – Themes |
| PageSettingRight – Email | Access and visibility of Settings – Email |
| PageSettingRight – General | Access and visibility of Settings – General |
| PageSettingRight – Language | Access and visibility of Settings – Languages |
| PageSettingRight – Passthrough | Access and visibility of Settings – System Pass Through |
| PageSettingRight – Settings | Not available anymore |
| PageSettingRight – Translations | Access and visibility of Settings – Translations |

## Layout

Appropriate authorizations can be set for all controls on the individual pages of the selected navigation structure. If no selection is made, all controls can be used for the role, as defined by default on the relevant page. The properties here are:

| Property | Description |
| --- | --- |
| Hide Navigation Structure | Hide the complete navigation structure |
| Hide Navigation node | Hide this navigation node |
| Invisible | Set control as invisible |
| Disabled | Disable control |

## Container

Authorizations for the various containers of the instance can be assigned here. The available properties are:

| Property | Description |
| --- | --- |
| Structure Access | Access the structure of the object, read out and change columns |
| Access Authorization | Access to the Container using Read, Write, Delete |
| Access Authorization – All | Full access to the data for the desired action to grant access rights to users who do not generally have the right to read data |
| Access Authorization – Grouping | Filters from multiple roles are aggregated and applied. Filters of all roles in a group are combined with OR, different groups are then combined with AND |
| Access Authorization - … | Filter for the respective permission |
| Column Authorizations | Access to individual Columns using Read, Write, Delete includes Read + Write |
| Garbage can | Delete the respective row |
