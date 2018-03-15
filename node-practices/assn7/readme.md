# 007: INTRO TO EXPRESS (A POWERFUL NODE.JS MODULE)

`Scenario: You recently got hired as a full stack developer in a firm that wants to “disrupt” the blogging industry. And they need you to get up to speed fast because it’s up to you to build out their blogging infrastructure! You’re not really all that familiar with Node.js yet— having spent only about 10 hours reviewing it so far—but you are familiar with JavaScript, HTML, and CSS, so with some tinkering, Googling, and problem solving, you know you’ll be able to figure it out.`

The first thing that they want you to do is get your development environment all set up on your local machine. When you’re done with that, modify the app code so that it saves and displays an image as part of each blog post. Good luck. You’ve got this.

## 1\. Get your local git repository setup

NOTE: To do this, you can either follow the instructions below, or simply copy the assignment007 folder into your repo. Whatever is easiest for you.

### Step 1: Set up a link to the course’s GitHub repository

1. Log into your Github account: <https://github.com/>
2. Navigate to the course Github page: <https://github.com/mmart168/mmart-162-spring2018>
3. On the top, right-hand corner of the screen, click the "Fork" button. This should create a copy of the course homework in your Github account that is yours to edit
4. Now, open your Terminal (Mac) or GitBash (Windows), and navigate to the directory where you want to store your files using the cd command.
5. When you're in the directory you want to be in (verify by typing "pwd"), type the following command:
$ git clone [https://github.com/{your\_github\_username}/mmart-162-spring2018.git](https://github.com/%7Byour_github_username%7D/mmart-162-spring2018.git).

For example, because my github username is vanwars, I would type:
$ git clone <https://github.com/vanwars/mmart-162-spring2018.git>.
6. Navigate into the mmart-162-spring2018 directory
7. Verify that you have cloned the correct repository by typing:
$ git remote show origin.

The fetch and push url listed should point to your copy of the course repository.
8. In addition, set the upstream repository (the course version of the code):
$ git remote add upstream <https://github.com/mmart168/mmart-162-spring2018.git>
9. Verify that you are pointing to the correct upstream repository by typing:
$ git remote show upstream.

The fetch and push url listed should point to the mmart168 version of the repository.

### Step 2: Create a new branch called assignment007

You are now going to make your first branch. To do so:

1. While inside of the mmart-162-spring2018 folder, type:
$ git branch
You should only see one branch, master, listed with an asterisk next to it.
2. Then type:
$ git branch assignment007
3. Then type $ git branch  again. You should see 2 branches. One called master and one called assignment007\. There should be an asterisk next to master, indicating that master is your current branch.
4. Switch into your assignment007 branch by typing: $ git checkout assignment007. To verify that it worked, type: $ git branch, and there should now be an asterisk next to assignment007.

## 2\. Get your local programming environment setup

### A. Configuring your Node.js Server

1. Navigate into the assignment007 directory.
2. From the command line, navigate to the server directory.
3. Install all of the npm modules that are inside package.json from the command line. Do you remember how to do this? If not, ask a classmate or look it up!
4. When you’re done, run your server as follows: node app.js
5. Verify that it works by navigating to <http://localhost:3000/posts/>.
6. Keep your server running
7. Take a look at all of the files in the server directory and spend some time looking at them.

### B. Open your Client-Side App in the Web Browser

1. Open your Finder or Windows explorer and open the client folder.
2. Take a look at all of the files in the client directory and spend some time looking at them.
3. When you’re done, open the index.html in Chrome
4. Click the “Add New Post” button and add a new post. What happened?
5. Take a look at your command line output. What do you see?
6. Add a few more blog posts. What do you see?
7. Now, restart your node server, and then refresh your index.html page. What happened?

## 3\. Modify the Server-Side Code

1. How would you need to change the store object so that it also stores an imageURL?
2. Do it by including a link to an image of your choice (from Google Images).
3. Restart your node server, and navigate to <http://localhost:3000/posts/>. Did it work?
4. Now add a second blog entry, manually, by adding another object to the posts array.
5. Restart your node server, and navigate to <http://localhost:3000/posts/>. Did it work?

## 4\. Modify the client-side code

1. Modify your client/js/getPosts.js code so that the new imageURL gets displayed to the screen as an actual image.
2. Modify the client/index.html form so that you add a new form input for the imageURL form.
3. Modify the client/js/createPost.js code so that the imageURL also gets saved to the server

## 4.a. Extra credit: Style your blog

Use CSS to be creative! Make a nice theme.

## 4.b. Extra credit: Figure out how to delete an existing blog entry

1. Create a delete button next to each blog post.
2. When the user clicks the delete button, the button should call a function that uses fetch (method=“DELETE”) to delete an existing blog entry. Note, when you’re deleting, the URL changes from <http://localhost:3000/posts/> to [http://localhost:3000/posts/{index-of-post](http://localhost:3000/posts/%7Bindex-of-post)}, for example: <http://localhost:3000/posts/0> will delete the first post, <http://localhost:3000/posts/1> will remove the second post.

## 5\. Comment all of your code inline

Please add inline comments to explain what the code is doing for the following files:

|-- client

| |-- index.html

| `-- js

| |-- createPost.js

| |-- getPosts.js

| `-- modal.js

`-- server

 |-- app.js

 `-- routes

 |-- index.js

 `-- posts.js

## 6\. What to turn in

A link to your GitHub code where:

1. All of the above files are commented.
2. Tasks 3-4 are complete so that your blog code now saves an image

Due: 3/14/2018 at Midnight
