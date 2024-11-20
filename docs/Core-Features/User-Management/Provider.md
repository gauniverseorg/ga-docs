---
sidebar_position: 5
---
# Provider

Definition of the providers available for the users, providers are used when the user wants to login to the General Admin Instance. There are multiple ways for the user to register, you can use the local registration system or you can use social media registration. The available properties for local accounts:

| Property | Description |
| --- | --- |
| Password Options – Required Length | Required length of the password |
| Password Options - RequiredUniqueChars | Required non-alphabetic characters |
| Password Options – Required Nonalphabetic | Required non-alphabetic characters |
| Password Options – RequireLowercase | Required lowercase letters |
| Password Options – RequireUppercase | Required uppercase letters |
| Password Options – RequireDigit | Required digits |
| LockoutOptions – AllowedForNewUsers | For new users, blocking is permitted if the password is entered incorrectly |
| LockoutOptions – MaxFailedAccessAttempts | Maximal wrong attempts |
| LockoutOptions - DefaultLockoutTimeSpan l | Lockout time span |
| UserOptions – AllowedUserNameCharacters | Usable characters |
| UserOptions – RequireUniqueEmail | Required unique E-Mail |
| SignInOptions – RequireConfirmedEmail | Required confirmed E-Mail |
| SignInOptions – RequireConfirmedPhoneNumber | Required confirmed phone number |
| SignInOptions – RequireConfirmedAccount | Required confirmed account |
| MultiFactorAuthentication – MFA | Required QR code scan and authentication to login |
