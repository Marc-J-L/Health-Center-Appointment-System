package com.finalCourseProject.booking_system_backend.exception;

public class AppointmentNotFoundException extends RuntimeException {
    public AppointmentNotFoundException(Long id){
        super("Could not found the user with id " + id);
    }
}
