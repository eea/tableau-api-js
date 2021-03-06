# tableau-api-js

Package with latest tableau api scripts

## How to use

```JSON
  "dependencies": {
    "tableau-api-js": "github:eea/tableau-api-js#1.1.0"
  }
```

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
  })
  .catch((error) => {
    console.log(error.message);
  })
```

This is intended to be used with [Volto tableau](https://github.com/eea/volto-tableau)
