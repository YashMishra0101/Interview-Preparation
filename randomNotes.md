### Important terms and their purposes

1\. HTTP (Hypertext Transfer Protocol)

- A communication protocol used to transfer data between a client (frontend) and a server (backend).
- It can transfer different types of data, including JSON, text, images, videos, and files.

2\. JSON (JavaScript Object Notation)

- A lightweight, text-based format used to represent and exchange structured data between applications.
- It organizes data using key-value pairs and supports objects, arrays, strings, numbers, booleans, and null.

3\. `JSON.stringify()`

- Converts a JavaScript value (such as an object or array) into a JSON-formatted string.
- Used when sending JavaScript data through an HTTP request body as JSON.

4\. `Content-Type`

- An HTTP header that tells the receiver what format the request or response body contains.
- For example, `application/json` indicates JSON data, while `image/png` indicates a PNG image.

5\. `express.json()`

express.json is a built-in middleware that takes the JSON text from the request body and converts it into a JavaScript object. It makes that object available on req.body, so we can use it in our routes.

With app.use(express.json()), every incoming request that has JSON data gets converted automatically into a JavaScript object, and you can read it from req.body in any route.

6\. `res.json()`

res.json() is the opposite side of express.json(), Yash. It’s a method on the response object that sends data back to the client as JSON.
It converts a JavaScript object into JSON, sets the Content-Type header to application/json, and sends it to the client as the response.

7. app.use
   app.use is the method Express gives you to register middleware. You pass it a middleware function, and Express runs that function on incoming requests, in the order you registered it.
   If you don’t give a path, like app.use(express.json()), it runs for every request. If you give a path, like app.use('/api', myMiddleware), it runs only for requests that start with /api.

- Without a path: `app.use(express.json())` makes the middleware global, so it runs for every request.
- With a path: `app.use('/api', myMiddleware)` makes it path-specific, so it runs only for requests whose URL starts with `/api`.

----------------------------------

1.Primary key: A primary key uniquely identifies each row in its own table, and it can never be empty or duplicated. Each table normally has just one, like the id column in a users table.

2.Foreign key: A foreign key is a column in one table that points to the primary key of another table, which links the two tables together.

3.Constraint: A constraint is a rule on a table's columns that the database itself enforces, so invalid data can't get in. If an insert or update breaks the rule, Postgres rejects it with an error.

The common ones are NOT NULL, which means a column can’t be empty, UNIQUE, which means no duplicate values, PRIMARY KEY, FOREIGN KEY, and CHECK, which lets you write your own condition like price must be above zero. 

Common constraints:

NOT NULL: the column can’t be empty
UNIQUE: no duplicate values
PRIMARY KEY: unique and not null, identifies the row
FOREIGN KEY: value must exist in the referenced table
CHECK: your own condition, like price must be above zero

In Prisma

@id creates the primary key
@relation creates the foreign key
@unique creates a UNIQUE constraint
A field without ? becomes NOT NULL by default


------------------------------------------------

Prisma 7 Notes (Express + PostgreSQL)

One-line mental model
Prisma Migrate builds the tables. Prisma Client uses them. The driver carries the SQL to PostgreSQL.

A. Prisma Schema (schema.prisma)
The single file where you define your database models, fields, data types, and relationships. Everything else in Prisma is generated from this file.

B. Prisma Client
Interview answer: "Prisma Client is an auto-generated, type-safe query library that Prisma creates from my schema. I write JavaScript methods like findMany and create, and it converts them into SQL, runs them through a database driver, and returns the results as plain objects."
• It only reads and writes data inside tables that already exist (create, findMany, update, delete).
• You get it by running prisma generate. In Prisma 7, run this explicitly, because the automatic post-install generation was removed.
• Autocomplete works in plain JavaScript too, because the editor reads the generated types.
• Compile-time error checking needs TypeScript, so only claim that benefit when you use TS.

C. Prisma Migrate
Prisma Migrate manages changes to your database structure. You change schema.prisma, run prisma migrate dev, and it generates SQL that creates or alters the real tables in PostgreSQL. It also keeps a history of every change in the migrations folder.

• Migrate = builds the table (columns and types).
• Client = saves and reads the data inside it.
• Order is always: Migrate first, then Client.

D. Prisma Config (prisma.config.ts)
A Prisma 7 feature. This file sits in the project root and tells the Prisma CLI where the schema and migrations are and which database URL to use for commands like migrate.
• The connection URL for the CLI is now set here, not inside the datasource block of schema.prisma.
• Part of Prisma 7's move toward explicit configuration over hidden defaults.

E. Driver and Driver Adapter (biggest Prisma 7 change)
Driver: a library that knows how to talk to one specific database. The pg driver is the one for PostgreSQL: it opens the connection, sends SQL, and returns rows as JavaScript.

Driver adapter: the connector that lets Prisma Client use a driver. Prisma 7 no longer bundles database drivers, so a plain new PrismaClient() with no arguments does not work for the normal setup. You must pass an adapter:

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
• Local PostgreSQL: use the pg adapter (@prisma/adapter-pg).
• Neon (hosted PostgreSQL) also has its own adapter (@prisma/adapter-neon), useful for serverless-style connections. Check the Prisma docs when you deploy.
• Old tutorials that use new PrismaClient() alone will break, so always check the Prisma version first.

F. The full flow
1. Your Express route calls Prisma Client, for example prisma.user.findMany().
2. Prisma Client turns that into a SQL query.
3. It hands the SQL to the pg driver through the adapter.
4. The driver sends it to PostgreSQL over a connection.
5. PostgreSQL runs it and returns rows.
6. The driver converts the rows to JavaScript, Prisma returns clean objects, and Express sends them as the response.

G. Other Prisma 7 changes worth knowing
• Rust-free client: the old Rust query engine is gone, the runtime is built in TypeScript, so bundles are smaller and cold starts are faster.
• Generated client no longer lives in node_modules, so follow the docs for the generator output path and your import path.
• Configuration moved into prisma.config.ts.
