/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Order from '../models/Order'
import mongoose from 'mongoose'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import DownloadPage from '../components/DownloadPage'

const MyOrder = ({order}) => {
  const router = useRouter()
  useEffect(()=>{
    if(router.query.cleaCart == 1){
      clearCart()
    }
  })
  return (
    <div className='min-h-screen '>
      <Head>
        <title>Payment Receipt- PadhoG</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div id='pagetodownload' className='px-8 py-8'>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Student name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{order.name}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Id</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{order.email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order Id</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">#{order.orderId}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Mobile no.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{order.phone}</dd>
          </div>
        
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            ₹ {order.amount}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
          <p>Your Payment Status is: <span className='font-semibold text-slate-700'>{order.status}</span></p>
          <p>Thank you for using PadhoG! Your payment has been recieved and is currently being processed by our team. Please allow up to 1 hour for verification and confirmation.We appreciate your patience and thank you for choosing PadhoG!</p>
          
        </dl>
      </div>
    </div>
    <DownloadPage rootElementId="pagetodownload" downloadFileName="PadhoG Pass Entry"/>
</div>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let order = await Order.findById(context.query.id)



  return {
    props: { order: JSON.parse(JSON.stringify(order)),  }, // will be passed to the page component as props
  }
}

export default MyOrder