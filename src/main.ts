import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LicenseManager} from 'ag-grid-enterprise/main';
LicenseManager.setLicenseKey(environment.apiKey);


if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: string) => {
      return console.error(err);
  });
