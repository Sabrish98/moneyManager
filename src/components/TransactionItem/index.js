// Write your code here
import './index.css'

const TransactionItem = props => {
  const {each} = props
  const {id, title, amount, incomeType} = each
  return (
    <div className="">
      <li className="list-style item-container">
        <h1>{title}</h1>
        <h1>{amount}</h1>
        <h1>{incomeType}</h1>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
        <div>
          <hr />
        </div>
      </li>
    </div>
  )
}

export default TransactionItem
