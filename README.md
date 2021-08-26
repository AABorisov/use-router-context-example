# Change list

- contexts
  - useRouterContext -- createContext and define value
- pages
  - any -- pages for routes
- routes
  - Page -- one page for all pages
  - routes -- list of routes, map of components
- App.js -- useRouter for push and back functions
- index.js -- add RouterContext

### Add RouterContext

index.js

```javascript
import {RouterProvider} from "./contexts/useRouterContext";
...
//---------------------
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//vvvvvvvvvvvvvvvvvvvvv
ReactDOM.render(
  <React.StrictMode>
      <RouterProvider>
          <App />
      </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//---------------------
```


### Add route

1. Add Page into pages directory:

```
+ pages/Example.js
```

2. Add route into page list:

routes/routes.js

```js
import Example from "../pages/Example";
...

export const PAGES = {
    ...,
    'EXAMPLE': 'example',
}

export default {
    ...,
    [PAGES.EXAMPLE]: Example,
}
```

3. Use <code>push</code> for changing page to Example

```js
import {useRouter} from "./contexts/useRouterContext";
import {PAGES} from "./routes/routes";
...
function ExampleButton() {
    const { push } = useRouter()
    return (
      <button onClick={()=>push(PAGES.EXAMPLE)}>Example</button>
    )
}
```

4. Use <code>back</code> for returning to previous page

```js
import {useRouter} from "./contexts/useRouterContext";
...
function BackButton() {
    const { back } = useRouter()

    return (
      <button onClick={()=>back()}>Back</button>
    )
}
```