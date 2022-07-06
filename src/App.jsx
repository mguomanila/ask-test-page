import React from 'react'
import { Card, } from 'antd'
import Address from './components/Address'
import './App.scss'

function App() {
  const [totalBalance, setTotalBalance] = React.useState(0)
  const [address, setAddress] = React.useState('')
  const input = React.useRef()

  function addressHandler(e) {
    setAddress(input.current.value)
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Wallets with ASK</p>
        <p>
          Track and manage your ASK holdings across all of the wallets that you
          use.
        </p>
      </div>
      <Card>
        <p>ASK</p>
        <p>Total Balance:</p>
        {totalBalance}
      </Card>
      <Card>
        <p>Welcome to ASK Wallet Page.</p>
        <p>Please enter a wallet address:</p>
        <input
          name="Wallet"
          ref={input}
          value={address}
          onChange={addressHandler}
        />
      </Card>
      <Card>
        <Address address={address} />
      </Card>
    </div>
  )
}

export default App
