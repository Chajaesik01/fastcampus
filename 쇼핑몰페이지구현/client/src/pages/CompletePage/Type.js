import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from './ErrorBanner';
import { OrderContext } from '../../context/OrderContext';

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const orderContext = useContext(OrderContext);
    const orderData = orderContext ? orderContext[0] : null;
    const upDataeItemCount = orderContext ? orderContext[1] : null;

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (type) => {
        try {
            const response = await axios.get(`http://localhost:4000/${type}`);
            if (Array.isArray(response.data)) {
                setItems(response.data);
            } else {
                throw new Error('응답 데이터가 배열이 아닙니다.');
            }
        } catch (error) {
            setError(true);
            console.log(error);
        }    
    };

    const ItemComponent = orderType === 'products' ? Products : Options;

    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    if (error) {
        return (
            <ErrorBanner message="에러가 발생했습니다" />
        );
    }

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격: </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: orderType === 'options' ? "column" : "row"
                }}
            >
                {optionItems}
            </div>
        </div>
    );
};

export default Type;
