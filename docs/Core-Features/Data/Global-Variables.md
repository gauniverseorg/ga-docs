---
sidebar_position: 6
---

# Global Variables

Global variables are shared between different pages of a user’s session. They can be created through the settings backend, its type can be one of:

- Text
- Bool
- Integer
- Float
- Date
- Object
- List

You can read and update global variables through workflows using set/read global variables. Global variables in italic are imported from capsules. Global variables in bold are overridden imported Global variables.

Set offline value workflow block can be used as an alternative. This is also only for your own user and is only resolved when you log out. Writing to and reading from the Redis cache on the server side as an alternative if data should also be made available.
