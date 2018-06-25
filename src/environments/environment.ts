// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: { production: boolean, [key: string]: any  } = {
  production: false,
  host: 'https://www.googleapis.com/youtube/v3',
  url: '/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john',
  apiKey: 'Evaluation_License_Valid_Until__25_August_2018__MTUzNTE1MTYwMDAwMA==53aedc27a9df43c4e4bd6c97d9e6f413',
  urlVideo: 'https://www.youtube.com/watch?v='
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
