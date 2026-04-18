# portfolioRebuild

My personal portfolio website, hosted on GitHub Pages.

---

## 🚀 Connecting your existing folder to this repository

If you already have your portfolio files on your computer, follow these steps to push them here and get your site live.

### 1. Install Git (if you haven't already)

Download and install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads).

### 2. Open a terminal in your portfolio folder

Navigate to the folder that contains your portfolio files:

```bash
cd /path/to/your/portfolio-folder
```

### 3. Initialize Git and connect to this repository

Run the following commands **one at a time** in your terminal:

```bash
# Initialize a local Git repository
git init

# Connect your local folder to this GitHub repository
git remote add origin https://github.com/Olavictor541/portfolioRebuild.git

# Stage all your files
git add .

# Create your first commit
git commit -m "Initial commit - add portfolio files"

# Push your files to GitHub (main branch)
git push -u origin main
```

> **Note:** If your default branch is called `master` instead of `main`, replace `main` with `master` in the last command.

---

## 🌐 Enabling GitHub Pages (hosting your site)

Once your files are pushed:

1. Go to your repository on GitHub:  
   [https://github.com/Olavictor541/portfolioRebuild](https://github.com/Olavictor541/portfolioRebuild)
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and the root folder `/`, then click **Save**.
4. GitHub will build your site. After a minute or two, your portfolio will be live at:  
   **https://olavictor541.github.io/portfolioRebuild/**

---

## 📁 Repository structure

```
portfolioRebuild/
├── index.html      ← Entry point for your portfolio (replace with yours)
├── .gitignore      ← Files/folders Git will ignore
└── README.md       ← This file
```

Make sure your portfolio has an `index.html` at the root level so GitHub Pages can find it.
