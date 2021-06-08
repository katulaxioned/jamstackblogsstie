---
layout: base.njk
pagination:
  data: blogs
  size: 1
  alias: blogs
permalink: "/eachpost/{{ blogs.id }}/"
---

## This is {{ blogs.id }}th blog page.
# {{ blogs.title }}
{{ blogs.body }}