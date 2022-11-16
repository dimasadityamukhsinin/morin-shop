import Image from 'next/image'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import FancyLink from '@/components/utils/fancyLink'
import { useEffect, useState } from 'react'
import { shopifyClient } from '@/helpers/shopify'
import MorinButtonGradient from '../utils/morinButtonGradient'

const CartDesktop = ({
  data,
  decQuantity,
  increQuantity,
  onCheckout,
  removeItem,
}) => {
  const subTotal = () => {
    let sub = 0
    data.forEach((item) => {
      sub += item.quantity * item.variant.price
    })
    return sub
  }

  useEffect(() => {
    subTotal()
  }, [])

  return (
    <>
      <table className="table-auto text-morin-blue max-w-5xl w-full mt-3">
        <thead className="border-b-2 border-morin-blue">
          <tr>
            <th className='text-left pl-[calc(128px+3.5rem)]'>
              <span className="font-medium">Product</span>
            </th>
            <th>
              <span className="font-medium">Quantity</span>
            </th>
            <th>
              <span className="font-medium">Price</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td
                className={`flex items-center pl-4 space-x-10 ${
                  index > 0 ? 'pb-6' : 'py-6'
                } w-full h-full`}
              >
                <div className="relative w-[128px] h-[128px]">
                  <Image
                    src={item.variant.image.src}
                    alt={item.variant.image.altText}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <span className="text-ctitleSmall font-nutmeg">
                    {item.title}
                  </span>
                  <span className="font-medium mt-1">{item.variant.title}</span>
                </div>
              </td>
              <td className={`px-8 ${index > 0 ? 'pb-6' : ''}`}>
                <div className="flex justify-between items-center mx-auto px-4 py-2 rounded-full border-2 border-morin-blue w-28">
                  <FancyLink
                    onClick={() => {
                      decQuantity(item.id)
                      subTotal()
                    }}
                  >
                    <Minus width={15} />
                  </FancyLink>
                  <input
                    className="w-full text-center font-medium pointer-events-none"
                    value={item.quantity}
                    readOnly
                  />
                  <FancyLink
                    onClick={() => {
                      increQuantity(item.id)
                      subTotal()
                    }}
                  >
                    <Plus width={18} height={18} />
                  </FancyLink>
                </div>
              </td>
              <td className={`text-center w-36 ${index > 0 ? 'pb-6' : ''}`}>
                <span className="font-medium text-morin-blue">
                  IDR {Intl.NumberFormat('en-US').format(item.variant.price)}
                  ,-
                </span>
              </td>
              <td className={`w-20 text-center ${index > 0 ? 'pb-6' : ''}`}>
                <FancyLink
                  onClick={() => removeItem(item.id)}
                  className="border-2 border-morin-blue p-1.5 rounded-full"
                >
                  <Trash />
                </FancyLink>
              </td>
            </tr>
          ))}
          <tr className="border-t-2 border-morin-blue">
            <td></td>
            <td className="text-center pt-3">
              <span className="font-semibold">Sub-Total</span>
            </td>
            <td className="text-center pt-3">
              <span className="font-semibold">
                IDR
                {` `}
                {Intl.NumberFormat('en-US').format(subTotal())}
                ,-
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <MorinButtonGradient className="mt-24" onClick={onCheckout}>
        Checkout
      </MorinButtonGradient>
    </>
  )
}

export default CartDesktop
