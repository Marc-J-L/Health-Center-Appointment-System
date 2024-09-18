import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  patient: string;
  email: string;
}

export default function Home() {

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  //const {id} = useParams()

  useEffect(() => {
    loadAppointments();
  },[])

  const loadAppointments =async () =>{
    const result = await axios.get("http://localhost:8080/appointments");
    setAppointments(result.data);

  }

  const deleteAppointment = async (id:number) =>{
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
  
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/appointment/${id}`);
        loadAppointments();
      } catch (error) {
        console.error("There was an error deleting the appointment:", error);
      }
    }
  }

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    const dateTimeA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate(), parseInt(a.time.split(':')[0]), parseInt(a.time.split(':')[1]));
    const dateTimeB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate(), parseInt(b.time.split(':')[0]), parseInt(b.time.split(':')[1]));

    return dateTimeA.getTime() - dateTimeB.getTime();
  });

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table ">
          <thead className=" border-bottom border-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Doctor</th>
              <th scope="col">Patient</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedAppointments.map((appointment, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.email}</td>
                <td>
                  <Link className="btn btn-dark mx-2"
                  to={`/viewappointment/${appointment.id}`}
                  >Detail</Link>
                  <Link className="btn btn-outline-dark mx-2"
                  to={`/editappointment/${appointment.id}`}
                  >Edit</Link>
                  <button className="btn btn-warning mx-2"
                  onClick={()=> deleteAppointment(appointment.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
