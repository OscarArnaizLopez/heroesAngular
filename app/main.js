"use strict";
// Importamos la function bootstrap de Angular2
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//Importamos la aplicación root component
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders
]);
//# sourceMappingURL=main.js.map