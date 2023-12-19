"use client"
import { Tab } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import ClassNames from "classnames"

import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import ocean1 from "../app/ocean1.jpg"
import ocean2 from "../app/ocean2.jpg"
import ocean3 from "../app/ocean3.jpg"
import ocean4 from "../app/ocean4.jpg"
import ocean5 from "../app/ocean5.jpg"
import ocean6 from "../app/ocean6.jpg"

import type { LightGallery } from 'lightgallery/lightgallery';
//import { LightGallery } from 'lightgallery/lightgallery';


import bgImage from "../app/cameraBG.jpg"
import { useRef } from 'react';



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
  ocean1, ocean2, ocean3, ocean4, ocean5, ocean6

]


export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null)



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
                  {/* Add background color here on image so image doesnt mesh with pictures */}
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className='my-4 hover:opacity-70 cursor-pointer'
                      placeholder='blur'
                      onClick={() => {

                        lightboxRef.current?.openGallery(idx)

                      }}
                    />
                  ))}


                </Masonry>

                <LightGalleryComponent
                  onInit={(ref) => {

                    if (ref) {


                      lightboxRef.current = ref.instance


                    }



                  }}

                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map(image => ({


                    src: image.src,
                    thumb: image.src,



                  }))}            >




                </LightGalleryComponent>

              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>


      </main >
      <footer className='relative h-[90px] z-20 flex justify-center items-center uppercase text-lg font-medium'>
        <p>Jose Fernandez | Photography Portfolio</p>
      </footer>

    </div >
  )
}
