---
layout: page
title: research
permalink: /research/
description: >
    Here we describe our main areas of interest. For more details on the
    ongoing research, please refer to the publications page.
---

{% for research in site.research %}

{% assign content = research.content | strip_newlines %}
{% if research.redirect %}
    {% assign link = '<a href="' | append: research.redirect | append: '" target="_blank">' %}
{% elsif content == "" %}
    {% assign hideButton = 'True' %}
    {% assign link = '<a href="#">' %}
{% else %}
    {% assign link =  research.url | prepend: site.baseurl | prepend: site.url %}
    {% assign link = '<a href="' | append: link | append: '">' %}
{% endif %}

<div class="research-item">
  <div class="thumbnail">
    {{ link }}
    {% if research.img %}{% assign img = research.img %}
    {% else %}{% assign img = '/assets/img/research_default.jpg' %}
    {% endif %}
    <img class="thumbnail" src="{{ img | prepend: site.baseurl | prepend: site.url }}"/>
    </a>
  </div>
  <div class="details">
      <h1>{{ research.title }}</h1>
      <p>{{ research.description }}</p>
      {% unless hideButton %}
      <div class="button-area">
        {{ link }}<div class="button">more</div></a>
      </div>
      {% endunless %}
  </div>
</div>

{% endfor %}
