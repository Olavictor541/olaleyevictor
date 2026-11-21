---
title: 21. Merge Two Sorted Lists
subtitle: Re-linking the nodes I already have instead of copying them
date: 2026-11-21
kind: leetcode
difficulty: Easy
problem: https://leetcode.com/problems/merge-two-sorted-lists/
repo: https://github.com/Olavictor541/cpp_practice/blob/main/linked-list-problems/merge_sorted_lists.cpp
tags: [linked list, two pointers]
---

## The problem

You get the heads of two linked lists, each already sorted. Return one sorted list made from all the nodes of both.

I wrote this in C++ with my own `Item` struct and raw pointers, no STL, as part of a set of linked list exercises.

## The idea

Both lists are sorted, so the smallest remaining value is always at the front of one of them. Compare the two fronts, take the smaller node, step that list forward, repeat. When one list runs out, the rest of the other list is already in order, so attach it as-is.

The part I liked: I never allocate a new node. I keep a `head` (to return) and a `tail` (the last node in the merged list) and just change `next` pointers on the nodes that already exist.

## My solution

```cpp
Item* merge(Item *&front1, Item *&front2) {
    if (front1 == NULL) return front2;
    if (front2 == NULL) return front1;

    // pick whichever list has the smaller first value as the head
    Item* head = NULL;
    if (front1->value < front2->value) {
        head = front1;
        front1 = front1->next;
    } else {
        head = front2;
        front2 = front2->next;
    }

    // tail is always the last node of the merged list
    Item* tail = head;
    while (front1 != NULL && front2 != NULL) {
        if (front1->value < front2->value) {
            tail->next = front1;
            front1 = front1->next;
        } else {
            tail->next = front2;
            front2 = front2->next;
        }
        tail = tail->next;
    }

    // one list is empty: attach whatever is left of the other
    if (front1 != NULL) tail->next = front1;
    if (front2 != NULL) tail->next = front2;

    return head;
}
```

With `[1, 4, 9]` and `[2, 3, 10]` it prints `[ 1 2 3 4 9 10 ]`.

## Complexity

- Time: O(n + m), every node is visited once
- Space: O(1) extra, nodes are re-linked rather than copied

## What I'd change now

Choosing the head is a special case that repeats the loop's logic. A **dummy node** in front of the result removes it: start with `tail` pointing at the dummy, run the same loop, and return `dummy.next`. Same complexity, less code, fewer places for a bug to hide.
