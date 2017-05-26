# 69

Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Gist
 @oagboghi2
 Sign out
 Unwatch 1
  Star 0
 Fork 0 oagboghi2/SBS_69
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Settings Insights 
Branch: master Find file Copy pathSBS_69/README.md
1a120b6  16 hours ago
@oagboghi2 oagboghi2 Update README.md
1 contributor
RawBlameHistory     
58 lines (45 sloc)  2.64 KB
SBS_69

installation

npm install

how to run ?

run this from a terminal

nodemon app.js
open http://localhost:3000/

Specifications

General

[x ] All views are rendered on the server using server-side templates written with [Pug][] or [EJS][]
[ x] Web server can be started with the command npm start
 Test suite can be run with the command npm test
[x ] All features are added as pull requests
[x ] All pull requests are approved by at least one other member of the team using GitHub's pull request review feature (so that your teammate's approval is of the PR is documented)
[x ] Variables, functions, files, etc. have appropriate and meaningful names.
[x ] Functions are small and serve a single purpose
 Code uses a linter and there are no linting errors.
 Code is well tested and all tests are passing.
 The artifact produced is properly licensed, preferably with the MIT license.
Stories

[x ] Books have a title, author, and genre
[x ] Users can add books into the bookstore system via an admin page (create)
[x ] Users can see a list of books on the home page (read)
 Users can edit a book's title, author, or genre (update)
[x ] Users can delete a book from the bookstore (delete)
[x ] Users can search for books by title OR by author OR by genre (read)
[x ] Users can view book details on a book detail page (read)
 Lists of books are always paginated in groups of 10
[x ] Book detail view is linked to from the listing and search pages
[x ] Search results are presented in a new page
HTTP Verbs

Appropriate HTTP verbs are used for CRUD actions (for reference, follow the guidelines explained in this article)

[x ] GET requests are only used for read actions
[x ] POST requests are only used for create actions
 PUT or PATCH requests are only used for update actions
[x ] DELETE requests are only used for delete actions
Stretch

 App is deployed and live on the web (consider using Heroku)
 All source code is written with ES6
 Users have their own account and can sign up and sign in/out
 Users have one of three roles: admin, clerk, reader
 Users with role reader can only view and search for books
 Users with role clerk can edit books in addition to viewing/searching
 Users with role admin can perform all actions (create, read, update, delete) with books
 Books have a price, cover image, publisher, and ISBN number
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
