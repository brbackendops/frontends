import { useState } from 'react'
import Form from './components/Form';
import Board from './components/Board';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (

    <div className="App">
      <header className="head">
        <div className="border-in">
          <div className="header">
            <p>🌏</p>
              <h1>Plans</h1>
            <p>🌎</p>
          </div>
        </div>
      </header>
      
      <main>
          <Form/>
          <Board/>
      </main>

      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default App
