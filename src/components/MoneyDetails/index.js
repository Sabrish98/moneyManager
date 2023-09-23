// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpense} = props

  console.log(yourBalance)

  return (
    <div className="money-details-container">
      <div className="your-balance-container">
        <img
          className="img-balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="your-balance-text">Your Balance</p>
          <p data-testid="balanceAmount" className="your-balance-text">
            RS {yourBalance}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          className="img-balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="your-balance-text">Your Income</p>
          <p data-testid="incomeAmount" className="your-balance-text">
            RS {yourIncome}
          </p>
        </div>
      </div>

      <div className="your-expense-container">
        <img
          className="img-balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="your-balance-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="your-balance-text">
            RS {yourExpense}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
