import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 // Last two digits represent cents
  const publishableKey = 'pk_test_51Gy1KELcqXfRWKTawIns0FNYG6pa8FQKGAdaS9MODw2F0Uf5utplFTPegY0W25M1T6nan3ekvevVfYhEhMaKhInu00lFOftvsH'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton