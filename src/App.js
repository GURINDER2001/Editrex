import logo from './logo.svg';
import './App.css';
import { Editrex } from './lib';
import { useState } from 'react';

function App() {
  const [blog, setblog] = useState('')
  const [theme, setTheme] = useState('default')

  const themeTextColor={default:'text-zinc-300',leafy:'text-green-300',snowy:'text-blue-200',tangy:'text-amber-200 ',dark:'text-zinc-600'}
  const themeBackgroundColor={default:'bg-zinc-300',leafy:'bg-green-300',snowy:'bg-blue-200',tangy:'bg-amber-200 ',dark:'bg-zinc-600'}
  return (
    <div>
      <div className="w-100 py-5 flex justify-between">
        <img src="/logo.png" alt="Logo" className="h-10 pl-5" />
        <a href="https://www.npmjs.com/package/editrex" className="p-2 mx-10 bg-lime-300 px-4 text-white rounded-md">NPM PACKAGE</a>
        </div>
      <div className="px-10">
        
        <div className={`w-100 py-28 mx-auto text-4xl banner  align-self-end ${themeTextColor[theme]} font-mono font-bold `}>
      Introduce the <span className="text-lime-300 text-5xl">'X factor'</span> <br /> to your plain boring text with <br />
    <img src="/logo.png" className ="mt-5  "alt="" srcset="" />
        </div>
  
  <div className="text-right mb-12"> <a href="#editor"className=" mt-5 mr-36 border-2 text-xl border-lime-300 text-lime-300 p-2 px-24 rounded-md">Try Now</a></div>
        {/* <img src="/editor.png" alt="" /> */}
       <div className="flex justify-center">
         <div className="text-center text-gray-400" onClick={()=>setTheme('default')}> 
       <div className={`w-16 h-16 border-2 border-gray-300 rounded-full mx-5 ${theme=='default'?'shadow-2xl shadow-gray-300 ':''}`}></div>
           <div>Default</div>
         </div>
         <div className="text-center text-green-400" onClick={()=>setTheme('leafy')}> 
       <div className={`w-16 h-16 bg-green-400 rounded-full  mx-5 ${theme=='leafy'?'shadow-2xl shadow-green-400 ':''}`}></div>
           <div>Leafy</div>
         </div>
         <div className="text-center text-cyan-300" onClick={()=>setTheme('snowy')}> 
         <div className={`w-16 h-16 bg-cyan-300 rounded-full mx-5 ${theme=='snowy'?'shadow-2xl shadow-cyan-300 ':''}`}></div>
           <div>Snowy</div>
         </div>
         <div className="text-center text-orange-400" onClick={()=>setTheme('tangy')}> 
         <div className={`w-16 h-16 bg-orange-400 rounded-full mx-5 ${theme=='tangy'?'shadow-2xl shadow-orange-400 ':''}`}></div>
           <div>Tangyy</div>
         </div>
         <div className="text-center text-zinc-800" onClick={()=>setTheme('dark')}> 
         <div className={`w-16 h-16 bg-zinc-800 rounded-full mx-5 ${theme=='dark'?'shadow-2xl shadow-zinc-800 ':''}`}></div>
           <div>Dark</div>
         </div>
      
     
       </div>
       
      </div>

      <div className="flex my-24" id="editor">
        <div className="w-3/5 mx-auto my-20">
          <Editrex editorState={blog} theme={theme} updateEditorState={setblog} />
        </div>
        
      </div>
      <div className="flex ">
        <div className="w-3/5 px-10 my-20">
        
            <div className="text-7xl font-bold font-mono text-left text-lime-300 mb-8">Code <br />for <br /> Integration</div>
        </div>
        <div className="w-2/5 ">
          <pre className={`p-5 bg-zinc-800 text-zinc-100 rounded-lg w-3/4`}>
            <code>

              import &#x7B; Editrex &#125; from 'editrex';<br />
              ... <br />
              ... <br />
              Function App() &#x7B; <br />
              const [editorState, setEditorState] = useState(''); <br />
              ... <br />
              ... <br />
              return( <br />
              &lt;div&gt; <br />
              &lt;Editrex <br /> editorState=&#x7B;editorState&#125; <br /> theme=&#x7B;"{theme}"&#125; <br /> updateEditorState==&#x7B;setEditorState&#125; /&gt; <br />
              &lt;/div&gt; <br />
              )
              &#125;


            </code></pre>
        </div>
      </div>
      <hr className="mx-10 mt-24 text-gray-200" />
                <div className="flex justify-between px-12 text-zinc-600 py-8">
                  <span> <a href="https://github.com/GURINDER2001/Editrex" target="_blank" className="mr-6">GITHUB</a>
                  <a href="https://www.npmjs.com/package/editrex"  target="_blank">NPM</a></span>
                  <span> <a href="http://kalgury.in"  target="_blank">PORTFOLIO COPYRGHT@KALGURY</a></span>
                 
                 
                </div>
    </div>

  );
}

export default App;
