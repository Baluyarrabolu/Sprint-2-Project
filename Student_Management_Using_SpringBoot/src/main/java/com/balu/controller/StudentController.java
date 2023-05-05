package com.balu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.balu.entity.Student;
import com.balu.service.StudentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	// Add new employee
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    // Get employee by Id
    @GetMapping("/getStudentByID/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentByID(id);
    }

    // Get all employee
    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    // Update employee
    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    // Delete employee
    @DeleteMapping("/deleteStudentById/{id}")
    public boolean deleteStudentByID(@PathVariable int id) {
        return studentService.deleteStudentByID(id);
    }
}
