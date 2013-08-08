# MINDRE WEB SERVER

Minimal web server for development. Serves static files and provides simple routing.

Should be able to replace MAMP for development purposes - Work in progress.

## HOW IT WORKS
Mindre is a static web server based on Connect enhanced with customizable routing. 

### Static content
Set the staticFilesDir in server.js to the path of the folder of the static content. 

### Routing
Routes are specified in routes.js. If a route in the file is matched, the content of the file specified will be the response from the server.