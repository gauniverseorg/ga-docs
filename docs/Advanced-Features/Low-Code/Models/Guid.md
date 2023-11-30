---
sidebar_position: 12
---
# Guid

The Guid struct is the built-in type from the System  namespace that represents a globally unique identifier.
Guid consists of a 128-bit integer value that aims to always be unique in a given system. In fact, the number of possible unique combinations is 2<sup>128</sup> or 3.4x10<sup>38</sup> or 340,282,366,920,938,000,000,000,000,000,000,000,000. So it's extremely unlikely that you'll ever generate the same Guid value.

Example: string guidString = "f06c3c8d-b2c2-4cc6-9a1a-8b3b3c82b9f0"

To generate a new guid in script use Guid.NewGuid().
