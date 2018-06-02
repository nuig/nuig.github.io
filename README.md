# Computational Intelligence Research Group (CIRG)

We are the Computational Intelligence Research Group at the National University of Ireland Galway, and this is the source code of our [website](https://nuig.github.io). It is powered by [Jekyll](https://github.com/alshedivat/al-folio) and based on the clean and nice [al-folio](https://github.com/alshedivat/al-folio) theme.

What is [Jekyll](https://jekyllrb.com)? It is just a static site generator. Want to know more? watch [this video](https://www.youtube.com/watch?v=iWowJBRMtpc).

Why Jekyll? Read this [blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll)!

## Getting started

This repository has two branches, `master` and `src`. As it's hosted on [GitHub](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages), the compiled (automatically generated) stuff is placed in the `master` branch. Thus, if you're going to update anything here, you should NEVER touch the `master` branch.

### Installation

Assuming you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed on your system, first fork the theme from `https://github.com/nuig/nuig.github.io` to `https://github.com/<your-username>/<your-repo-name>` and do the following:

```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
$ cd <your-repo-name>
$ git checkout src
$ bundle install
$ bundle exec jekyll serve
```

Now, feel free to make changes.

## Updating page content

Assuming you are in the `src` branch (`git checkout src`), the content of each page is in the `_pages/` directory. However, if you just want to update the list of members or projects you just have to look at the `_data/` directory (more information below).

* [Home](htts://nuig.github.io) (`/`): [_pages/home.md](https://github.com/nuig/nuig.github.io/blob/src/_pages/home.md)

* [Contact](htts://nuig.github.io/contact) (`contact/`): [_pages/contact.md](https://github.com/nuig/nuig.github.io/blob/src/_pages/contact.md)


### Updating the list of members
`TO DO`

### Updating the list of publications
`TO DO`

### Updating projects page
`TO DO`