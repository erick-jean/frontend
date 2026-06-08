import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideEnvironmentNgxMask(),
  ],
};
