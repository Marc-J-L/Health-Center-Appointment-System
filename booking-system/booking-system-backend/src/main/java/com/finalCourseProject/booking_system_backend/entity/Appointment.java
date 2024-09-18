package com.finalCourseProject.booking_system_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name="appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="date")
    private LocalDate date;

    @Column(name="time")
    private String time;

    @Column(name="doctor")
    private String doctor;

    @Column(name="patient")
    private String patient;

    @Column(name="email")
    private String email;

    @Column(name="notes")
    private String notes;

}
