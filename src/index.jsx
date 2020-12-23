import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './index.html';
import './style.css';
import { Blog } from './components/Blog/blog.jsx';
import { Footer } from './components/Footer/footer.jsx';
import { Kontakt } from './components/Kontakt/kontakt.jsx';
import { Menu } from './components/Menu/menu.jsx';
import { Nabidka } from './components/Nabidka/nabidka.jsx';
import { OMne } from './components/OMne/omne.jsx';
import { Reference } from './components/Reference/reference.jsx';
import { Uvod } from './components/Uvod/uvod.jsx';

const routes = [
  { component: Uvod, path: '/', exact: true },
  { component: OMne, path: '/o-mne' },
  { componet: Nabidka, path: '/nabidka' },
  { component: Blog, path: '/blog' },
  { component: Reference, path: '/reference' },
  { component: Kontakt, path: '/kontakt' },
];

const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
          ;
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
