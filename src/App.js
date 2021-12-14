import logo from './logo.svg';
import './App.css';
import TextEditor from './editrex/textEditor';
import { useState } from 'react';

function App() {
  const [blog, setblog] = useState('')
  return (
    <div>
      a check
      <TextEditor text={blog} updateText={setblog}/>
      {blog}
    </div>

  );
}

export default App;
