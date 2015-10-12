---
layout: slides
theme: 'league'
---


# Charles Covey-Brandt
I work at Disqus on [lots of stuff]()

I love building [great software]() with [amazing teams]()

# Experience

I love front-end frameworks, RESTful APIs, clean code, iteration and keeping things simple. I work at Disqus and do lots of stuff.

# Python 2 (some 3)
## python
    - meta classes for developing strong class APIs (classes considered harmful?)
    - generators and iterators for memory optimization, speed, stream handling
    - sets vs. tuples, what is appropriate when?
    - python double-undescore (dunder =)) methods for duck-typing interfaces
    - debugging w/ pdb traces etc
    - testing w/ mock, exam, pytest / nosetest, fixtures
## django
    - middleware vs. decorators, the middleware feature scaling trap
    - django view pattern considered harmful to REST
    - class based views for RESTful patterning
    - ORMs or SQL raw, optimizing query patterns
    - authentication and authorization patterns, the hidden hell of perm groups / object level perms (try testing it!)
    - testing patterns: integration tests ftw (unit for pure (maybe idempotent) functions only)
    - django for single page client apps and the SEO problem (pre-render or SEO templates, does google care?)
    - django model serialization w/ forms and why to never do it
    - multi process vs. multi-thread -- pattern for handling massive request load w/ long running tasks (202 better w/ RPC pattern?)
    -
- django rest framework (not tastypie!)

Experience w/:
- tornado in Python 2 (sad face)
- pyramid
- pylons
- flask

# Ask me about:
- AWS ec2, sqs, rds, s3
- docker, ci, tests and continous delivery
- graphite + sentry or similar for confidence during continuous delivery
- storm and dual writing vs. event spitting at nginx level (data augmentation!)
- message queuing (RabbitMQ or other) for tasks
- zookeeper for switched releases
- memcache vs. redis vs. other random shared mem / data system
- postgres and casandra for persistence, how to structure data for activity streams and querying
- mixpanel.js etc. vs. in-house w/ graphite / elastic search / storm + etl + postgres DW
- classes vs. composition (flat classes, no classes, javascript and python)
- micros vs. macro services - why macro is generally better for smaller companies (but w/ an eye towards micro through concern boundaries)

# Building teams for professional growth and dev velocity
## Product feature teams (getting shit done)
## Functional teams (getting shit done faster, teaching people to get more shit done)
- diversity diversity diversity (chanted balmer style)
- mentorship pattern for hiring + junior devs (90 day new hire plan, time allocated mentor for 6 months (1pt per iteration))
- focus w/ defined feature boundaries / a way to say "no"
- x-functional development team w/ support from stats team member for defining KPIs and understanding current user patterns, PM to make user story calls, designer working 1-2 release cycles ahead
- clear epic: a series of user stories tied together under a persona or set of similar personas
- development rythm with set release goals
- development tools and practices: code review, git squashing for master, code style guides, "you broke it you fix it" on call pattern
    - flake8 strict (w/ 120 char line allowance), high test code coverage etc
    - eslint w/ github style guides and modifications (named vars > 2 chars etc)
    -
- debt cleanup on the trailing edge of feature releases
- most important: team structure and development pattern to fit context
    - are you in debt cleanup, feature tweaking, or greenfield software mode?
    - team size, larger needs more structure, smaller needs to sit closer together or have high touch communication processes
    -

# ECMA 5, 6 (Harmony)
Deep experience in:
- those javascripties
- backbone
- handlebars
- jquery
- underscore
- amd (require.js)
- client optimizations (caching TTLs, expiries, DNS and SSL patterns (http2 and ssl pipelining!), async script loading, etags)
- data driven development (instrument all the things)
- sinon.js
Ask me about:
- node.js
- react vs. some-older-framework-with-views
- grunt / webpack / build pipeline of choice vs. ECMA6 imports
- phantomJS for testing and increased productivty
- prerender.io

# Hobies
- Rasberry pi, arduino home networking for Hues, sensor network, cat things (carbon filter fan for cat litter box!)
- Electric imp + motion sensor + keen.io for tracking daily wake up / work habits and equating to energy levels
- Voice assistent system in raspi + python streaming + CMU Sphinx http://cmusphinx.sourceforge.net/
    - activation word detection (onset utterance), stream handling + interrupts
    -

# Professional Experience
## Hackbright
1+ years code and professional mentoring at hackbright code school


## Washington Post
- groovy grails java work
- APIs in pyrami / pylons for mobile photo view applications (Washington Post Peep Show!)
- Washington Post Social Reader (now Trove https://trove.com)
    - tech lead for greenfield project, ground up single page app in Pylons + Backbone w/ AWS backing
    - featured at Facebook F8 in 2012
    - Massive single page app w/ Backbone (in 2011!)
    - 1million unique users per day at peak

## Disqus
Front-end functional lead Q1 2014 - present
technical project lead for
    - publisher data analytics working w/ Disqus JS core libs, Nginx, Kafka, ETLs (S3 Hive / Hadoop), Postgres, Tableau (2014 Q1)
    - data pipeline development (2014 Q2)
        - Developed data pattern (http://activitystrea.ms/) and first pass infrastructure for Disqus data pipeline
    - publisher admin overhaul Q3 2015
    -

Apps are shaping the web, let's make sure they're good
