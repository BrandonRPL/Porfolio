import React, {useState} from 'react'
import img from '../Resourses/images/Final-Fantasy-XV-PS4-Wallpapers-01.jpg'

const imagen = '../Resourses/images/images.png'

const CardProject = () => {
  return (
    
<section className="text-gray-600 body-font pt-6">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRI61N71izMOZCqb-vwf5GmAcGst97n8XLvAPWhjN2w&s"/>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">React project showing the views of the best YouTuber developers according to my taste</p>
            <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRI61N71izMOZCqb-vwf5GmAcGst97n8XLvAPWhjN2w&s"/>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">React project displaying an image and a phrase fetched from an external API in JSON.</p>
            <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default CardProject
