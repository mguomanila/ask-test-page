import React from 'react'
import { Card, } from 'antd'
import Address from './components/Address'
import './App.scss'

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

function App() {
  const [totalBalance, setTotalBalance] = React.useState(0)
  const [address, setAddress] = React.useState('')
  const input = React.useRef<HTMLInputElement>()

  async function addressHandler(_e: any) {
    setAddress(input.current.value)
    const url = `${process.env.API_URL}/${input.current.value}/balance?chain=eth`
    console.log(`url:${url}`)
    const resp = await fetch(
      url,
      {
        headers: {
          accept: 'application/json',
          'X-API-Key': process.env.X_API_KEY
        }
      }
    )
    console.log(resp)
    setTotalBalance((resp as any).balance)
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
      <Card style={styles.card}>
        <Address address={address} size={6} copyable />
      </Card>
    </div>
  )
}

export default App
