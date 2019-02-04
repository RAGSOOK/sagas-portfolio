# React Redux with Sagas

This project displays a list of projects with properties of name, github and website links, a tag describing an aspect of the project and a description.

## Setup

1. Create a database named `portfolio` on port 5432
1. Run the following SQL using the `portfolio` database:

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```

1. `npm install`
1. `npm run server`
1. `npm run client`
