// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  listUser : 'http://localhost:3000/users',
  addUser : 'http://localhost:3000/users',
  removeUser : 'http://localhost:3000/users',
  changeUser : 'http://localhost:3000/users',
  listArticles: 'http://localhost:3000/articles',
  addArticle : 'http://localhost:3000/articles',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
