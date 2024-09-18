package com.finalCourseProject.booking_system_backend.controller;

import com.finalCourseProject.booking_system_backend.dao.AppointmentRepository;
import com.finalCourseProject.booking_system_backend.entity.Appointment;
import com.finalCourseProject.booking_system_backend.exception.AppointmentNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/appointment")
    Appointment newAppointment(@RequestBody Appointment newAppointment){
        return appointmentRepository.save(newAppointment);
    }

    @GetMapping("/appointments")
    List<Appointment> getAppointments(){
        return appointmentRepository.findAll();
    }

    @GetMapping("/appointment/{id}")
    Appointment getAppointmentById(@PathVariable Long id) {
        return appointmentRepository.findById(id)
                .orElseThrow(()->new AppointmentNotFoundException(id));
    }

    @PutMapping("/appointment/{id}")
    Appointment updateAppointment(@RequestBody Appointment newAppointment,@PathVariable Long id){
        return appointmentRepository.findById(id)
                .map(appointment -> {
                    appointment.setDate(newAppointment.getDate());
                    appointment.setTime(newAppointment.getTime());
                    appointment.setDoctor(newAppointment.getDoctor());
                    appointment.setPatient(newAppointment.getPatient());
                    appointment.setEmail(newAppointment.getEmail());
                    appointment.setNotes(newAppointment.getNotes());
                    return appointmentRepository.save(appointment);
                }).orElseThrow(()->new AppointmentNotFoundException(id));
    }

    @DeleteMapping("/appointment/{id}")
    String deleteAppointment(@PathVariable Long id) {
        if(!appointmentRepository.existsById(id)){
            throw new AppointmentNotFoundException(id);
        }
        appointmentRepository.deleteById(id);
        return  "Appointment with id " + id + " has been deleted success.";
    }
}
