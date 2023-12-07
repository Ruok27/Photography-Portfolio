"use client"
import { Tab } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import ClassNames from "classnames"
import ocean1 from "../app/ocean1.jpg"
import ocean2 from "../app/ocean2.jpg"
import ocean3 from "../app/ocean3.jpg"
import ocean4 from "../app/ocean4.jpg"
import ocean5 from "../app/ocean5.jpg"

import bgImage from "../app/cameraBG.jpg"



// Use custom fonts a custom background image and custom logo 
// To publish changes to vercel app just go to left tab write message then ctrl enter. input password twice
const tabs = [

  {

    key: 'all',
    display: "All"

  },

  {

    key: 'oceans',
    display: "Oceans"

  },
  {

    key: 'forests',
    display: "Forests"

  }
];


const images = [
  ocean1, ocean2, ocean3, ocean4, ocean5

]


export default function Home() {
  return (

    <div className="h-full overflow-auto">

      <div className='fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t'></div>

<Image
                      className='fixed left-0 top-0'
                      src={bgImage}
                      priority={true}
                      alt="background-image"
                      placeholder='blur'

                    />


      <header className='fixed bg-stone-900 top-0 w-full z-30 flex justify-between items-center h-[90px] px-10'>

        {/* hamburger menu place holder
        <div className='text-transparent'>hm</div> */}
        <span className='uppercase text-lg font-medium'>Jose Fernandez | Photography Portfolio</span>

        <Link href="#"
          className='rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'>

          Get in contact

        </Link>


      </header>


      <main className='relative pt-[110px] overflow-auto z-20'>



        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">



              {tabs.map(tab => (

                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (

                    <span className={ClassNames("uppercase text-lg", selected ? "text-white" : "text-stone-600")}
                    >{tab.display}
                    </span>

                  )}

                </Tab>



              ))}












            </Tab.List>
            <Tab.Panels className="h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry breakpointCols={2} className='flex gap-4' columnClassName=''>

                  {images.map((image) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className='my-4'
                      placeholder='blur'
                    />
                  ))}

                  <Image src={ocean1} alt="picture" className='my-4' />
                  <Image src={ocean2} alt="picture" className='my-4' />
                  <Image src={ocean3} alt="picture" className='my-4' />
                  <Image src={ocean4} alt="picture" className='my-4' />
                  <Image src={ocean5} alt="picture" className='my-4' />



                </Masonry>



              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>


      </main>
      <footer className='relative h-[90px] z-20 flex justify-center items-center uppercase text-lg font-medium'>
        <p>Jose Fernandez | Photography Portfolio</p>
      </footer>

    </div>
  )
}
