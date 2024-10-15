import axios from 'axios'
import React, { useEffect } from 'react'
import { BaseURL } from '../../api/BaseURL';

const PaymentTest = () => {
  const token = localStorage.getItem('Token_Value');
  const getProjects = () => {
    axios.post(BaseURL+`payment/checkout`,{
      "order_cart": [
      // {
      //   "name": "course name",
      //   "amount_cents": "240",
      //   "description": "web"
      // }
    ],
     "billing_data": {
      "apartment": "#",
      "email": "claudette09@exa.com",
      "floor": "42",
      "first_name": "Clifford",
      "street": "Ethan Land",
      "building": "8028",
      "phone_number": "+86(8)9135210487",
      "city": "Jaskolskiburgh",
      "country": "CR",
      "last_name": "Nicolas"
    },
    "amount_cents": "134.4"
  }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log(response.data);
        console.log(token);
    }).catch((error) => {
        console.log(error);
        setError(error.message)
        console.log(token);
    })
  }
  useEffect(()=>{})
    getProjects();

  return (
    <>
      <div><button onClick={getProjects()}>fetch</button></div>
    </>
  )
}

export default PaymentTest