// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interface';

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyCUeG6lbCmmCVfiVifM2Q3cvnpOWegFQMg',
  dbUrl: 'https://online-store-dev-ab337-default-rtdb.firebaseio.com',
  apiUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
