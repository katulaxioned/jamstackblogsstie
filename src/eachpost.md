---
layout: base.njk
pagination:
  data: blogs
  size: 1
  alias: blogs
permalink: "/eachpost/{{ blogs.id }}/"
---

::: container-eachpost
## This is blog page ID number {{ blogs.id }}.
# Post title :- {{ blogs.title }}
Post description :- {{ blogs.body }}
<!-- excerpt -->
:::