import {Component} from 'react'
import Denomination from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 100000}

  withdrawVal = value => {
    const {balance} = this.state
    const newBalance = balance - value
    if (newBalance > 0) {
      this.setState({balance: newBalance})
    } else {
      this.setState({balance: 0})
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="name-part">
            <div className="logo-container">
              <p className="name-paragraph">RR</p>
            </div>
            <h1 className="name-heading">Rajashree Roy</h1>
          </div>
          <div className="balance-part">
            <p className="your-balance">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="balance-inr">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-item-container">
            {denominationsList.map(each => (
              <Denomination
                withdrawVal={this.withdrawVal}
                key={each.id}
                denominationsList={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
