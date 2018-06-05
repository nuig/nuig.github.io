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

:exclamation: **need help? want us to update something? just open an [issue](https://github.com/nuig/nuig.github.io/issues) describing what you want to add/update and someone will do that for you asap. If you want to update anything yourself, do it! see instructions below.**

Assuming you are in the `src` branch (`git checkout src`), the content of each page is in the `_pages/` directory. However, if you want to update the list of members or research projects, you'll have to look at the `_data/` and the `_research` directories respectively (more information below).

* [Home](htts://nuig.github.io) (`/`): [_pages/home.md](https://github.com/nuig/nuig.github.io/blob/src/_pages/home.md)

* [Contact](htts://nuig.github.io/contact) (`contact/`): [_pages/contact.md](https://github.com/nuig/nuig.github.io/blob/src/_pages/contact.md)


### Updating the list of members

To add a new member, just go to [`_data/member.yml`](https://github.com/nuig/nuig.github.io/blob/src/_data/member.yml) and the paste the lines below in the end of the file.

``` yaml
your-surname-x:                 // make sure it's a unique id in the whole file
  name: John Doe                // mandatory
  email: j@d.com                // optional
  orcid: 0000-0000-0000-0000    // optional
  gscholar: wuLwX_4AAAAJ        // optional
  dblp: 123/1234                // optional
  github: johndoe               // optional
  linkedin: johndoe             // optional
  twitter: johndoe              // optional
  website: http://john.com      // optional
```

* If you are a **staff member**, add your id (`your-surname-x`) at [`_data/staff.yml`](https://github.com/nuig/nuig.github.io/blob/src/_data/staff.yml).

* If you are a **collaborator**, add your id (`your-surname-x`) at [`_data/collaborator.yml`](https://github.com/nuig/nuig.github.io/blob/src/_data/collaborator.yml).

* If you are a **student**, add your id (`your-surname-x`) at [`_data/student.yml`](https://github.com/nuig/nuig.github.io/blob/src/_data/student.yml).

* If you are a **past student**, add your id (`your-surname-x`) at [`_data/past_student.yml`](https://github.com/nuig/nuig.github.io/blob/src/_data/past_student.yml).

Now, just commit your changes and create a [pull request](https://github.com/nuig/nuig.github.io/pulls).

### Updating the list of publications

The list of publications is automatically synchronized with [DBLP](http://dblp.uni-trier.de/). However, if you think something is wrong or missing, just add it to [`_bibliography/custom_entries.bib`](https://github.com/nuig/nuig.github.io/blob/src/_bibliography/custom_entries.yml) in BibTeX format.

* **Note:** if the publication is already listed in the final auto-generated file [`_bibliography/autogen_all.bib`](https://github.com/nuig/nuig.github.io/blob/src/_bibliography/autogen_all.yml), to avoid duplicates, make sure you use the same id at `_bibliography/custom_entries.bib`.

* **Note:** you should not touch any of the `autogen_` files.

* **Note:** to provide a pdf for a publication, check out the [data repository](https://github.com/nuig/data).

Now, just commit your changes and create a [pull request](https://github.com/nuig/nuig.github.io/pulls).

### Updating the research page

All research projects listed on the [research page](https://nuig.github.io/research) come from the [`_research`](https://github.com/nuig/nuig.github.io/blob/src/_research) directory. Thus, to **edit something**, just find the corresponding `md` file and make your changes. If you want to **add a new research page**, just duplicate any of the existing files and edit the content of it.

Now, just commit your changes and create a [pull request](https://github.com/nuig/nuig.github.io/pulls).
