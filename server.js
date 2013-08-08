var connect = require('connect'),
	connectRoute = require('connect-route'),
    routes = require('./routes.js'),
	fs = require('fs'),
	contentType = require('./lib/content-types.js').ext,
	port = 3000,
	staticFilesDir = __dirname + '/example-site';



connect()

	.use(connectRoute(function (router) {
	    console.log(routes);
	    //Special condition to manage
	    router.get('/', function (req, res, next) {
	        route(req, res, next);
	    });

	    router.get('*', function (req, res, next) {
	    	console.log(req.url)
	        route(req, res, next);
	    });
		
		router.get('*/*', function (req, res, next) {
	    	console.log(req.url)
	        route(req, res, next);
	    });
	}))
    //check for specific routes
    .use(connect.static(staticFilesDir))

    //else go for static content
  	.listen(port, function (e) {
    	console.log('Server running at http://localhost:' + port);
	});


function route(req, res, next) {
    if (routes[req.url]) {
        var html = '';

        var ext = contentType.getExt(routes[req.url]);
        console.log(ext);

        var type = contentType.getContentType(ext);
        console.log(type);
        html += fs.readFileSync(__dirname + '/' + routes[req.url]);


        res.setHeader("Content-­‐Type", type);
        res.end(html, 'utf-8');
        console.log("Served url: ", req.url, " with ", routes[req.url]);
    }
    else{
    	next();
    }
}