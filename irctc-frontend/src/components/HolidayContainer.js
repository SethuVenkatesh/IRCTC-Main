import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const HolidayContainer = () => {
  return (
    <div className='mb-2'>
        <h2 className='text-gray-900 text-center uppercase font-bold text-2xl mt-8 mb-8'>holidays</h2>
        <div className='flex flex-wrap gap-x-4'>
            <div className='w-1/4 m-4 shadow border rounded-lg border-gray-300'>
                <img src='https://www.irctc.co.in/nget/assets/images/exterior.jpg' className='object-cover w-full'></img>
                <div className='p-4'>
                    <p className='text-xl capitalize mb-2 font-bold '>Maharajas' Express</p>
                    <p className='text-sm text-gray-800 mb-2 leading-6 tracking-wide leading-6 tracking-wide '>
                        Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years
                    </p>
                    <p>
                        Read More
                        <ArrowRightAltIcon/>
                    </p>
                </div>
            </div>
            <div className='w-1/4 m-4 shadow border rounded-lg border-gray-300'>
                <img src='https://www.irctc.co.in/nget/assets/images/Thailand.jpg' className='object-cover w-full'></img>
                <div className='p-4'>
                    <p className='text-xl capitalize mb-2 font-bold'>International Packages</p>
                    <p className='text-sm text-gray-800 mb-2 leading-6 tracking-wide leading-6 tracking-wide'>
                        Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.                    </p>
                    <p>
                        Read More
                        <ArrowRightAltIcon/>
                    </p>
                </div>
            </div>
            <div className='w-1/4 m-4 shadow border rounded-lg border-gray-300'>
                <img src='	https://www.irctc.co.in/nget/assets/images/Kashmir.jpg' className='object-cover w-full'></img>
                <div className='p-4'>
                    <p className='text-xl capitalize mb-2 font-bold '>Domestic Air Packages</p>
                    <p className='text-sm text-gray-800 mb-2 leading-6 tracking-wide leading-6 tracking-wide'>
                        Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!</p>
                    <p>
                        Read More
                        <ArrowRightAltIcon/>
                    </p>
                </div>
            </div>
            <div className='w-1/4 m-4 shadow border rounded-lg border-gray-300'>
                <img src='	https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg' className='object-cover w-full'></img>
                <div className='p-4'>
                    <p className='text-xl capitalize mb-2 font-bold'>Bharat Gaurav Tourist Train</p>
                    <p className='text-sm text-gray-800 mb-2 leading-6 tracking-wide leading-6 tracking-wide'>
                        IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.                    </p>
                    <p>
                        Read More
                        <ArrowRightAltIcon/>
                    </p>
                </div>
            </div>
            <div className='w-1/4 m-4 shadow border rounded-lg border-gray-300'>
                <img src='https://www.irctc.co.in/nget/assets/images/Manali.jpg' className='object-cover w-full'></img>
                <div className='p-4'>
                    <p className='text-xl capitalize mb-2 font-bold'>Rail Tour Packages</p>
                    <p className='text-sm text-gray-800 mb-2 leading-6 tracking-wide leading-6 tracking-wide'>
                        IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.                    </p>
                    <p>
                        Read More
                        <ArrowRightAltIcon/>
                    </p>
                </div>
            </div>
        </div>
        <div className='mt-4 bg-gradient-to-l from-[#9b4b90] to-[#2c215d] p-4 items-center justify-around capitalize flex  '>
            <span className='text-white'>Get Connected with us on social networks</span>
            <div className='flex gap-x-2 float-right'>
                <div className='p-2 bg-[#1877F2] rounded-full text-white'>
                    <FacebookIcon />
                </div>
                <div className='p-2 bg-[#25D366] rounded-full text-white'>
                    <WhatsAppIcon />
                </div>
                <div className='p-2 bg-[#CD201F] rounded-full text-white'>
                    <YouTubeIcon />
                </div>
                <div className='p-2 bg-[#1DA1F2] rounded-full text-white'>
                    <TwitterIcon />
                </div>
                <div className='p-2 bg-[#E4405F] rounded-full text-white'>
                    <InstagramIcon />
                </div>
                <div className='p-2 bg-[#229ED9] rounded-full text-white'>
                    <TelegramIcon />
                </div>
                <div className='p-2 bg-[#BD081C] rounded-full text-white'>
                    <PinterestIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HolidayContainer