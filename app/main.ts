
// Importamos la function bootstrap de Angular2
import { bootstrap } from '@angular/platform-browser-dynamic';

//Importamos la aplicación root component
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders
]);