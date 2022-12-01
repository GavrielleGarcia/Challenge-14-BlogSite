# Challenge-14-BlogSite
## User Story
 ```bash
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Installation
  To install the necessary dependencies, run the following command:
```bash
npm install dotenv --save
npm install express
npm i express-session
npm i sequelize
npm i express-handlebars
npm i connect-session-sequelize
npm i bcrypt
npm install --save mysql2
```

After the dependencies are installed, create a .ENV file and fill it with your connection information. Example as follows:

```bash

DB_NAME='tech_blog_db'
DB_USER='root'
DB_PASSWORD='UPDATE YOUR PASSWORD HERE'

```

Now, you can proceed to create the datbase schema through MySQL:

```bash
 #under MySQL terminal
    mysql -u root -p
    # to create the DB schema
    source db/schema.sql
```

Then, start working with the server.js file:

```bash
 npm start
```

## Technologies Used
 MysSQL
 JavaScript
 Node.js
 
 

 ## Overview 
In progress

 
## Contributing 
 Open to any contribution (:.
 
 
## Questions
  My Stuff [gavriellegarcia](https://github.com/gavriellegarcia).

  Send me an owl: gavrielle.garcia@hotmail.com.  