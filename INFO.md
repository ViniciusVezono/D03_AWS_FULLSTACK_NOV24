# Team Workflow in GitHub

## **Step-by-Step Guide**

### 1. **Clone the Repository**

If you don’t already have the repository on your machine:

```bash
git clone <repository-URL>
cd <repository-name>
```

### 2. **Create a New Branch**

Create a specific branch for your changes, based on the main branch (usually `main` or `master`):

```bash
git switch -c feat/new-styling-page-x
```

### 3. **Make Changes**

Implement the necessary changes in the code, such as adding or adjusting the styling for Page X.

### 4. **Stage and Commit the Changes**

After making changes, save them in Git and commit:

```bash
git add .
git commit -m "Add new styling for Page X"
```

### 5. **Sync with the Main Branch**

Before pushing your changes, sync your branch with the main branch to avoid future conflicts:

```bash
git switch main   # Switch to the main branch
git pull origin main  # Fetch the latest changes
git switch feat/new-styling-page-x  # Switch back to your branch
git merge main  # Merge the recent changes into your branch
```

### 6. **Push Changes to the Remote Repository**

Push your branch to the remote repository:

```bash
git push origin feat/new-styling-page-x
```

### 7. **Open a Pull Request**

On GitHub:

1. Access the repository.
2. Create a Pull Request (PR) from your branch `feat/new-styling-page-x` to the main branch (`main`).
3. Add a clear title and description explaining the changes made.

### 8. **Review the PR**

Wait for your team to review the PR. If there are requested changes, make them on the same branch:

```bash
git add .
git commit -m "Adjustments requested during review"
git push origin feat/new-styling-page-x
```

### 9. **Merge the PR**

Once approved, merge the PR into the main branch on GitHub.

### 10. **Update Your Local Repository**

After the changes are merged:

```bash
git switch main
git pull origin main
```

---

## **Best Practices**

- Use **descriptive branch names**, such as `feat/new-styling-page-x` or `hotfix/page-x-style`.
- Always sync your branch with the main branch before opening a PR.
- Ensure commit messages are clear to make it easier to understand the changes.

This workflow keeps the repository organized and facilitates team collaboration. 🚀

## **More Info About Commits Patterns**

- [📝 Commit pattern](https://www.conventionalcommits.org/en/v1.0.0/)
