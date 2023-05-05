package com.balu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.balu.entity.Student;
import com.balu.repository.StudentRepository;

@Service
@Transactional
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudentByID(int id) {
        return studentRepository.findById(id).orElse(null);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public Student updateStudent(Student student) {
        Student existingStud = studentRepository.findById(student.getId()).orElse(null);
        System.out.println(student);
        if(existingStud == null) {
            System.out.println("Student not found");
            return  studentRepository.save(student);
        }else  {
            existingStud.setName(student.getName());
            existingStud.setEmail(student.getEmail());
            existingStud.setMobile(student.getMobile());
            studentRepository.save(existingStud);
        }
        return student;
    }

    public boolean deleteStudentByID(int id) {
        @SuppressWarnings("deprecation")
		Student existingStud = studentRepository.getById(id);
        if(existingStud != null) {
        	studentRepository.deleteById(id);
        	return true;
        }
        return false;
    }
    
}
