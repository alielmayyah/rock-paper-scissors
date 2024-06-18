@echo off
setlocal enabledelayedexpansion

:: Pull latest changes from master
git pull origin main

git add .


:: Check if commit_number.txt exists, if not, create it and initialize with 0
if not exist commit_number.txt echo 0 > commit_number.txt

:: Read commit number from file
set /p commitNumber=<commit_number.txt

:: Increment commit number
set /a commitNumber+=1

:: Save the new commit number back to the file
echo !commitNumber! > commit_number.txt

git add commit_number.txt

git add gitbashfile.bat



:: Commit changes with incremented commit number
git commit -m "commit number !commitNumber!"




:: Push changes to master
git push origin main

:: End of script
endlocal
