# tableau-api-js
Package with latest tableau api scripts

## How to use

```javascript
import { tableauVersions, getLatestTableauVersion } from 'tableau-api-js';
import loadTableauApi from 'tableau-api-js';

let tableau;

console.log(tableauVersions) // Array with all available versions

loadTableauApi(getLatestTableauVersion())
  .then((response) => {
    // Tableau can be accesed from window.tableau
    // or you can set a global variable from loadTableauApi response
    tableau = response.tableau;
    message = response.message;
  });
  .catch((error) => {
    console.log(error.message);
  })
```

This is intended to be used with git@github.com:eea/volto-tableau.git
