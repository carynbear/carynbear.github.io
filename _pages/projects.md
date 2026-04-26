---
layout: page
title: projects
permalink: /projects/
description: A concise archive of my active and completed research agendas.
nav: true
nav_order: 2
horizontal: false
---

<div class="projects">
{% assign ongoing_projects = site.projects | where: "status", "ongoing" | sort: "importance" %}
{% assign past_projects = site.projects | where_exp: "project", "project.status != 'ongoing'" | sort: "importance" %}
{% assign sorted_projects = ongoing_projects | concat: past_projects %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>
