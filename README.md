# LifeApp

Good Mongo Reference: http://docs.mongodb.org/v3.0/reference/sql-comparison/ <br />
Good Angular Reference: http://www.cheatography.com/proloser/cheat-sheets/angularjs/
Nodemon Site: http://nodemon.io
Good tutorial reference: http://scotch.io

---
<h3> To get started: </h3>
<p> 1. Download the Git Shell.<br />
    2. In the Git Shell command line, go to the directory where you want the repository to be<br />
    3. Do this:</p>
    git clone ---repo url---
<p> 4. After entering credentials, change the directory to the repository:</p>
    cd demo-depot-web
<p> 5. Open solution from Visual Studio. All Git Tools should automagically appear in VS2015. </p>
<h3> To create a new branch: </h3>
    git checkout -b [name your branch]
<h3> To change branches: </h3>
    git checkout [the branch you want]
<h3> To get changes: </h3>
    git pull origin [name of the branch you want changes from, likely master]    
<h3> To make changes: </h3>
    git add --all //only use if you deleted something
    git commit -a -m "Enter a description of what you changed" //ignore '-a' if you did the first line
    git push origin [name of your branch]
<h3> To merge branches: </h3>
<p> 1. Go to the branch here on the Github site and create a pull-request<br />
    2. Allow the team to decide when and if to merge what you've done</p>
<h3> To delete a branch your machine: </h3>
    git branch -d [name of branch to delete]
<h3> To delete a branch here on Github: </h3>
    git push origin --delete [name of branch to delete]
    git fetch --all --prune //only use if other people might have the same branch on thier machines, which shouldn't happen
<h3> To rollback a commit: </h3>
    git reset --hard [commit ID from last GOOD commit (it's the ugly alpha-numeric ID]
    git push -f origin [branch you're rolling back]
<h3> To remove files from the repository, but not from your local file system: </h3>
    git rm --cached foo.txt
    git rm --cached -r folderName
<h3> To save changes without commiting: </h3>
    git stash
<h3> To load saved changes: </h3>
    git stash list //to view a list of stashes
    git stash apply stash@{[index of stash you want]} --index pop
    //remove stash@index to use most recent
    //remove --index if you're on the same branch with a clean directory (clean = no changes uncommitted)
    //remove pop if you want to keep stash after applying it
<h3> To delete a stash: </h3>
    git stash drop stash@{[index of stash to delete]} //'git stash list' to get index
<h3> To untrack files without deleting them locally: </h3>
    Read this: http://www.arlocarreon.com/blog/git/untrack-files-in-git-repos-without-deleting-them/
<h3> To overwrite your local with master: </h3>
    git fetch --all
    git reset --hard origin/master
    
    // OR If you are on some other branch
    git reset --hard origin/your_branch
<h3> To clean up and delete local branches not on remote:</h3>
    git fetch -p
    // p = prune
