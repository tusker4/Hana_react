// import logo from './logo.svg';
// // logo.svg로 가져온다
// import './App.css';
// // css 적용한다
import React from 'react';

function Header(props) {
  // console.log('props', props, props.title);
  return <header className="App-header">
    <h1><a href="/">{props.titla}</a></h1>
  </header>
}
function Nav(props) {
  const lis = [
    <li><a href="/read/1">html2</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    Hello, Website
  </article>
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ....' },
    { id: 2, title: 'css', body: 'css is ....' },
    { id: 3, title: 'js', body: 'js is ....' }
  ]
  return (
    <div className="App">
      <Header titla="React"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Hellcome"></Article>
      <Article title="Welcomes"></Article>
    </div>
  );
}

export default App;




