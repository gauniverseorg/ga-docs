---
sidebar_position: 22
---
# Number

This class provides various utility methods and constants for working with numbers.Here is an overview of the class:

- The class defines several static properties representing constants related to numbers, such as EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NaN, NEGATIVE_INFINITY, and POSITIVE_INFINITY. These properties hold specific values based on the double data type

  - Note they are only in the source code for checking, the user can’t change them

- The class has several static methods:

  - isFinite checks if a given value is either positive or negative infinity
  - isInteger checks if a given value is an integer by attempting to parse it as an int. If the parsing is successful, it returns true; otherwise, it returns false
  - isNaN checks if a given value is double.NaN (Not-a-Number)
  - isSafeInteger checks if a given value is a safe integer by attempting to parse it as a long and comparing it against the MAX_SAFE_INTEGER and MIN_SAFE_INTEGER constants
  - parseFloat parses a string value as a double. If the parsing is successful, it returns the parsed value; otherwise, it returns NaN
  - parseInt parses a string value as a double using the provided base b. It first converts the string to a long using Convert.ToInt64, and then converts it to a double using Convert.ToDouble. If the parsing is successful, it returns the parsed value; otherwise, it returns NaN

The NumberWrapper class provides convenient methods and constants for performing common number-related operations, such as checking for infinity, checking for integer values, parsing numbers from strings, and working with special number values like NaN and infinity.
