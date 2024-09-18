package com.finalCourseProject.booking_system_backend.dao;

import com.finalCourseProject.booking_system_backend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
