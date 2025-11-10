/*
##1) What is CORS?

**CORS = Cross-Origin Resource Sharing**

It's a **security feature** implemented by browsers to control which websites can access resources from your backend server.

--- What is CORS?

- Origin = Protocol + Domain + Port
- Browser security feature that blocks requests between different origins
- Prevents malicious websites from stealing your data

--- Why CORS Exists

CORS exists to protect users from malicious websites trying to:
=>Steal their cookies
=>Access private APIs
=>Perform actions (like buying something or deleting data) without permission

Basically, it stops unauthorized cross-origin access unless the server explicitly allows it.

CORS is like a bouncer 🧍‍♂️ at a club (your backend) who checks the ID (origin) of anyone (frontend) trying to enter. Only the ones you approve get access inside.


##1) What is Middleware.

Basically, middleware is a function that has access to the request and response objects. It can either end the request-response cycle or, if certain conditions are met (like authentication), forward the request to the next middleware or route.

---More Professional 

A middleware is a function that has access to the request object (req), the response object (res), and the next middleware function (next) in the application’s request-response cycle.

It can modify the request and response objects, execute code, end the request-response cycle, or call the next middleware in the stack using next().

*/
