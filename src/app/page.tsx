"use client"
import { Tab } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import ClassNames from "classnames"


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




]

export default function Home() {
  return (

    <div className="h-full bg-[url('cameraBG.jpg')] bg-top bg-cover overflow-auto">



      <header className='fixed bg-stone-900 top-0 w-full z-10 flex justify-between items-center h-[90px] px-10'>

        {/* hamburger menu place holder
        <div className='text-transparent'>hm</div> */}
        <span className='uppercase text-lg font-medium'>Jose Fernandez | Photography Portfolio</span>

        <Link href="#"
          className='rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'>

          Get in contact

        </Link>

        
      </header>


      <main className='pt-[110px] overflow-auto'>



        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">



              {tabs.map(tab => (

                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (

                    <span className={ ClassNames ("uppercase text-lg",selected ? "text-white" : "text-stone-600")}
                    >{tab.display}
                    </span>

                  )}

                </Tab>



              ))}












            </Tab.List>
            <Tab.Panels className="h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
<Masonry breakpointCols= {2} className='flex gap-4' columnClassName=''>


<div id='box1' className='my-4'></div>
<div id='box2' className='my-4'></div>
<div id='box3' className='my-4'></div>
<div id='box4' className='my-4'></div>
<div id='box5' className='my-4'></div>

</Masonry>



              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>


      </main>
      <footer className='h-[90px] flex justify-center items-center uppercase text-lg font-medium'>
        <p>Jose Fernandez | Photography Portfolio</p>
      </footer>

    </div>
  )
}
