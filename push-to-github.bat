@echo off
echo ========================================
echo   Portfolio Repository Setup Script
echo ========================================
echo.

echo Please enter your GitHub username:
set /p GITHUB_USERNAME=

echo.
echo Please enter your repository name (e.g., varun-kotwani-portfolio):
set /p REPO_NAME=

echo.
echo Setting up remote repository...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo Renaming branch to main...
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Set up GitHub Secrets (see GITHUB_SECRETS_SETUP.md)
echo 3. Complete VM setup (see CREATE_REPOSITORY_GUIDE.md)
echo.
pause 