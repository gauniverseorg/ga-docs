---
sidebar_position: 16
---
# Scheduler

Use to view when different events occurred, the data source must have 2 fields to indicate the start and end date of this specific event.

| **Property** | **Description** |
| --- | --- |
| DefaultView | Default display (dayGridMonth, dayGridWeek, timeGridWeek, timeGridDay, listWeek) |
| Title Member Path | At Data binding – Title |
| Start Member Path | At Data binding – Start time |
| End Member Path | At Data binding – End time |
| All Day Member Path | At Data binding – bool. When active the whole day is booked |
| IsDraggable | Move the appointment |
| IsResizable | The time span can be changed directly via the scheduler |
| Toolbar Left | Display possibilities of the left toolbar |
| Toolbar Center | Display possibilities of the center toolbar |
| Toolbar Right | Display possibilities of the right toolbar |

| Exclusive event | Description |
| --- | --- |
| Selection Changed | When an item is selected |
| Time Changed | When changing the scheduled event's time |

