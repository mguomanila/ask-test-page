import React from 'react'
import { useMoralis, useNFTBalances } from 'react-moralis'
import { Card, Skeleton } from 'antd'
import './App.scss'

const { Meta } = Card

function App() {
  const { data: NFTBalances } = useNFTBalances();
  const [totalBalance, setTotalBalance] = React.useState(0)

  return (
    <div className="App">
      <div className="App-header">
        <p>Wallets with ASK</p>
        <p>
          Track and manage your ASK holdings across all of the wallets that you use.
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
        <input name="Wallet"/>
      </Card>
      <Skeleton>
      </Skeleton>
    </div>
  );
}

export default App
