package com.thilini.rentacar.demoapplication.service;

import com.thilini.rentacar.demoapplication.model.Student;
import com.thilini.rentacar.demoapplication.repository.StudentRepository;

public interface StudentService {



    Student save(Student student);

    Student fetchStudentById(int id);
}
