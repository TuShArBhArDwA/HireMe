import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { assets, jobsData } from '../assets/assets'
import kConvert from 'k-convert'
import moment from 'moment'

const ApplyJob = () => {

  const {id}=useParams()

  const[JobData,setJobData]=useState(null)

  const {jobs}=useContext(AppContext)
  const fetchJob=async()=>{
    const data=jobs.filter(job=>job._id===id)
    if(data.length!==0){
      setJobData(data[0])
      console.log(data[0])
    }
  }

  useEffect(()=>{
    if(jobs.length>0){
      fetchJob()
    }
  },[id,jobs])

  return JobData ? (
    <>
    <Navbar/>
    <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
      <div className='bg-white text-black rounded-lg w-full'>
        <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl'>
          <div className='flex flex-col md:flex-row items-center'>
            <img className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={JobData.companyId.image} alt="" />
            <div className='text-center md:text-left text-neutral-700'>
              <h1 className='text-2xl sm:text-4xl font-medium'>{JobData.title}</h1>
              <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
                <span>
                <img src={assets.suitcase_icon} alt="" />
                {JobData.companyId.name}
                </span>
                <span>
                  <img src={assets.location_icon} alt="" />
                  {JobData.location}
                </span>
                <span>
                  <img src={assets.person_icon} alt="" />
                  {JobData.level}
                </span>
                <span>
                  <img src={assets.money_icon} alt="" />
                  CTC: {kConvert.convertTo(JobData.salary)}
                </span>
                </div>
            </div>
          </div>

          <div>
            <button>Apply Now</button>
            <p>Posted {moment(JobData.date).fromNow()}</p>
          </div>

        </div>
      </div>
    </div>
    </>
  ) :(
    <Loading/>
  )
}

export default ApplyJob
