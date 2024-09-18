import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditAppointment() {

  let navigate = useNavigate();

  const {id} = useParams()

  const [appointment, setAppointment] = useState({
    date:"",
    time:"",
    doctor:"",
    patient:"",
    email:"",
    notes:""
  })

  const{date, time, doctor, patient, email, notes} = appointment

  const onInputChange = (e:any) =>{
    setAppointment({...appointment,[e.target.name]:e.target.value})
  }

  // useEffect(()=>{
  //   loadAppointment()
  // },[]);
  // const loadAppointment = async () => {
  //   const result = await axios.get(`http://localhost:8080/appointment/${id}`)
  //   setAppointment(result.data);
  // }

  useEffect(()=>{

    const loadAppointment = async () => {
      const result = await axios.get(`http://localhost:8080/appointment/${id}`)
      setAppointment(result.data);
    }
    loadAppointment();

  },[id]);

  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/appointment/${id}`,appointment)
    navigate("/")
  }

  return (
    <div className='container text-start'>
      
      <div className='col-md-6 offset-md-3 p-2 mt-1'>
        <h3 className='text-center m-3'>Edit the Appointment of ID: {id}</h3>

        <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Date' className='form-label fw-bold'>
              Date :
            </label>
            <input type="date"
              className='form-control border-dark border-2'
              required
              name='date'
              value={date}
              onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Time' className='form-label fw-bold'>
              Time :
            </label>
            <select
              className="form-control border-dark border-2"
              required
              name='time'
              value={time}
              onChange={(e)=>onInputChange(e)}
            >
              <option value="">Select Time</option>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="13:00">13:00</option>
              <option value="15:00">15:00</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='Doctor' className='form-label fw-bold'>
              Doctor :
            </label>
            <select
              className="form-control border-dark border-2"
              required
              name='doctor'
              value={doctor}
              onChange={(e)=>onInputChange(e)}
            >
              <option value="">Select Doctor</option>
              <option value="Olivia">Olivia</option>
              <option value="Pierre">Pierre</option>
              <option value="Richard">Richard</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='Patient' className='form-label fw-bold'>
              Patient : 
            </label>
            <input type={'text'}
              className='form-control border-dark border-2'
              placeholder="Enter Patient's name"
              name='patient'
              value={patient}
              onChange={(e)=>onInputChange(e)}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Email' className='form-label fw-bold'>
              Email :
            </label>
            <input type={'text'}
              className='form-control border-dark border-2'
              placeholder="Enter Patient's email"
              name='email'
              value={email}
              onChange={(e)=>onInputChange(e)}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Notes' className='form-label fw-bold'>
              Notes :
            </label>
            <textarea
              className='form-control border-dark border-2'
              rows={3}
              placeholder="Enter details of patient visit"
              name='notes'
              value={notes}
              onChange={(e)=>onInputChange(e)}
            ></textarea>
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-dark'>
              Submit
            </button>
            <Link to="/" className='btn btn-warning mx-2'>
              Cancel
            </Link>
          </div>
          

        </form>
        

      </div>

    </div>
  )
}
