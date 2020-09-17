import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState('');
  const [tip, setTip] = useState(0);

  const calculate = e => {
    e.preventDefault();

    // fetch("http://localhost:9000/api/v1/calculatetip", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ "amount": parseInt(amount), "tip": parseInt(percentage) })
    // }).then(async res => {
    //   await console.log(res);
    //   return await res.json()
    // }).then(data => {
    //   setTip(data.toBePayed)
    // })
  }

  return (
    <div className="form">
      <div className="form__container">
        <form onSubmit={calculate}>
          <h2>Tip Calculator</h2>
          {/* amount */}
          <p>Amount</p>
          <input type="text" value={amount} placeholder="Enter the Amount" onChange={e => setAmount(e.target.value)} /><br />
          {/* percentage */}
          <p>Tip Percentage</p>
          <input type="text" value={percentage} placeholder="Enter the Percentage" onChange={e => setPercentage(e.target.value)} /><br />
          <input type="submit" value="Send Tip" />
          {/* output */}
          <h1>Total Tip Earned: {tip} ₹</h1>
        </form>
      </div>
    </div>
  );
}

export default Form;
