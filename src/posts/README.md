# Writing a post

1. Copy `_template-leetcode.md` or `_template-project.md`.
2. Rename it. The file name becomes the address: `two-sum.md` → `/posts/two-sum`.
3. Fill in the details between the `---` lines:
   - `title`, `subtitle`, `date` (YYYY-MM-DD)
   - `kind`: `leetcode`, `project` or `note`
   - LeetCode only: `difficulty` (Easy / Medium / Hard) and `problem` (link)
   - Projects: `repo` (link to the code)
   - `tags`: e.g. `[arrays, two pointers]`
4. Write the post in Markdown below. Code blocks with a language (```python, ```cpp, ```java, ```js, ```ts, ```sql) get syntax colours.
5. Remove `draft: true`, commit and push. Newest posts appear first on the home page.
