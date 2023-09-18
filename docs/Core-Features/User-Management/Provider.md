---
sidebar_position: 5
---
# Provider

Definition of the providers available for the users, providers are used when the user wants to login to the GA Instance. There are multiple ways for the user to register, you can use the local registration system or you can use social media registration. The available properties for local accounts:

| Property | Description |
| --- | --- |
| Password Options – Required Length | required length of the password |
| Password Options - RequiredUniqueChars | required non-alphabetic characters |
| Password Options – Required Nonalphabetic | required non-alphabetic characters |
| Password Options – RequireLowercase | required lowercase letters |
| Password Options – RequireUppercase | required uppercase letters |
| Password Options – RequireDigit | required digits |
| LockoutOptions – AllowedForNewUsers | for new users, blocking is permitted if the password is entered incorrectly |
| LockoutOptions – MaxFailedAccessAttempts | Maximal wrong attempts |
| LockoutOptions - DefaultLockoutTimeSpan l | lockout time span |
| UserOptions – AlowedUserNameCharacters | usable characters |
| UserOptions – RequireUniqueEmail | required unique E-Mail |
| SignInOptions – RequireConfirmedEmail | required confirmed E-Mail |
| SignInOptions – RequireConfirmedPhoneNumber | required confirmed phone number |
| SignInOptions – RequireConfirmedAccount | required confirmed account |
| MultiFactorAuthentication – MFA | required QR code scan and authentication to login |
