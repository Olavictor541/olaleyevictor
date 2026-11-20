---
title: 1. Two Sum
subtitle: One sentence on the trick that solves it
date: 2026-01-01
kind: leetcode
difficulty: Easy
problem: https://leetcode.com/problems/two-sum/
tags: [arrays, hash map]
draft: true
---

Files starting with "_" are templates and never appear on the site.
Copy this file, rename it (e.g. two-sum.md), fill it in and delete "draft: true".

## The problem

Describe the problem in a sentence or two, in your own words.

## My first attempt

What you tried first and why it was too slow or wrong.

## The idea that worked

Explain the approach.

## Complexity

- Time: O(n)
- Space: O(n)

## Solution

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, n in enumerate(nums):
            if target - n in seen:
                return [seen[target - n], i]
            seen[n] = i
        return []
```

## What I learned

One or two takeaways.
