---
sidebar_position: 30
---
# Security

This class serves as a wrapper for performing security-related operations. The class provides several static methods for working with security-related functionality:

- getRole: Retrieves a role based on the specified ID if the current user has the necessary access rights.
- getEveryoneRoles: Retrieves a list of roles that belong to everyone if the current user has the necessary access rights.
- saveRole: Saves a role along with its associated security settings if the current user has the necessary access rights.
- deleteRole: Deletes a role based on the specified ID if the current user has the necessary access rights.
- deleteCompleteRole: Deletes a role and all its associated data and security settings.
- getContainerSecurities: Retrieves a list of container securities for a specific role if the current user has the necessary access rights.
- saveContainerSecurity: Saves a container security if the current user has the necessary access rights.
- deleteContainerSecurity: Deletes a container security based on the specified ID if the current user has the necessary access rights.
- getLayoutPermission: Retrieves the layout permission based on the specified ID or key if the current user has the necessary access rights.
- saveLayoutPermission: Saves the layout permission if the current user has the necessary access rights.
- deleteLayoutPermission: Deletes the layout permission based on the specified ID if the current user has the necessary access rights.
- getNavigationPermission: Retrieves the navigation permission based on the specified ID or key if the current user has the necessary access rights.
- saveNavigationPermission: Saves the navigation permission if the current user has the necessary access rights.
- deleteNavigationPermission: Deletes the navigation permission based on the specified ID if the current user has the necessary access rights.

The methods in the class perform various security checks using the User.CurrentUser.HasRight method and interact with the underlying security and database layers to perform the requested operations.
