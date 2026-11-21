---
title: 34. Find First and Last Position of Element in Sorted Array
subtitle: Binary search that keeps going after it finds the target
date: 2026-11-21
kind: leetcode
difficulty: Medium
problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
repo: https://github.com/Olavictor541/cpp_practice/blob/main/binary-search-variations/first_last_occurrence.cpp
tags: [binary search, arrays]
---

## The problem

In a sorted array where a value can appear several times, return the index of its first and last occurrence, or `[-1, -1]` if it isn't there. It has to run in O(log n), so scanning left and right from one match isn't allowed (that's O(n) if the whole array is the target).

## The idea

Normal binary search stops as soon as `arr[mid] == target`. Here, a match is only a *candidate*:

- To find the **first** occurrence, record `mid` and keep searching the **left** half (`high = mid - 1`), in case there's an earlier copy.
- To find the **last** occurrence, record `mid` and keep searching the **right** half (`low = mid + 1`).

That's the only difference between the two searches, so I wrote one function with a `flag` that picks the direction.

## My solution

```cpp
int find_index(float arr[], int size, int target, bool flag) {
    int low = 0, high = size - 1, index = -1;

    do {
        int mid = (high + low) / 2;

        if (arr[mid] == target) {
            index = mid;          // a candidate, keep looking
            if (flag) low = mid + 1;   // last occurrence: go right
            else      high = mid - 1;  // first occurrence: go left
        }
        else if (arr[mid] > target) high = mid - 1;
        else                        low = mid + 1;
    } while (low <= high);

    return index;
}

// first = find_index(arr, size, target, false);
// last  = find_index(arr, size, target, true);
```

With `[-3.2, -2, -1.6, 1, 5, 5, 5, 7, 9]` and target `5`, it prints `[4, 6]`.

## Complexity

- Time: O(log n), two binary searches
- Space: O(1)

## What I'd change now

Two small things I noticed re-reading it:

- **The target is an `int` while the array holds `float`s.** That works for `5`, but a target like `2.5` would be silently cut down to `2`. The parameter should be a `float`.
- **The `do...while` runs once even on an empty array**, which reads `arr[0]` when there's nothing there. A plain `while (low <= high)` loop checks first and avoids that.
