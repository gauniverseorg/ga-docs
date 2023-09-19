---
sidebar_position: 12
---
# Email

It provides methods for sending emails using different providers, managing attachments, and checking mail receive connections. Here's an overview of the class and its methods:

- Constructor EmailWrapper(string mailServer): Initializes an instance of the EmailWrapper class by loading the mail settings based on the provided mailServer value.
- SendMail(string to, string subject, string body): Sends a plain text email to the specified recipient (to) with the given subject and body.
- SendHTMLMail(string to, string subject, string body): Sends an HTML-formatted email to the specified recipient (to) with the given subject and body.
- AddAttachmentToMail(string filename, Stream attachment): Adds an attachment to the email. The attachment is specified by its filename and a Stream object.
- SendMailBasic(string to, string subject, string body, bool isHTML, Stream attachmentStream = null): Sends an email using basic SMTP settings. It creates an instance of System.Net.Mail.SmtpClient and configures it with the mail settings. The email is sent to the specified recipient (to) with the given subject, body, and HTML flag (isHTML). Optional attachment stream can also be provided.
- SendMailExchangeProvider(string to, string subject, string body, bool isHTML, Stream attachmentStream = null): Sends an email using the Exchange provider. It authenticates the client using the provided client ID, tenant ID, and client secret(In the settings area). The email is sent to the specified recipient (to) with the given subject, body, and HTML flag (isHTML). Optional attachment stream can also be provided.
- SendMailInternal(string to, string subject, string body, bool isHTML, Stream attachmentStream = null): Internal method used for sending emails. It determines the authentication type based on the mail settings and calls the appropriate send method.
- DoAuthentication(string clientid, string tenantid, string clientsec): Performs authentication for the Exchange provider. It uses Microsoft Identity Client to acquire a token for the client ID, tenant ID, and client secret.
- CheckMailReceiveConnectionPop3(string server, int port, bool ssl, string username, string password): Static method that checks the mail receive connection using the POP3 protocol. It connects to the specified server, port, and SSL flag, and authenticates using the provided username and password. It returns a CheckMailReceiveConnectionResult object indicating the result of the connection check.
- CheckMailReceiveConnectionImap(string server, int port, bool ssl, string username, string password): Static method that checks the mail receive connection using the IMAP protocol. It works similar to theCheckMailReceiveConnectionPop3 method but uses the IMAP protocol instead.
- CheckConnection(MailService client, string server, int port, bool ssl, string username, string password): Internal method used by the connection check methods (CheckMailReceiveConnectionPop3 and CheckMailReceiveConnectionImap). It connects to the server using the specified client (either Pop3Client or ImapClient), server, port, and SSL flag, and authenticates using the provided username and password. It returns a CheckMailReceiveConnectionResult object indicating the result of the connection check.
- CheckMailReceiveConnectionResult: A class representing the result of the mail receive connection check. It contains properties to indicate whether the authentication failed, connection failed, and an error message.
