package com.balu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.balu.entity.Student;

public interface StudentRepository  extends JpaRepository<Student, Integer>{

}
