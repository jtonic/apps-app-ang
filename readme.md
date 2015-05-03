# AP WEB application    

The purpose of this application is to become familiar with JS frameworks and WEB related languages/frameworks/tools etc:

1. NodeJS
1. ExpressJS
1. Npm
1. Gulp
1. Bower
1. AngularJS
1. RequireJS/CommonJS
1. Bootstrap
1. Jade

#### Goals:
1. Single page application
1. Nice looking theme - twitter bootstrap
1. JS client MVC - AngularJS
1. Data retrieval and storage - REST services
1. Security: Server and client side
1. Responsive design: desktop, tablets, smart-phones

#### Tasks:

1. [V] **_add twitter bootstrap_**
1. [V] **_Login form - bootstrap + AngularJS_**
1. [V] **_on click binding_**
1. [V] **_REST service_**
1. [V] **_AngularJS model synchronization with REST services_**
    
    **_Login - HTTP POST_** 
1. [V] **_mongo db storing support - REST service based persistence_**


#### Testing:

1. Test the REST service

    $ curl -v -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:3000/users
1. Test the web application
    http://localhost:3000

#### Issues:

    gulp-inject doesn't work with many targets, even used in separate tasks

        see the injects task

    stream.js:94
          throw er; // Unhandled stream error in pipe.
                ^
    Error: write after end
        at writeAfterEnd (/home/jtonic/github/apps-app-ang/node_modules/gulp/node_modules/vinyl-fs/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:144:12)
        at DestroyableTransform.Writable.write (/home/jtonic/github/apps-app-ang/node_modules/gulp/node_modules/vinyl-fs/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:192:5)
        at Stream.ondata (stream.js:51:26)
        at Stream.emit (events.js:95:17)
        at queueData (/home/jtonic/github/apps-app-ang/node_modules/gulp-inject/node_modules/event-stream/node_modules/map-stream/index.js:43:21)
        at next (/home/jtonic/github/apps-app-ang/node_modules/gulp-inject/node_modules/event-stream/node_modules/map-stream/index.js:71:7)
        at /home/jtonic/github/apps-app-ang/node_modules/gulp-inject/node_modules/event-stream/node_modules/map-stream/index.js:85:7
        at /home/jtonic/github/apps-app-ang/node_modules/gulp-inject/src/inject/index.js:86:7
        at Object._onImmediate (/home/jtonic/github/apps-app-ang/node_modules/gulp-inject/src/inject/index.js:114:7)
        at processImmediate [as _immediateCallback] (timers.js:345:15)
    [21:32:19] gulp-inject 2 files into index.html.

