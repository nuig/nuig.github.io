---
layout: page
permalink: /publications/
title: publications
description: Publications by categories in reversed chronological order.
---

{% assign nextYear = site.time | date: '%Y' | plus: 2 %}
{% for y in (1995..nextYear) reversed %}
  {% capture entries %}
    {% bibliography_count -f autogen_all --query @*[year={{y}}]* %}
  {% endcapture %}

  {% assign entries = entries | plus: 0 %}
  {% if entries > 0 %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f autogen_all -q @*[year={{y}}]* %}
  {% endif %}
{% endfor %}
