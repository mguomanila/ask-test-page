import React from 'react'
import './App.scss'

function App() {
  const [totalBalance, setTotalBalance] = React.useState(0)

  return (
    <div className="App">
      <div className="App-header">
        <p>Wallets with ASK</p>
        <p>
          Track and manage your ASK holdings across all of the wallets that you use.
        </p>
      </div>
      <section className="main">
        <div>
          <p>ASK</p>
          <p>Total Balance:</p>
          {totalBalance}
        </div>
        <form>
          <p>Welcome to ASK Wallet Page.</p>
          <p>Please enter a wallet address:</p>
          <input name="Wallet"/>
        </form>
      </section>
      <div></div>
    </div>
  );
}

export default App
