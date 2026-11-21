---
title: 61. Rotate List
subtitle: My first version works, but it's O(n·k). Here's why, and the fix
date: 2026-11-21
kind: leetcode
difficulty: Medium
problem: https://leetcode.com/problems/rotate-list/
repo: https://github.com/Olavictor541/cpp_practice/blob/main/linked-list-problems/rotate_right.cpp
tags: [linked list]
---

## The problem

Rotate a linked list to the right by `k` places. `1 → 2 → 3 → 4 → 5` rotated by 2 becomes `4 → 5 → 1 → 2 → 3`.

## My first approach

Rotating by one place means: take the last node and put it at the front. So rotating by `k` is just doing that `k` times.

```cpp
Item* rotateRight(Item *&front, int k) {
    for (int i = 0; i < k; i++) {
        Item* current = front;
        Item* prev = NULL;
        // walk to the last node, remembering the one before it
        while (current->next != NULL) {
            prev = current;
            current = current->next;
        }
        current->next = front;  // last node points at the old head
        front = current;        // and becomes the new head
        prev->next = NULL;      // the node before it is the new tail
    }
    return front;
}
```

It gives the right answer (`[ 4 5 1 2 3 ]` for the example), and it's easy to follow. But it has two problems I didn't think about at the time.

## Problem 1: it's O(n·k)

Every rotation walks the whole list to find the tail. If `k` is a billion, that's a billion walks, even though rotating a 5-node list 5 times just gives you the same list back.

## Problem 2: it crashes on tiny lists

With a single node, the `while` loop never runs, so `prev` is still `NULL` and `prev->next` crashes. An empty list crashes even earlier, on `current->next`.

## The better way

The rotated list is the same nodes with one cut and one join:

1. Walk the list once to get its **length** `n` and its **tail**.
2. Reduce `k` with `k % n`. Anything beyond `n` is full loops.
3. Join the tail to the head, making a circle.
4. The new tail is `n - k - 1` steps from the old head. Cut after it; the next node is the new head.

```cpp
Item* rotateRight(Item* head, int k) {
    if (head == NULL || head->next == NULL) return head;

    int n = 1;
    Item* tail = head;
    while (tail->next != NULL) { tail = tail->next; n++; }

    k %= n;
    if (k == 0) return head;

    tail->next = head;                 // close the circle
    Item* newTail = head;
    for (int i = 0; i < n - k - 1; i++) newTail = newTail->next;

    Item* newHead = newTail->next;
    newTail->next = NULL;              // cut it open again
    return newHead;
}
```

## Complexity

| | Time | Space |
|---|---|---|
| First version | O(n·k) | O(1) |
| Better version | O(n) | O(1) |

## What I learned

Simulating the operation step by step is a good way to get a correct first answer, but it's worth asking "what does the final result look like?" Here it's one cut and one join, and once I saw that the loop disappeared.
