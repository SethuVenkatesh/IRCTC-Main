import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Footer = () => {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#2c215d] pt-4 pb-4'>
            <div className='flex flex-col gap-y-4 text-white font-semibold py-2 px-4  jusify-center'>
                <p>
                    IRCTC Trains
                    <ChevronRightIcon/>
                </p>
                <p>
                    General Information
                    <ChevronRightIcon/>
                </p>
                <p>
                    Important Information
                    <ChevronRightIcon/>
                </p>
                <p>
                    Agents
                    <ChevronRightIcon/>
                </p>
                <p>
                    Enquires
                    <ChevronRightIcon/>
                </p>
            </div>
            <div className='flex flex-col gap-y-4 text-white font-semibold p-4  jusify-center'>
                <p>
                    How to
                    <ChevronRightIcon/>
                </p>
                <p>
                    IRCTC Official App 
                    <ChevronRightIcon/>
                </p>
                <p>
                    Advertise With Us
                    <ChevronRightIcon/>
                </p>
                <p>
                    Refund Rules
                    <ChevronRightIcon/>
                </p>
                <p>
                    Person With Disabilities
                    <ChevronRightIcon/>
                </p>
            </div>
            <div className='flex flex-col gap-y-4 text-white font-semibold  p-4  jusify-center'>
                <p>
                    IRCTC e-Wallet
                    <ChevronRightIcon/>
                </p>
                <p>
                    IRCTC Loyalty Progran
                    <ChevronRightIcon/>
                </p>
                <p>
                    IRCTC i-Pay Payment Gateway
                    <ChevronRightIcon/>
                </p>
                <p>
                    IRCTC ZOne
                    <ChevronRightIcon/>
                </p>
            </div>
            <div className='flex flex-col gap-y-4 text-white font-semibold p-2  jusify-center'>
                <p>
                    For Newly Migrated Agents
                    <ChevronRightIcon/>
                </p>
                <p>
                    Mobile Zone
                    <ChevronRightIcon/>
                </p>
                <p>
                    Policies
                    <ChevronRightIcon/>
                </p>
                <p>
                    Ask Disha Chatbot
                    <ChevronRightIcon/>
                </p>
                <p>
                    About us
                    <ChevronRightIcon/>
                </p>
            </div>

        </div>
        <div className='flex justify-between'>
            <img src='https://www.irctc.co.in/nget/assets/images/security.png' alt='not found'/>
            <div className='text-right'>
                <p>Copyright Â© 2023 - www.sethu.in. All Rights Reserved</p>
                <p>Designed and Hosted by </p>
                <p className='underline underline-offset-1 text-sky-900'>sethuvenkateshvk@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer