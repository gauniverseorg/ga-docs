---
sidebar_position: 15
---
# Hash

It is a static class that provides methods for computing different hash functions. Here's an overview of the class:

- Method GetBytes(string data, Encoding encoding): Converts the provided string data into a byte array using the specified encoding.
- Method ComputeMD5Hash(byte[] data): Computes the MD5 hash of the provided byte array data using the MD5 algorithm and returns the resulting hash as a byte array.
- Method ComputeSHA1Hash(byte[] data): Computes the SHA1 hash of the provided byte array data using the SHA1 algorithm and returns the resulting hash as a byte array.
- Method ComputeSHA256Hash(byte[] data): Computes the SHA256 hash of the provided byte array data using the SHA256 algorithm and returns the resulting hash as a byte array.
- Method ComputeHMACSHA256Hash(byte[] data, byte[] key): Computes the HMAC-SHA256 hash of the provided byte array data using the provided key as the secret key for the HMAC algorithm. It returns the resulting hash as a byte array.
- Private method ComputeHash(HashAlgorithm hash, byte[] data): Computes the hash of the provided byte array data using the specified hash algorithm and returns the resulting hash as a byte array. This method is used internally by the other hash computation methods.

The HashWrapper class provides a convenient way to compute different hash functions such as MD5, SHA1, SHA256, and HMAC-SHA256.
