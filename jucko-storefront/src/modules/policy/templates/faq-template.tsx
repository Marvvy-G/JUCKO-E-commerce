import React from 'react'
import { Heading } from '@medusajs/ui'
import { Text } from '@medusajs/ui'

export const FaqTemplate = () => {
  return (
    <div className="content-container flex flex-col justify-center items-center gap-y-8 max-w-4xl h-full w-full">
   <Heading level='h2' className="pt-6 flex flex-row text-3xl-regular"> Frequently Asked Questions</Heading>
   
   <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
        <div className='col-span-4'>
            <Text size="xlarge" weight="plus" family="sans">What is Jucko</Text>
            <p className="text-lg-regular text-ui-fg-base">
               Jucko is an e-commerce platform that offers a wide range of products including handmade crochet bags and shoes, snacks, pastries, intercontinental and Nigerian dishes, wigs, and natural fresh juices.
            </p>
              <br />
            <Text size="xlarge" weight="plus" family="sans">How can I contact customer support?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            You can reach our customer support team via email at contact@jucko.com or by phone at +(234)8025646472.
            </p>
                <br />
            <Text size="xlarge" weight="plus" family="sans">What payment methods do you accept?</Text>
            <p className="text-lg-regular text-ui-fg-base">
              We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express).
            </p>
        </div>
        <div className='col-span-2'>
        <img src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      </div>
      
      <Text className="pt-6 flex flex-row text-3xl-regular">Product-related Questions:</Text>
      <div>
        <div>
        <Text size="xlarge" weight="plus" family="sans">Are your crochet bags and shoes handmade?</Text>
            <p className="text-lg-regular text-ui-fg-base">
              Yes, all our crochet bags and shoes are handmade by skilled artisans using high-quality materials.
            </p>
                <br />
            <Text size="xlarge" weight="plus" family="sans">Can I customize the design of the crochet bags and shoes?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            At the moment, we do not offer customization services. However, we continuously update our product offerings, so stay tuned for any new options.
            </p>
                <br />
            <Text size="xlarge" weight="plus" family="sans">Do you offer refunds or exchanges for damaged or defective products?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            Yes, we have a hassle-free return policy. If you receive a damaged or defective product, please contact our customer support team within 14 days of receiving your order for assistance.
            </p>
                  <br />
            <Text size="xlarge" weight="plus" family="sans">How long does shipping take?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            Shipping times may vary depending on your location and the shipping method selected. Please refer to our shipping policy for more information.
            </p>
                  <br />
            <Text size="xlarge" weight="plus" family="sans">What is your return policy?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            We offer a 14-day return policy for eligible products. Please refer to our return policy for detailed instructions on how to initiate a return.
            </p>
                  <br />
            <Text size="xlarge" weight="plus" family="sans">Can I track my order?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            Yes, once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your shipment.
            </p>
                  <br />
            <Text size="xlarge" weight="plus" family="sans">Do you offer wholesale or bulk pricing?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            Yes, we offer wholesale pricing for bulk orders. Please contact our sales team via email for more information.
            </p>
                  <br />

            <Text size="xlarge" weight="plus" family="sans">Are your products eco-friendly?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            We strive to source eco-friendly materials and packaging whenever possible. However, please refer to the product descriptions for specific details about each item.
            </p>

                  <br />
            <Text size="xlarge" weight="plus" family="sans">Do you ship internationally?</Text>
            <p className="text-lg-regular text-ui-fg-base">
            Yes, we offer international shipping to select countries. Please refer to our shipping policy for a list of eligible countries and shipping rates.
            </p>
        </div>
      </div>

      <br />
      <br />
     
   </div>
   
  )
}

export default FaqTemplate