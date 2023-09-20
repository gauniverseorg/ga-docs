---
sidebar_position: 1
---

# Overview

Used to schedule jobs to run when specified. You can find the defined jobs under About – Jobs. Jobs’ last execution is documented under About – Jobs – Logs. You can find an overview of all ongoing workflows under About – Logs – Workflow

| Property                                       | Description                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Name                                           | Name that is displayed for the maintained language                                                 |
| Start Date                                     | Starting point for the job                                                                         |
| End Date                                       | Ending point for the job                                                                           |
| Repetitions                                    | How many times the job repeats                                                                     |
| Timeout                                        | How long should the executed action continue                                                       |
| Execute one after the other without picking up | Execution of all jobs serially. All jobs running during execution are discarded                    |
| Execute one after the other with picking up    | Execution of all jobs serially. All jobs running during execution are retained and then processed. |
| Execute parallel                               | Execution in parallel with other jobs                                                              |
| Language                                       | In which language should the job be executed.                                                      |
| Trigger Type                                   | Type of the trigger (Time, Mail, FTP, CCO)                                                         |
| Worker                                         | The worker fired by the trigger                                                                    |
