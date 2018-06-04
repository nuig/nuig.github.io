---
layout: publications
permalink: /publications-by-type/
title: publications
description: Showing publications by type.
style: bytype
---

{% assign ids   = "preprints, articles, incollection, conferences, theses, techreports" | split: ", " %}
{% assign names = "preprints, journal articles, book chapters, conference and workshop papers, theses, technical reports" | split: ", " %}
{% assign types = "unpublished, article, incollection, inproceedings, thesis, techreport" | split: ", " %}

{% for type in types %}
<a id="{{ ids[forloop.index0] }}" class="anchor"></a>
<h3 class="publication-type"><a href="#{{ ids[forloop.index0] }}">{{ names[forloop.index0] }}</a></h3>
{% bibliography -f autogen_all -q @{{ type }}[year>=1995] %}
{% endfor %}