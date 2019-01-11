---
layout: post
title: Quick Start Guide
categories:
  - Jekyll
  - tutorial
date: 2018-01-11T00:00:00.000Z
image: assets/images/11.jpg
---
If you already **have** a full Ruby **development** environment with all headers and RubyGems installed (see Jekyll’s requirements), you can **create** a new **Jekyll** site by doing the **following**:

```ruby
# Install Jekyll and Bundler gems through RubyGems
gem install jekyll bundler

# Create a new Jekyll site at ./myblog
jekyll new myblog

# Change into your new directory
cd myblog

# Build the site on the preview server
bundle exec jekyll serve

# Now browse to http://localhost:4000
```
