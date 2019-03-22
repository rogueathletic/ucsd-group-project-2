# Express App Starter [![Build Status](https://travis-ci.com/rogueathletic/project2.svg?branch=master)](https://travis-ci.com/rogueathletic/project2)

Simple Node/Express CRUD application and scaffolding to help students quickly get started with a new project, with tests and CI support.

- Node + Express
- Sequelize
- Handlebars
- Mocha + Chai
- Travis CI

## Development Setup

```txt
# Install packages
npm install

# Initialize local database
mysql < models/schema.sql

# Create .env, update as needed
cp .env.example .env

# Run tests
npm test

# Start node application
npm start
```

  Heroku Deployment  
1.
 Create application [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
2.
Add on JawsDB [https://devcenter.heroku.com/articles/jawsdb](https://devcenter.heroku.com/articles/jawsdb)


##Best Practices section
---> Git pull / pushe's:
     commit note should have the following
     ```handlebars
     {{git commit -m "issue #: [note]"}}
     ```
---> pull process
     git clone https://github.com/rogueathletic/ucsd-group-project-2/edit/master/README.md
$ Git add [updated/file/location]

$ Git status [ensure you have added the file you intended to]

$ Git add --a [force adds be sure you have the correct files in the channel]

$ Git commit -m "[issue resolve number {#num}: your note to the team]"

$ git checkout -b [name_of_your_new_branch]

$ git push origin [name_of_your_new_branch]

HTML/CSS:

Javascript:

SQL:

