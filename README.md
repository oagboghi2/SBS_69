# SBS_69

## Specifications

#### General
- [ ] All views are rendered on the server using server-side templates written with [Pug][] or [EJS][]
- [ ] Web server can be started with the command `npm start`
- [ ] Test suite can be run with the command `npm test`
- [ ] All features are added as pull requests
- [ ] All pull requests are approved by at least one other member of the team using GitHub's [pull request review feature](https://help.github.com/articles/about-pull-request-reviews/) (so that your teammate's approval is of the PR is documented)
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose
- [ ] Code uses a linter and there are no linting errors.
- [ ] Code is well tested and all tests are passing.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

#### Stories
- [x ] Books have a title, author, and genre
- [ ] Users can add books into the bookstore system via an admin page (_create_)
- [ ] Users can see a list of books on the home page (_read_)
- [ ] Users can edit a book's title, author, or genre (_update_)
- [ ] Users can delete a book from the bookstore (_delete_)
- [ x] Users can search for books by title OR by author OR by genre (_read_)
- [ ] Users can view book details on a book detail page (_read_)
- [ ] Lists of books are always paginated in groups of 10
- [ ] Book detail view is linked to from the listing and search pages
- [x ] Search results are presented in a new page

#### HTTP Verbs
Appropriate HTTP verbs are used for CRUD actions (for reference, follow the guidelines explained in [this article](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#restful))
- [ ] `GET` requests are only used for _read_ actions
- [ ] `POST` requests are only used for _create_ actions
- [ ] `PUT` or `PATCH` requests are only used for _update_ actions
- [ ] `DELETE` requests are only used for _delete_ actions

### Stretch

- [ ] App is deployed and live on the web (consider using Heroku)
- [ ] All source code is written with ES6
- [ ] Users have their own account and can sign up and sign in/out
- [ ] Users have one of three roles: `admin`, `clerk`, `reader`
- [ ] Users with role `reader` can only view and search for books
- [ ] Users with role `clerk` can edit books in addition to viewing/searching
- [ ] Users with role `admin` can perform all actions (create, read, update, delete) with books
- [ ] Books have a price, cover image, publisher, and ISBN number
