---
title: 977. Squares of a Sorted Array
subtitle: One merge step from merge sort does all the work
date: 2026-11-21
kind: leetcode
difficulty: Easy
problem: https://leetcode.com/problems/squares-of-a-sorted-array/
repo: https://github.com/Olavictor541/cpp_practice/blob/main/merge-sort-problems/sorted_squares.cpp
tags: [arrays, merge sort, two pointers]
---

## The problem

Given an array sorted in increasing order, which can include negative numbers, return the squares of each number, also sorted.

The catch is the negatives: `-3` is smaller than `2`, but `9` is bigger than `4`. Squaring everything and calling sort works, but that's O(n log n), and the input is already almost in order.

## The idea

I came at this right after implementing merge sort by hand, and noticed the array is really **two sorted runs**:

- the negatives, which get *bigger* when squared as you move left
- the non-negatives, which get bigger when squared as you move right

So:

1. Find where the negatives end.
2. Reverse the negative part, so its absolute values are in increasing order.
3. Square everything. Now both halves are sorted.
4. Run a single `merge` step, the same one merge sort uses, to combine them.

## My solution

The interesting part, with the printing left out:

```cpp
void squareSort(float arr[], int size) {
    float *temp = new float[size];

    // copy the negative prefix and find where it ends
    int neg_high = 0;
    while (neg_high < size && arr[neg_high] < 0) {
        temp[neg_high] = arr[neg_high];
        neg_high++;
    }
    int mid = neg_high - 1;

    // reverse the negatives so they increase in absolute value
    int left = 0, right = mid;
    while (left < right) {
        float tmp = temp[left];
        temp[left] = temp[right];
        temp[right] = tmp;
        left++;
        right--;
    }
    for (int i = 0; i < neg_high; i++) arr[i] = temp[i];

    // square: both halves are now sorted
    for (int i = 0; i < size; i++) arr[i] *= arr[i];

    // one merge of arr[0..mid] and arr[mid+1..size-1]
    merge(arr, 0, mid, size - 1);
    delete[] temp;
}
```

For `[-3.2, -2, -1.6, 1, 5, 5, 5, 7, 9]` it prints `[ 1 2.56 4 10.24 25 25 25 49 81 ]`. It also handles the edge cases without extra code: with no negatives `mid` is `-1` and the merge just copies the right half, and with all negatives the right half is empty.

## Complexity

- Time: O(n), one pass to find the split, one to reverse, one to square, one merge
- Space: O(n) for the temporary arrays

## What I'd change now

The common solution skips the reversing entirely: put one pointer at each end of the array. The larger absolute value is always at one of the two ends, so square it, write it into the **back** of a result array, and move that pointer inward. Same O(n), one loop, and no need to find the split first. I like that my version reuses merge sort, though; it's how I actually saw the structure of the problem.
