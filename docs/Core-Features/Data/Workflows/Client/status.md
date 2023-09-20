---
sidebar_position: 11
---

# Status

Works with the status keys and cache. Cache is stored using Redis

| Name              | Description                                                                       | Parameters                                                              | Result                      |
| ----------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------- |
| Set Status        | Sets the current parameter to the specified status key                            | Key: Key of the status to be written to the current parameter           |       N/A                      |
| Read Status       | Read the specified status key and set to the current parameter                    | Key: The status key that is read out                                    | Returns a current parameter |
| Write in Cache    | Current Parameter is written to the cache. The cache can be used across workflows | Key: Key name that will be used to access the value written to cache    |         N/A                    |
| Read from Cache   | Status key is read from cache and assigned to current parameter                   | Key: Key name that is read from cache and assigned to current parameter | Returns a current parameter |
| Delete from Cache | Removes the specified status key from cache                                       | Key: Key name that will be deleted from cache                           |        N/A                     |
