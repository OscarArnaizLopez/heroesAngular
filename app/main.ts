
// Importamos la function bootstrap de Angular2
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http'; // this is the angular2 service that connect to a remote server
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//Importamos la aplicación root component
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-memserver
    { provide: SEED_DATA, useClass: InMemoryDataService } // in-mem server data
]);