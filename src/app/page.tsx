"use client"
import { Tab } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link'


// Use custom fonts a custom background image and custom logo 

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

    <div className="flex flex-col h-full bg-[url('cameraBG.jpg')] bg-top bg-cover">



      <header className='flex justify-between items-center h-[90px] px-6'>

        {/* hamburger menu place holder
        <div className='text-transparent'>hm</div> */}
        <div>Jose Fernandez | Photography Portfolio</div>

        <Link href="#"
          className='rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'>

          Get in contact

        </Link>
      </header>


      <main className='grow'>



        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">



              {tabs.map(tab => (

                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (

                    <span className={selected ? "text-white" : "text-stone-600"}
                    >{tab.display}
                    </span>

                  )}

                </Tab>



              ))}












            </Tab.List>
            <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>All Photos</Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>


      </main>
      <footer className='h-[60px] flex justify-center items-center'>
        <p>Jose Fernandez | Photography Portfolio</p>
      </footer>

    </div>
  )
}
