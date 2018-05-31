---
layout: page
permalink: /people/
title: people
description: Research group members.
datatable: true
---

#### Staff
{% assign members=site.data.staff %}
{% include people_list.html %}

#### Collaborators
{% assign members=site.data.collaborator %}
{% include people_list.html %}

#### Postgraduate Students
{% assign members=site.data.student %}
{% include people_list.html %}

#### Past Postgraduate Students
{% include past_students_table.html %}

<p style="text-align: center;margin-top: 2em;">
If you need to add/update anything, please follow the instructions <a href="https://github.com/nuig/nuig.github.io/blob/master/README.md">here</a>.
</p>
