import React, { useContext } from 'react';
import Type from '../CompletePage/Type';
import { OrderContext } from '../../context/OrderContext';

const OrderPage = ({ setStep }) => {
  const orderContext = useContext(OrderContext);
  
  // orderContext가 유효한지 확인하고, 올바른 구조로 데이터를 추출
  const orderData = orderContext && orderContext[0] ? orderContext[0] : null;

  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ width: '50%' }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: '50%' }}>
          <h2>Total Price: {orderData && orderData.totals ? orderData.totals.total : 0}</h2>
          <button onClick={() => setStep()}>
            주문
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
