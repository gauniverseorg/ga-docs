---
sidebar_position: 32
---
# MediaSource

A class which represents a media source entity. Here's an overview of the properties and their purpose:

- KeepSettings: A Boolean indicating whether to keep the settings for the media source.
- ExportData: A Boolean indicating whether to export data for the media source.
- URL: The URL of the media source.
- Port: The port number of the media source.
- UserName: The username for accessing the media source.
- Password: The password for accessing the media source.
- BucketName: The name of the bucket associated with the media source.
- Private: A Boolean indicating whether the media source is private.
- SystemUsage: A Boolean indicating whether the media source is used for system purposes.
- NonEditable: A Boolean indicating whether the media source is non-editable.
- ClientType: The client type associated with the media source, represented by a GUID.
- ClientId: The client ID associated with the media source.
- ClientSecret: The client secret associated with the media source.
- RedirectUrl: The redirect URL for the media source.
- AccessToken: The access token for accessing the media source.
- RefreshToken: The refresh token for refreshing the access token.
- ExpiresAt: The expiration date and time of the access token.
- UserId: The user ID associated with the media source.
- Scopes: The scopes for accessing the media source.
- TenantId: The tenant ID associated with the media source.
- SASCredentials: The SAS (Shared Access Signature) credentials for the media source.
- Region: The region of the media source.

Additionally, the class has the following properties and methods:

- _Name: A private backing field for the Name property.
- Name: The name of the media source. It triggers the OldName property to store the previous name when set.
- Caption: A TranslatedString representing the caption of the media source.
- OldName: The previous name of the media source.
- TranslatedCaption: A computed property that returns the translated caption of the media source. If the caption is empty, it returns the name.
- MediaSource(): Constructor for the MediaSource class that initializes the Caption property.
- GetClient(): A method that returns an instance of the appropriate IMediaClient based on the ClientType property.
