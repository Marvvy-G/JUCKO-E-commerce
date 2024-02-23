import React from 'react'
import { Heading } from '@medusajs/ui'
export const ReturnsRefundsTemplate = () => {
  return (
    <div className="content-container flex flex-col justify-center items-center gap-y-8 max-w-4xl h-full w-full">
        <div className="MsoNormal" style={{ lineHeight: '1' }}>
          <br />
        </div>  
        <Heading level='h2' className="pt-6 flex flex-row text-3xl-regular"> Return and Refund Policy</Heading>
        
        <div className="MsoNormal" data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
        <p>
           Thank you for shopping at <b>JUCKO GLOBAL</b>
         <br />
         We are committed to ensuring your satisfaction with every purchase. If you are not entirely satisfied with your purchase, we're here to help.         </p>
        </div>
        <div   style={{ textAlign: 'left' }}>
        
      
        <div data-custom-class="heading_1">
          <b>Returns</b>
          <p>
             
            You have 7 calendar days to return an item from the date you received it.
            
            To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
            
            Your item needs to have the receipt or proof of purchase.
          </p>
        </div>
        <div data-custom-class="heading_1">
          <b>Refunds</b>
          <p>
             
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
    
          If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
          </p>
        </div>
        <div data-custom-class="heading_1">
          <b>Shipping</b>
          <p>   
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
        </div>
    
        <div data-custom-class="heading_1">
          <b>Contact Us</b>
          <p>   
          If you have any questions on how to return your item to us, contact us via email at contact@jucko.com.
          </p>
        </div>
        </div>
        <div className="MsoNormal" style={{ lineHeight: '1' }}>
          <br />
        </div>
        </div>
  )
}
