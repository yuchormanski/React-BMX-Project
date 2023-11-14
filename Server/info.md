Starting the Service
The REST service will be in a folder named “server” inside the provided resources archive. It has no dependencies and can be started by opening a terminal in its directory and executing:
node server.js
If everything is initialized correctly, you should see a message about the host address and port on which the service will respond to requests.
Sending Requests
To send a request, use the hostname and port, shown in the initialization log and resource address and method as described in the application requirements. If data needs to be included in the request, it must be JSON-encoded, and the appropriate Content-Type header must be added. Similarly, if the service is to return data, it will be JSON-encoded. Note that some requests do not return a body and attempting to parse them will throw an exception.
Read requests, as well as login and register requests do not require authentication. All other requests must be authenticated.

Required Headers
To send data to the server, include a Content-Type header and encode the body as a JSON-string:
Content-Type: application/json
{JSON-encoded request body as described in the application requirements}

To perform an authenticated request, include an X-Authorization header, set to the value of the session token, returned by an earlier login or register request:
X-Authorization: {session token}
Server Response
Data response:
HTTP/1.1 200 OK
Access-Contrl-Allow-Origin: _
Content-Type: application/json
{JSON-encoded response data}
Empty response:
HTTP/1.1 204 No Content
Access-Contrl-Allow-Origin: _
Error response:
HTTP/1.1 400 Request Error
Access-Contrl-Allow-Origin: \*
Content-Type: application/json
{JSON-encoded error message}

{ "email": "peter@abv.bg", "password": "123456" }
{ "email": "john@abv.bg", "password": "123456" }

Method: POST
URL: /users/login
The required headers are described in the documentation. The service expects a body with the following shape:
{
email,
password
}
Upon success, the REST service will return the newly created object with an automatically generated \_id and a property accessToken, which contains the session token for the user – you need to store this information using sessionStorage or localStorage, in order to be able to perform authenticated requests.

Method: POST
URL: /users/register
Required headers are described in the documentation. The service expects a body with the following shape:
{
email,
password
}

Method: GET
URL: /data/fruits?sortBy=\_createdOn%20desc

Method: POST
URL: /data/fruits
The required headers are described in the documentation. The service expects a body with the following shape:
{
name,
imageUrl,
description,
nutrition
}

Method: GET
URL: /data/fruits/:id

Method: PUT
URL: /data/fruits/:id
Where :id is the id of the desired card.
The service expects a body with the following shape:
{
name,
imageUrl,
description,
nutrition
}

Method: DELETE
URL: /data/fruits/:id

search method
Method: GET
URL: /data/fruits?where=name%20LIKE%20%22${query}%22
