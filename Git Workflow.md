# Git Workflow

## Welcome
Hello and welcome to our project's Github work flow page! Github makes it possible for multiple people to work on a single project
in an organized and safe way so no progress is lost. Any conflicts are handled in a safe manner. I'm sure you can imagine how
crazy things could get without version control, The key to a healthy Git-flow is communication, and I would like to stress this as
much as I can going forward. This includes using Slack to communicate when you are doing anything.
In the next section I will walk you through exactly what you need to do to make this github work flow as fluid as possible!

## Getting Started
In this section I will walk you through the steps necessary to make sure you are setup properly for work on our project.
We will be making forks of the original repository. Doing things this way adds an extra layer of protection on the master
repository, and helps ensure nobody deletes or accidentally pushes straight to the master.

### Step 1: Find our Project
Begin at our organization's github page:

```sh
  https://github.com/ScriptInvaders
```

### Step 2: Fork
Find the repository titled 'responsible', and fork the repository to your personal Github account.
```sh
 https://github.com/ScriptInvaders/responsible
```

### Step 3: Clone your version locally
Navigate to your forked version of our the main repository. This is the version you will want to clone onto your local computer.
Copy the Link associated with your forked version, and clone locally.

```sh
$ git clone https://github.com/<yourUsernameHere>/responsible.git
```

### Step 4: Add upstream remote
cd into the project folder locally through your terminal, and add an upstream remote.

```sh
$ git remote add upstream https://github.com/ScriptInvaders/responsible.git
```

After you create an upstream remote, make sure you double check that your remotes are setup properly

```sh
$ git remote -v
```

You should see two different remotes, origin (your personal fork) and upstream (Script Invaders original)

### Step 5: Create a branch

```sh
$ git checkout -b <branch or feature name>
```
Note: You always want to be working on a branch. Never be working on your master branch.


### Step 6: Staging your commits
Please. Save us all headaches. Do not type "git add ." into your terminal every time you want to add files. Instead:

```sh
$ git diff
```

Check out the changes made to certain files, and then add them individually:

```sh
$ git add <fileName>
```

Only add the files that you have made crucial changes to. Meaning that if you accidentally open the README file and add a space
accidentally somewhere, use the following command to reset unwanted changes:

```sh
$ git checkout <unwantedFile>
```

### Step 7: On your Commits
!ALWAYS BE COMMITING!
Keyword Starters at the beginning of any commit message:
close, closes, closed
fix, fixes, fixed
resolve, resolves, resolved
feat

It is good practice to put these words inside parenthesis. e.g. "(fix) changed all instances of foo into bar"
Some things to think about when making a commit:
#### 1) Why is it necessary? It may fix a bug, it may add a feature, it may improve performance, reliability, stability, or just be a
change for the sake of correctness.

#### 2) How does it address the issue? For short obvious patches this part can be omitted, but it should be a high level description of
what the approach was.

#### 3) What effects does the patch have? (In addition to the obvious ones, this may include benchmarks, side effects, etc.)

On your final commit, before submitting a pull request, check on waffle.io and find the issue that this pull request will complete.
If it you are working on issue #5, make your last commit message:

```sh
$ git commit -m "(feat) completed feature closes #5"
```

This will automatically close the issue on our konbon once the final pull request is merged. Pretty cool, huh?

### Step 8: Rebasing

```sh
$ git pull --rebase upstream master
```

For this project, we will use rebasing. Rebasing is a way to keep your commit history clean and organized. It is also important to
remember to commit and changes before pulling. When you rebase, it adds all the commits added to the main repo's master branch, and
add those commits to your branch. This will ensure that you are keeping up with all the other work that other contributors have
successfully merged into the master branch. PULL BEFORE YOU PUSH!! Also communicate to your team when something has been changes
have been made, and everyone pull when necessary.

### Step 9: Pushing to your forked repository
Once again, going to reiterate that you PULL before you PUSH. This is not only good practice, but will also save you a lot of
unnecessary headache.

```sh
$ git push origin <branchName>
```

Because you forked from your github page, your origin is going to be your repository.
Make sure you push to the proper branch name! (Do not push to master)

### Step 10: Submitting a Pull Request
Once you have pushed all of your changes for a feature to a branch on your personal repository, and you have a complete,
functioning addition to the project, it is time to submit a pull request! Navigate to your forked repository on github.com and
find the New Pull Request button. Make sure you are submitting the correct branch! It should look like this:

```sh
base fork: ScriptInvaders/responsible   base: master ... base fork: <yourUsername>/responsible   base: <branchName>
```

This is where communication is key:
Slack @username (whoever is SCRUM Master) and say you submitted a pull request.
As the SCRUM master, once merged, you respond to @username (whoever submitted pull request) "merged".

If there is anything that may be conflicting, it is often important to also tag whoever might want to review this code before
it is submitted. Sometimes people can be working in the same files, and it is important to keep a communication line open and know
where everyone else is working, this includes letting others know what files you are working in.


### SCRUM Master Workflow
As SCRUM Master, it is your duty to review all submitted pull requests and resolve merge conflicts. Sometimes this might require
another set of eyes, so don't feel bad if you aren't sure which code to keep when trying to resolve merge conflicts. Ask for help!

Consider the following:
-Even though the pull request can be automatically merged, doesn't mean you automatically should. Read the code. Love the code.
-Merge conflicts can get a bit tricky, and it is highly likely mistakes will be made somewhere along the line. Don't stress it.
-If a anyone decides to not follow the style guide, wants to merge unnecessary things, or somehow creates funkiness with their
 contribution, don't be afraid to close the pull request and send it back with a detailed comment on what needs to be changed,
 just be constructive and let them know in a comment on the pull request exactly what was wrong with their request.

### How to resolve Merge Conflicts
In this section I will go into detail on how to resolve any merge conflicts that happen

### Step 1: Clone the master repo
Clone the original Script Invaders repository onto your local machine

```sh
$ git clone https://github.com/ScriptInvaders/responsible.git
```

### Step 2: Create a new branch

```sh
-- $ git checkout -b merge-conflict
```

### Step 3: Pull in branch conflicts

```sh
$ git pull http://github.com/<username>/responsible.git <conflictBranchName>
```

From here, you should be seeing some errors about merge conflicts in your terminal. This is a good thing! you have to see the
conflicts before you can fix them!

Open the project in sublime. From here you are going to want to:

```sh
shift + command + f
```

search for >>>> or <<<<

The reason for this is because when you try to merge a branch that has conflicts, it presents you with this:

<<<<<<<
Changes made on the branch that is being merged into. In most cases,
this is the branch that I have currently checked out (i.e. HEAD).
The common ancestor version.
=======
Changes made on the branch that is being merged in. This is often a
feature/topic branch.
>>>>>>>

Once you decide what code to keep, make sure you delete the < and > and = signs and save.
Keep going down the find results until you resolve all merge conflicts.

### Step 3: Push
After you take care of merge conflicts, push the merged master back to the origin master. This can be the scary part.
Before you push back to the origin master of the original repository after fixing all conflicts, you may want to make sure
that your program is still working and still performing as expected. If there are tests, run the tests. Now is the time to
exercise caution, because it is often times very tough to go back from here. It isn't impossible, but it definitely creates
a headache.

Once pushed, this will close the pull request.


# Keys for Success
1. Communication is key for establishing a working github flow. Over communicate, through Slack, verbally, and any other means you
feel necessary.
2. Never push origin master. It is tempting, but just don't. Only exception is when you are resolving merge conflicts as a SCRUM
master, and even then, you want to exercise extreme caution.
3. Make sure you are always on a branch, not on master branch.
4. Even if you have permission, do not close your own pull requests. Have someone else look over your code.
5. As SCRUM Master, comment on others pull requests. This makes your github contributions go up, as well as shows that you are a
communicating part of a successful team! Also, respond to comments on your pull requests. Comment everywhere, even if it doesn't
seem necessary, just do it, but stay professional.










