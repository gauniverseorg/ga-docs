---
sidebar_position: 15
---

# Templates

WFBs from templates that are created under Settings - Data - Workflow - Client. Positioning directly on a line is not possible with templates. These can only be positioned on the line after selecting Copy or Reference. Copying copies the entire workflow into the current workflow, whereas, referencing inserts a WFB that represents the template workflow.

After inserting the workflow as a copy and then connecting it to the workflow blocks, it can see all the status keys. However, the workflow does not recognize changes to the status key, since the template only works with a copy. After execution, the template current parameter is written to the current parameter of the calling workflow. We recommend setting the current parameter to the status key of the calling workflow using WFB Set Status.
