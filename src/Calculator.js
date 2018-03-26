import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: 0,
      income: 0,
      storage: 0,
      misc: 0,
      tax: 0,
      insurance: 0,
      electricity: 0,
      water: 0,
      sewer: 0,
      garbage: 0,
      gas: 0,
      hoa: 0,
      lawn: 0,
      snow: 0,
      repairs: 0,
      capex: 0,
      vacancy: 0,
      propertymanagement: 0,
      mortgage: 0,
      downpayment: 0,
      closing: 0,
      Rehab: 0,
      totalIncome: 0,
      totalExpenses: 0,
      cashFlow: 0
    }
    this._handlePropValueChange = this._handlePropValueChange.bind(this);
    this._handleIncomeChange = this._handleIncomeChange.bind(this);
    this._handleStorageChange = this._handleStorageChange.bind(this);
    this._handleMiscChange = this._handleMiscChange.bind(this);
    this._handleTaxChange = this._handleTaxChange.bind(this);
    this._handleInsuranceChange = this._handleInsuranceChange.bind(this);
    this._handleelectricityChange = this._handleelectricityChange.bind(this);
    this._handleWaterChange = this._handleWaterChange.bind(this);
    this._handleSewerChange = this._handleSewerChange.bind(this);
    this._handleGarbageChange = this._handleGarbageChange.bind(this);
    this._handleGasChange = this._handleGasChange.bind(this);
    this._handleHOAChange = this._handleHOAChange.bind(this);
    this._handleLawnChange = this._handleLawnChange.bind(this);
    this._handleSnowChange = this._handleSnowChange.bind(this);
    this._handleRepairsChange = this._handleRepairsChange.bind(this);
    this._handleCapExChange = this._handleCapExChange.bind(this);
    this._handleVacancyChange = this._handleVacancyChange.bind(this);
    this._handlePropertyManagementChange = this._handlePropertyManagementChange.bind(this);
    this._handleMortgageChange = this._handleMortgageChange.bind(this);
    this._handleDownPaymentChange = this._handleDownPaymentChange.bind(this);
    this._handleClosingChange = this._handleClosingChange.bind(this);
    this._handleRehabChange = this._handleRehabChange.bind(this);
  }

  _handlePropValueChange = (e) => {
    this.setState({propValue: Number(e.target.value)});
  }
  _handleIncomeChange = (e) => {
    this.setState({income: Number(e.target.value)});
  }
  _handleStorageChange = (e) => {
    this.setState({storage: Number(e.target.value)});
  }
  _handleMiscChange = (e) => {
    this.setState({misc: Number(e.target.value)});
  }
  _handleTaxChange = (e) => {
    this.setState({tax: Number(e.target.value)});
  }
  _handleInsuranceChange = (e) => {
    this.setState({insurance: Number(e.target.value)});
  }
  _handleelectricityChange = (e) => {
    this.setState({electricity: Number(e.target.value)});
  }
  _handleWaterChange = (e) => {
    this.setState({water: Number(e.target.value)});
  }
  _handleSewerChange = (e) => {
    this.setState({sewer: Number(e.target.value)});
  }
  _handleGarbageChange = (e) => {
    this.setState({garbage: Number(e.target.value)});
  }
  _handleGasChange = (e) => {
    this.setState({gas: Number(e.target.value)});
  }
  _handleHOAChange = (e) => {
    this.setState({hoa: Number(e.target.value)});
  }
  _handleLawnChange = (e) => {
    this.setState({lawn: Number(e.target.value)});
  }
  _handleSnowChange = (e) => {
    this.setState({snow: Number(e.target.value)});
  }
  _handleRepairsChange = (e) => {
    this.setState({repairs: Number(e.target.value)});
  }
  _handleCapExChange = (e) => {
    this.setState({capex: Number(e.target.value)});
  }
  _handleVacancyChange = (e) => {
    this.setState({vacancy: Number(e.target.value)});
  }
  _handlePropertyManagementChange = (e) => {
    this.setState({propertymanagement: Number(e.target.value)});
  }
  _handleMortgageChange = (e) => {
    this.setState({mortgage: Number(e.target.value)});
  }
  _handleDownPaymentChange = (e) => {
    this.setState({downpayment: Number(e.target.value)});
  }
  _handleClosingChange = (e) => {
    this.setState({closing: Number(e.target.value)});
  }
  _handleRehabChange = (e) => {
    this.setState({rehab: Number(e.target.value)});
  }

  _handleCalculateClick= ()=> {
    let TotalIncome = this.state.income + this.state.storage + this.state.misc;
    let TotalExpenses = this.state.tax + this.state.insurance + this.state.electricity +
      this.state.water + this.state.sewer + this.state.garbage + this.state.gas +
      this.state.hoa + this.state.lawn + this.state.snow + this.state.vacancy + this.state.repairs +
      this.state.capex + this.state.propertymanagement + this.state.mortgage;

    let CashFlow = TotalIncome - TotalExpenses;
    this.setState({totalIncome: TotalIncome, totalExpenses: TotalExpenses, cashFlow: CashFlow});

    console.log('CLICKED BITCH', this.state.totalIncome);
  }

  render() {
    const style = {
      margin: 12,
    };

    return (
      <div className="Calculator">
        <h1 className="App-title">Investment Property 4 Square Analysis</h1>

        <div>
          <h4>Income</h4>
          <TextField className='textField' hintText='example: 156000' floatingLabelText='Property Value' onChange={this._handlePropValueChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Rental Income' onChange={this._handleIncomeChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Storage' onChange={this._handleStorageChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='misc' onChange={this._handleMiscChange}/>
        </div>
        <div>
          <h4>Expenses</h4>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Tax' onChange={this._handleTaxChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Insurance' onChange={this._handleInsuranceChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='electricity' onChange={this._handleelectricityChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Water' onChange={this._handleWaterChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Sewer' onChange={this._handleSewerChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Garbage' onChange={this._handleGarbageChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Gas' onChange={this._handleGasChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='HOA' onChange={this._handleHOAChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Lawn Care' onChange={this._handleLawnChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Snow Care' onChange={this._handleSnowChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Repairs' onChange={this._handleRepairsChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='CapEx' onChange={this._handleCapExChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Property Management' onChange={this._handlePropertyManagementChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Mortgage' onChange={this._handleMortgageChange}/>
        </div>
        <div>
          <h4>Cash investments</h4>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Down Payment %' onChange={this._handleDownPaymentChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Closing Costs' onChange={this._handleClosingChange}/>
          <TextField className='textField' hintText='example: 0' floatingLabelText='Repair/Rehab' onChange={this._handleRehabChange}/>
        </div>
        <RaisedButton label="Calculate" primary={true} style={style} onClick={this._handleCalculateClick}/>
        <div>
          <h2>Results</h2>
          <h3>Total Income:  {this.state.totalIncome}</h3>
          <h3>Total Expenses:  {this.state.totalExpenses}</h3>
          <h3>Cash Flow:  {this.state.cashFlow}</h3>
          <h3>Your Mortgage Payment</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
