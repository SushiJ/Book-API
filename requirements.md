# Requirements

## _Books_

- ISBN - String

- Title - String

- Author - [Number]

- Language - String

- Publications - Number

- NumOfPages - Number

- Categories - [String]

## _Authors_

- id - Number

- name - String

- books - [String]

## _Publications_

- id - Number

- name - String

- books - [String]

<hr>

# APIs

## _Book_

### GET

- [x] to get all books

- [x] to get specific books

- [x] to get a list of books based on category

- [x] to get a list of books based on author

### POST

- to add new book

### PUT

- to update book details

- to update/add new author

### DELETE

- delete a book

- delete an author from the book

## _Authors_

### GET

- [x] to get all authors

- [x] to get specific author

- [x] to get list of author based on a book

### POST

- to add new author

- to update/add new book

### PUT

- update author details

### DELETE

- delete an author

## _Publications_

### GET

- [x] to get all publication

- [x] to get specific publication

- [x] to get a list of publication based on a book.

### POST

- Add new publication

### PUT

- update publication

- to update/add new book

### DELETE

- delete a book from publication

- delete a publication
