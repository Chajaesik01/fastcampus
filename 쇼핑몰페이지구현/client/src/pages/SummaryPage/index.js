import React, {useState} from 'react'
import { OrderContext } from '../../context/OrderContext'
import { useContext } from 'react'
const SummaryPage = ({ setStep }) => {

const [checked, setChecked] = useState(false)
const [orderDetails] = useContext(OrderContext);

const productArray = Array.from(orderDetails.products);
const productList = productArray.map((key, value) => (
    <li key={key}>
        {value} {key}
    </li>
));

const hasOptions = orderDetails.options.size > 0;
let optionsDisplay = null;

if(hasOptions){
    const optionsArray = Array.from(orderDetails.options.keys());
    const optionList = optionsArray.map((option, key) => (
        <li key={key}>{option}</li>
    ));optionsDisplay = <div>
        <h2>옵션 : {orderDetails.totals.options}</h2>
        <ul>{ optionList }</ul>
    </div>
}   

const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
}
  return (
    <div>
        <h1>주문 확인</h1>
        <h2>여행 상품: {orderDetails.totals.products}</h2>
        <ul>
            {productList}
        </ul>
        <form>
        <input 
            type="checkbox"
            checked={checked}
            id="confirm-checkbox"
            onChange={(e) => setChecked(e.target.checked)}
        />
        </form>
        {optionsDisplay}
        <form onSubmit= {handleSubmit}>
            <label htmlFor = "confirm-checkbox">
                주문하려는 것을 체크하셨나요?
            </label>
            <br />
            <button
                type="submit"
                disabled={!checked}>
                주문 확인
            </button>
        </form>
    </div>
  )
}

export default SummaryPage