import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewAppointment() {

  const [appointment,setAppointment] = useState({
    date:"",
    time:"",
    doctor:"",
    patient:"",
    email:"",
    notes:""
  })

  const {id}=useParams();

  useEffect(()=>{
    loadAppointment()
  })

  const loadAppointment=async ()=>{
    const result=await axios.get(`http://localhost:8080/appointment/${id}`)
    setAppointment(result.data)
  }

  return (

    <div className='container text-start'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 p-2 mt-1'>
          <h3 className='text-center m-3'>Appointment Detail</h3>

          <div className='card'>
            <div className='card-header text-center fw-bold'>
            The Appointment of ID : {id}
            </div>

            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Date : </b>
                {appointment.date}
              </li>

              <li className='list-group-item'>
                <b>Time : </b>
                {appointment.time}
              </li>

              <li className='list-group-item'>
                <b>Doctor : </b>
                {appointment.doctor}      
              </li>

              <li className='list-group-item'>
                <b>Patient : </b>
                {appointment.patient}
              </li>

              <li className='list-group-item'>
                <b>Email : </b>
                {appointment.email}
              </li>

              <li className='list-group-item'>
                <b>Notes : </b>
                {appointment.notes}
              </li>
            </ul>
            
          </div>
          <div className='text-center'>
            <Link className='btn btn-warning my-2' to={"/"}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
