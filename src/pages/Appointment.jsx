import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RealtedDoctors from '../components/RealtedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    let slots = []
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
      } else {
        currentDate.setHours(10, 0, 0, 0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      slots.push(...timeSlots)
    }
    setDocSlots(slots)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSlots()
  }, [docInfo])

  return docInfo && (
    <div>
      {/* Doctor Information */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-600'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {Array.from({ length: 7 }).map((_, i) => {
            let date = new Date()
            date.setDate(date.getDate() + i)
            return (
              <div key={i} onClick={() => setSelectedDate(date)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${selectedDate?.toDateString() === date.toDateString() ? 'bg-primary text-white' : 'border border-gray-200'}`}>
                <p>{daysOfWeek[date.getDay()]}</p>
                <p>{date.getDate()}</p>
              </div>
            )
          })}
        </div>

        {/* Display slots for the selected day */}
        <div className='flex flex-wrap gap-2 mt-4'>
          {docSlots
            .filter(slot => selectedDate && slot.datetime.toDateString() === selectedDate.toDateString())
            .map((slot, index) => (
              <div key={index} onClick={() => setSlotTime(slot.time)}
                className={`px-3 py-1 rounded-md cursor-pointer ${slotTime === slot.time ? 'bg-primary text-white' : 'border border-gray-300'}`}>
                {slot.time}
              </div>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full m-6'>Book an appointment</button>
      </div>

      {/* listing related doctors */}
      <RealtedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
