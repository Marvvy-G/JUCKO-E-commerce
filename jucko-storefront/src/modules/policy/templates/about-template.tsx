import React from 'react'
import { Heading } from '@medusajs/ui'

export const AboutTemplate = () => {
  return (
    <div className="content-container flex flex-col justify-center items-center gap-y-8 max-w-4xl h-full w-full">
   <Heading level='h2' className="pt-6 flex flex-row text-3xl-regular"> Welcome to Jucko</Heading>
   
   <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className='col-span-3'>
            <h1 className="text-2xl-semi text-ui-fg-base">Hand Made By Jucko</h1>
            <p className="text-lg-regular text-ui-fg-base">
           Handcrafted Elegance!... Indulge in the artistry of handcrafted crochet bags and shoes that speak volumes about sophistication and style. Our exquisite collection blends intricate designs with premium materials, ensuring each piece is a true testament to timeless elegance.
            </p>
        </div>
        <div className='col-span-2'>
        <img src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className='col-span-3'>
            <h1 className="text-2xl-semi text-ui-fg-base">Culinary Delights</h1>
            <p className="text-lg-regular text-ui-fg-base">
            Embark on a culinary journey filled with delectable treats from around the world. From tantalizing snacks to mouthwatering pastries and a rich array of intercontinental and Nigerian dishes, our menu promises to delight your taste buds and satisfy your cravings with every bite.
            </p>
        </div>
        <div className='col-span-2'>
        <img src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className='col-span-3'>
            <h1 className="text-2xl-semi text-ui-fg-base">Wig Wonderland</h1>
            <p className="text-lg-regular text-ui-fg-base">
            Discover a world of endless possibilities with our stunning selection of wigs. Whether you're looking to switch up your style or add a touch of glamour to your everyday look, our premium-quality wigs are designed to enhance your natural beauty and boost your confidence.
            </p>
        </div>
        <div className='col-span-2'>
        <img src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className='col-span-3'>
        <h1 className="text-2xl-semi text-ui-fg-base">Fresh Juice Oasis</h1>
            <p className="text-lg-regular text-ui-fg-base">
            Quench your thirst with our refreshing assortment of natural fresh juices, with our star sugarcane juice stealing the show. Bursting with flavor and brimming with nutrients, our juices are the perfect way to rejuvenate your body and invigorate your senses, one sip at a time.
            </p>
        </div>
        <div className='col-span-2'>
        <img src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>

      <br />
      <br />
     
   </div>
   
  )
}

export default AboutTemplate