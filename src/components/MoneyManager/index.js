import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistory = []

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    incomeType: '',
    yourBalance: 0,
    yourIncome: 0,
    yourExpense: 0,
    incomExpensesHistory: initialHistory,
  }

  onAddingValue = event => {
    event.preventDefault()
    const {title, amount, incomeType} = this.state

    const newAmountDetails = {
      id: uuidv4(),
      title,
      amount,
      incomeType,
    }

    this.setState(preState => ({
      incomExpensesHistory: [
        ...preState.incomExpensesHistory,
        newAmountDetails,
      ],
      title: '',
      amount: '',
      incomeType: '',
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onTypeOfIncome = event => {
    this.setState({incomeType: event.target.value})
  }

  render() {
    const {
      yourBalance,
      yourIncome,
      yourExpense,
      title,
      amount,
      incomeType,
      incomExpensesHistory,
    } = this.state

    console.log(incomeType)

    return (
      <div className="bg-container">
        <div className="name-card">
          <h1 className="app-heading">Hello, Richard</h1>
          <p className="card-para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          yourBalance={yourBalance}
          yourIncome={yourIncome}
          yourExpense={yourExpense}
        />

        <div className="bottm-container">
          <form onSubmit={this.onAddingValue} className="form-style">
            <h1 className="add-transaction-style">Add Transaction</h1>
            <div className="input-title-contaniner">
              <label className="label-style" htmlFor="name">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.onTitleChange}
                placeholder="TITLE"
                className="input-box-style"
                type="text"
                id="name"
              />
            </div>

            <div className="input-title-contaniner">
              <label className="label-style" htmlFor="amount">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeAmount}
                value={amount}
                placeholder="AMOUNT"
                className="input-box-style"
                type="text"
                id="amount"
              />
            </div>

            <div className="input-title-contaniner">
              <label className="label-style" htmlFor="type">
                TYPE
              </label>
              <select
                onChange={this.onTypeOfIncome}
                className="input-box-style"
                type=""
                id="type"
              >
                <option value="Income" className="option-style">
                  Income
                </option>
                <option value="Expenses" className="option-style">
                  Expenses
                </option>
              </select>
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="each-type-container">
              <p className="details">Title</p>
              <p className="details">Amount</p>
              <p className="details">Type</p>
            </div>
            <ul>
              {incomExpensesHistory.map(each => (
                <TransactionItem each={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
