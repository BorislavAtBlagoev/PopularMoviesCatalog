// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_CREDENTIALS: {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: '6b585f80d3e77bdad77eb51bfaaf2baa'
  },
  FIREBASE: {
    apiKey: "AIzaSyAZzwpFKRSvj66Ycew8CAPTOX6WWc_mdMc",
    authDomain: "mmmc-e5934.firebaseapp.com",
    projectId: "mmmc-e5934",
    storageBucket: "mmmc-e5934.appspot.com",
    messagingSenderId: "1011172616910",
    appId: "1:1011172616910:web:c33ec05727e1aba960be9f",
    measurementId: "G-LJ7GXQWEVC"
  },
  AUTH: {
    PASSWORD_MIN_LENGTH: 6
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
