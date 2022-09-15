import './index.css'

const Denomination = props => {
  const {denominationsList, withdrawVal} = props
  const {value} = denominationsList

  const onDec = () => {
    withdrawVal(value)
  }
  return (
    <li className="list-container" onClick={onDec}>
      <button className="button" type="button">
        {value}
      </button>
    </li>
  )
}

export default Denomination
