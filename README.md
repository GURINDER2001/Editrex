# Editrex
![Logo](logo.png)

Editrex is a rich text editor component npm package for react.

For installation and usage guide proceed below.

Live demo : [Click here](http://editrex.kalgury.in) 

## Features
- Rich text editing
- Multiple themes
- Easy Integration

## Getting Started

```
npm install --save editrex react react-dom

or

yarn add editrex react react-dom
```

Editrex depends on React and React DOM which must also be installed.



### Using Editrex

![Logo](editor.png)

```js
import React from "react";
import { Editrex } from "editrex";

export default function App() {
 const [editorState, setEditorState] = useState(''); 

  return (
    <div>
      <Editor
        editorState={editorState}
        updateEditorState={setEditorState}
        theme='default' // explore more themes leafy,snowy,tangy & dark.
      />
    </div>
  );
}

```


## Browser Support

 ![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png)  IE / Edge  

![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png) Firefox 

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png) Chrome

![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png)  Safari



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
