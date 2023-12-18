---
sidebar_position: 2
---
# Algorithms

It contains two static methods that calculate string distance metrics: Damerau-Levenshtein distance and Levenshtein distance. Here's an overview of the class structure and the methods it provides:

- The class has two static methods:

~~~ typescript
GetDamerauLevenshteinDistance(string s, string t)()
LevenshteinDistance(string s, string t)
~~~

Here’s a breakdown of the methods:

- GetDamerauLevenshteinDistance(string s, string t): This method calculates the Damerau-Levenshtein distance between two strings, s and t. It iterates over the characters of the strings and applies the Damerau-Levenshtein algorithm to compute the minimum number of operations (insertions, deletions, substitutions, and transpositions) required to transform s into t. The final distance value is returned as an integer

- LevenshteinDistance(string s, string t): This method calculates the Levenshtein distance between two strings,s and t. It follows a similar approach to the previous method but uses the traditional Levenshtein algorithm. The Levenshtein distance represents the minimum number of single-character edits (insertions, deletions, and substitutions) required to transforms into t. The computed distance is returned as an integer

These distance metrics can be useful for applications involving spell-checking, fuzzy matching, or similarity comparison between strings.
