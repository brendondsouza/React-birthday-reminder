import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data)

  function handleClear(){
    setPeople([])
  }

  
  return (
   <main>
    <section className="container">
      <h2>{people.length} Birthdays today</h2>
      <List people={people} />
      <button onClick={handleClear}>Clear all</button>
    </section>
   </main>
  )
}

export default App;
