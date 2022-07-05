import { useState } from 'react';
import List from './components/List';
import data from './data';

import './App.css';


function App() {
  const [people, setPeople] = useState(data)
  console.log('data', people)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday`s today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all!</button>
      </section>
    </main>
  );
}

export default App;
