// import logo from './logo.svg';
// // logo.svg로 가져온다
// import './App.css';
// // css 적용한다
import React from 'react';

function Header() {
  return <header className="App-header">
    <h1><a href="/">React2</a></h1>
  </header>
}
function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, Web
  </article>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;




