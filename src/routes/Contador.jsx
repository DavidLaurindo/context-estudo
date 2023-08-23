import React, { useState } from 'react';
import ContadorContext from '../context/ContadorContext';
import BotaoContador from '../components/BotaoContador';

function App() {
const [total, setTotal] = useState(0)

  return (
    <ContadorContext.Provider value={[total, setTotal]}>
      <div>
        <p>App.js: { total }</p>
        <p>Learning context</p>
        <BotaoContador />
      </div>
    </ContadorContext.Provider>
  );
}

export default App;