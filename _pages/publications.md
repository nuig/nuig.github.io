---
layout: publications
permalink: /publications/
title: publications
description: Showing publications by year.
style: byyear
---

{% assign nextYear = site.time | date: '%Y' | plus: 2 %}
{% for y in (1995..nextYear) reversed %}
  {% capture entries %}
    {% bibliography_count -f autogen_all --query @*[year={{y}}]* %}
  {% endcapture %}

  {% assign entries = entries | plus: 0 %}
  {% if entries > 0 %}
  <a id="{{ y }}" class="anchor"></a>
  <h3 class="year"><a href="#{{ y }}">{{ y }}</a></h3>
  {% bibliography -f autogen_all -q @*[year={{y}}]* %}
  {% endif %}
{% endfor %}
