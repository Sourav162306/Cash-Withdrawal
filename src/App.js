import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 100,
  },
  {
    id: 2,
    value: 200,
  },
  {
    id: 3,
    value: 500,
  },
  {
    id: 4,
    value: 2000,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App
