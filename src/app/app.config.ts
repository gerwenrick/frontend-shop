import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MetaReducer, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './state/app.reducer';
import { provideHttpClient } from '@angular/common/http';
import { ProductsEffects } from './state/products/effects/products.effects';
import { hydrationMetaReducer } from './state/hydration.reducer';

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects([ProductsEffects]),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducer, { metaReducers }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
