---
sidebar_position: 10
---

# Agent

An agent is used when the corresponding data source cannot be reached from outside (from the cloud). Many customers have their database servers on their own network. These are not accessible to us from the instance.

In order to access this data, an agent must be installed in the customer's network (there is an installation program for this). The agent is then available for selection from the data sources in the instance. The communication between the app framework instance in the cloud and the customer database then takes place via the agent. The agent package is only available for windows systems.

After installing the package it can be turned on using windows services, to change the connection of the agent, a config.json can be downloaded from the platform and set into the installation directory of the agent, it should be renamed to config.json for it to work correctly. You can enable logging to see all requests to and from the agent.
