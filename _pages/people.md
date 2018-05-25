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
{% include alumni_table.html %}