import React, { useEffect, useState } from 'react'
import api from '../axios'
import Toaster from './common/Toastifier'

const Tab1=({registerDetails,setRegisterDetails})=>{  
  
        const handleChange=(e)=>{
            setRegisterDetails({...registerDetails,[e.target.name]:e.target.value})
        }
        return (
            <div className='flex flex-col gap-y-2 '>
                <input
                    type="text"
                    className="w-3/4 border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="User Name"
                    value={registerDetails.userName}
                    name='userName'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="w-3/4 border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Password"
                    value={registerDetails.password}
                    name='password'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="w-3/4 border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Confirm Password"
                    value={registerDetails.confirmPassword}
                    name='confirmPassword'
                    onChange={handleChange}
                />

                <select name='preferedLanguage' value={registerDetails.preferedLanguage} onChange={handleChange} className='w-3/4 border border-gray-300 py-2 px-3 text-blue-900'>
                    <option value="" disabled>Select Prefered Language</option>
                    <option value="english">English</option>
                    <option value='hindi'>Hindi</option>
                </select>

                <select name='secretQuestion' value={registerDetails.secretQuestion} onChange={handleChange} className='w-3/4 border border-gray-300 py-2 px-3 text-blue-900'>
                    <option value="" disabled>Select Secret Question</option>
                    <option value='What is your pet name?'>What is your pet name?</option>
                    <option value='What was the name of your first school?'>What was the name of your first school?</option>
                    <option value='Who was your Childhood hero?'>Who was your Childhood hero?</option>
                    <option value='What is your favorite past-time?'>What is your favorite past-time?</option>
                    <option value='What is your all time favorite sports team?'>What is your all time favorite sports team?</option>
                    <option value='What is your fathers middle name?'>What is your fathers middle name?</option>
                    <option value='What make was your first car or bike?'>What make was your first car or bike?</option>
                    <option value='Where did you first meet your spouse?'>Where did you first meet your spouse?</option>
                </select>

                <input
                    type="text"
                    className="w-3/4 border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Secret Answer"
                    value={registerDetails.secretAnswer}
                    name='secretAnswer'
                    onChange={handleChange}
                />
            </div>
        )
}

const Tab2=({registerDetails,setRegisterDetails})=>{  
  
    const handleChange=(e)=>{
        setRegisterDetails({...registerDetails,[e.target.name]:e.target.value})
    }
    return (
        <div className='flex flex-col gap-y-2 '>
            <div className='flex justify-between items-center flex-wrap gap-y-2'>
                <input
                    type="text"
                    className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="First Name"
                    value={registerDetails.firstName}
                    name='firstName'
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Middle Name"
                    value={registerDetails.middleName}
                    name='middleName'
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Last Name"
                    value={registerDetails.lastName}
                    name='lastName'
                    onChange={handleChange}
                />
            </div>
            <p className='font-semibold text-baseline text-gray-900'>Info!Please provide your exact name as per Aadhaar to avail Aadhaar based benefits on IRCTC eTicketing website.</p>
            <div className='flex items-center justify-between flex-1 mb-2'>
                <input
                    type="text"
                    className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    placeholder="Email"
                    value={registerDetails.email}
                    name='email'
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    value={registerDetails.phoneNumber}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                    name='phoneNumber'
                    placeholder="Phone Number"
                />
            </div>
            <div className='flex items-center justify-between flex-wrap gap-y-4'>
                <div className=' '>
                    <input type='radio' name='gender' value='male' id='male' className='appearance-none' onChange={handleChange}/>
                    <label for='male' className={`px-2 py-2 border-2 border-gray-300 rounded-sm border-r-0 duration-300 ${registerDetails.gender=='male'?"bg-[#fb792b] text-white":" "}`} >Male</label>
                    <input type='radio' name='gender' value='female' id='female' className='appearance-none' onChange={handleChange}/>
                    <label for='female' className={`px-2 py-2 border-2 border-gray-300 rounded-sm border-r-0 duration-300 ${registerDetails.gender=='female'?"bg-[#fb792b] text-white  ":" "}`} >Female</label>
                    <input type='radio' name='gender' value='transgender' id='transgender' className='appearance-none' onChange={handleChange}/>
                    <label for='transgender'  className={`px-2 py-2 border-2 border-gray-300 rounded-sm duration-300 ${registerDetails.gender=='transgender'?"bg-[#fb792b] text-white ":" "}`} >Transgender</label>
                </div>
                <input type='date' className='border-2 border-gray-300 px-3 py-2 ' onChange={handleChange} name='dateOfBirth' value={registerDetails.dateOfBirth}></input>
                <select name='occupation' value={registerDetails.occupation} onChange={handleChange} className=' border border-gray-300 py-2 px-3 text-blue-900'>
                    <option value="" disabled>Select Occupation</option>
                    <option value='government'>Government</option>
                    <option value='private'>Private</option>
                    <option value='public'>Public</option>
                    <option value='self-employed'>Self-Employed</option>
                    <option value='professional'>Professional</option>
                    <option value='student'>Student</option> 
                    <option value='other'>Other</option>
                </select>
                
            </div>
          
        </div>
    )
}


const Tab3=({registerDetails,setRegisterDetails})=>{  
  
    const handleChange=(e)=>{
        setRegisterDetails({...registerDetails,[e.target.name]:e.target.value})
    }
    return (
        <div className='flex flex-col gap-y-2 '>
                <div className='flex items-center justify-between'>
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="Flat/Door/Block No."
                        value={registerDetails.flatNo}
                        name='flatNo'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="Street"
                        value={registerDetails.street}
                        name='street'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="Area"
                        value={registerDetails.area}
                        name='area'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="PinCode"
                        value={registerDetails.pinCode}
                        name='pinCode'
                        onChange={handleChange}
                    />
                </div>  
                <div className='flex items-center justify-between'>
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="City/Town"
                        value={registerDetails.city}
                        name='city'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 py-2 px-3 text-blue-900 placeholder-[#082b71] "
                        placeholder="State"
                        value={registerDetails.street}
                        name='state'
                        onChange={handleChange}
                    />
                </div>   
                <div>
                    <input type='checkbox' className='mr-2'/>
                    <span className='font-semibold text-base'>Please inform me about IRCTC Co-branded credit card through Phone/Email/SMS (Optional)</span>   
                </div>
                <p className='font-semibold text-base text-blue-900'>Book free Railway tickets using Reward Points and Enjoy Zero payment gateway charge with IRCTC SBI Card</p>    
        </div>
    )
}

const RegisterContainer = () => {
   
    const [toastMsg,setToastMsg]=useState("")

    const allTabs=["basic details","personal details","address"]
    const [selectedTab,setSelectedTab]=useState(allTabs[0])
    const [prevBtnText,setPrevBtnText]=useState("cancel")
    const [nextBtnText,setNextBtnText]=useState("continue")
    const [registerDetails,setRegisterDetails]=useState({
        userName:"",
        password:"",
        confirmPassword:"",
        preferedLanguage:"",
        secretQuestion:"",
        secretAnswer:"",
        firstName:'',
        middleName:"",
        lastName:"",
        occupation:"",
        dateOfBirth:"",
        email:'',
        gender:"",
        phoneNumber:'',
        flatNo:"",
        city:"",
        street:"",
        pinCode:"",
        area:"",
        state:"",
    })
    const handleTabs=(tabIndex)=>{
        setSelectedTab(allTabs[tabIndex])
        if(tabIndex==2){
            setNextBtnText("register")
        }else{
            setNextBtnText("continue")
        }
        if(tabIndex==0){
            setPrevBtnText("cancel")
        }
        else{
            setPrevBtnText("back")
        }

    }

    const handleNext=async ()=>{

        let tabIndex=allTabs.indexOf(selectedTab)

        if(tabIndex==2){
            if(validateRegisterForm()){
                const userDetails={...registerDetails}
                delete userDetails["confirmPassword"]
                api.post('user/register',{userDetails}).then(res=>{
                    console.log("user created successfully")
                })
            }
        }

        tabIndex++;
        setPrevBtnText("back")
        if(tabIndex==2){
            setNextBtnText("register")
        }else{
            setNextBtnText("continue")
        }
        if(tabIndex<=2){
            setSelectedTab(allTabs[tabIndex])
        }
        
    }

    const handlePrev=()=>{
        let tabIndex=allTabs.indexOf(selectedTab)
        tabIndex--;

        if(tabIndex==0){
            setPrevBtnText("cancel")
        }
        else{
            setPrevBtnText("back")
        }
        setNextBtnText("continue")
        
        if(tabIndex>=0){
            setSelectedTab(allTabs[tabIndex])
        }
    }
    console.log(toastMsg)


    const selectTabFunction=(tabIndex)=>{
        if(tabIndex>=0&&tabIndex<=4){
            setSelectedTab(allTabs[0])
        }
        else if(tabIndex>=5&&tabIndex<=12){
            selectedTab(allTabs[1])
        }
        else{
            selectedTab(allTabs[2])
        }
    }
    const validateRegisterForm= async ()=>{
        const tabCheck=["userName","password","preferedLanguage","secretQuestion","secretAnswer","firstName","middleName","lastName","email","phoneNumber","gender","dateOfBirth","occupation","flatNo","street","area","pinCode","city","state"]

        let msg=""
        let index
        for(let i=0;i<tabCheck.length;i++){
            if(registerDetails[tabCheck[i]].length==0){
                msg=tabCheck[i] +" cannot be empty"
                index=i
                break;
            }
            else if(tabCheck[i]=="password"){
                if(registerDetails[tabCheck[i]]!==registerDetails["confirmPassword"]){
                    msg="Password and Confirm password not Matched."
                    index=i
                    break;
                }
            }
            else if(tabCheck[i]=='userName'){
                let userName=registerDetails.userName
                await api.post("/user/username_availablity",{userName}).then((res)=>{
                    if(res.data=="username is not available"){
                        msg=res.data
                        index=i
                    }
                }).catch(err=>{
                    
                })
                if(msg.length>=1){
                    break;
                }
            }
            else if(tabCheck[i]=='email'){
                let email=registerDetails.email
                await api.post("/user/email_availablity",{email}).then((res)=>{
                    if(res.data!==""){
                        msg=res.data
                        index=i
                    }
                }).catch(err=>{
                    
                })
                if(msg.length>=1){
                    break;
                }
            }
            else if(tabCheck[i]=='phoneNumber'){
                let phoneNumber=registerDetails.phoneNumber
                await api.post("/user/phonenumber_availablity",{phoneNumber}).then((res)=>{
                    if(res.data!==""){
                        msg=res.data
                        index=i
                    }
                }).catch(err=>{
                    
                })
                if(msg.length>=1){
                    break;
                }
            }
        }
        if(msg.length>=1){
            setToastMsg(msg)
            selectTabFunction(index)
            return false
        }
        return true
    }

    useEffect(()=>{

    },[toastMsg])
  return (
    <div className='w-full px-32 py-4 bg-[#e9eff5] '>
        <div className='p-8 bg-white rounded-lg w-3/4 m-auto relative'>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold text-xl '>Create Your Account</p>
                <p className='text-[#fb792b] uppercase underline font-semibold'>Sign In</p>
            </div>
            {
                toastMsg.length>=1&&
                <Toaster ToastMessage={toastMsg} setToastMsg={setToastMsg}/>
            }
            <div className='flex items-center border-b-2 border-gray-300'>
              {
                allTabs.map((tab,index)=>{
                    return (
                        <p className={`capitalize px-4 py-3 cursor-pointer ${tab===selectedTab ? "text-[#fb792b] border-b-2 border-[#fb792b]":"text-gray-600 "}`} onClick={()=>handleTabs(index)}>{tab}</p>
                    )
                })
              }
            </div>
            <div className='w-3/4'>
                <div className='py-4 px-2'>
                    <p className='font-bold text-gray-900 text-baseline'>GARBAGE/JUNK VALUES IN PROFILE MAY LEAD TO DEACTIVATION</p>
                    <p>Please use a valid E-Mail ID and mobile number in registration.</p>
                </div>
                <div>
                    {
                        selectedTab =='basic details' ?<Tab1 registerDetails={registerDetails} setRegisterDetails={setRegisterDetails}/>:selectedTab=='address'?<Tab3 registerDetails={registerDetails} setRegisterDetails={setRegisterDetails}/>:<Tab2 registerDetails={registerDetails} setRegisterDetails={setRegisterDetails}/>
                    }
                </div>
                <div className='py-4 px-2 flex items-center justify-between'>
                    <p className='border-gray-300 border-2 px-4 py-2 w-max rounded-md font-semibold cursor-pointer capitalize' onClick={()=>handlePrev()}>{prevBtnText}</p>
                    <p className='border-[#fb792b] border-2 px-4 py-2 w-max rounded-md bg-[#fb792b] text-white font-semibold cursor-pointer capitalize' onClick={()=>handleNext()}>{nextBtnText}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RegisterContainer