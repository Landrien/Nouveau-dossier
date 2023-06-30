import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './ProductCard.css'

const ModifyProductCards = ({ data }) => {
  const [show, setshow] = useState(false)
  const [count, setCount] = useState(1)

  // const getproductid = () => {
  //   alert(data.id)
  // }

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productdata = data
    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
      if (itemincart) {
        cart = cart.map(item => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else {
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else {
      cart = [{
        productdata,
        quantity: count
      }]

      // console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    // setreloadnavbar(!reloadnavbar)
    window.location.reload()
    // toast.success('Item added to cart')

  }
  return (
    <div className='product'>
      <div className='s1'>
        <img src={data.ProductImage[0].image} alt={'no img'} />
      </div>
      <div className='s2'>
        <h3>
          $ {
            data.ProductPrice - (data.ProductPrice * data.ProductDiscount / 100)
          }
          <span>${data.ProductPrice}</span>
        </h3>
        <p>{
          data.ProductName
        }</p>
      </div>
      <div className='s3'>
        <p>{data.counttype}</p>
      </div>
      {
        show ?
          <div className='addbtn'>
            <div className='qty'>
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1)
                  }
                }}
              >-</button>
              <p>{count}</p>
              <button
                onClick={() => setCount(count + 1)}
              >+</button>
            </div>
            <button className='addtocart'
              onClick={() => {
                setshow(false)
                // setCount(1)
                addtocart()
              }}
            >
              Ajouter au panier
            </button>
          </div>
          :
          <div className='addbtn'>
            <Link
              to={`/product/${data.id}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" width="50%" height="100%">
                <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/>
                <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/>
              </svg>

            </Link>


            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m23,4h-6v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.644l1.703,15.331c.169,1.521,1.451,2.669,2.982,2.669h9.304c1.531,0,2.813-1.147,2.981-2.669l1.703-15.331h1.682v-2Zm-14-2h6v2h-6v-2Zm8.626,19.11c-.056.507-.483.89-.994.89H7.329c-.51,0-.938-.383-.994-.89l-1.679-15.11h14.65l-1.679,15.11Zm-9.583-4.567l2.543-2.543-2.543-2.543,1.414-1.414,2.543,2.543,2.543-2.543,1.414,1.414-2.543,2.543,2.543,2.543-1.414,1.414-2.543-2.543-2.543,2.543-1.414-1.414Z"/>
</svg>

          </div>
      }
    </div>
  )
}

export default ModifyProductCards