package vn.edu.crs.course_service.config;

import vn.edu.crs.course_service.Entity.Course;
import vn.edu.crs.course_service.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final CourseRepository courseRepository;

    @Override
    public void run(String... args) {
        if (courseRepository.count() == 0) {
            Course c1 = new Course(null, "Lap trinh Java", 3, 30, 30);
            Course c2 = new Course(null, "Kien truc phan mem", 3, 30, 30);
            Course c3 = new Course(null, "Lap trinh Web Microservices", 3, 40, 40);

            courseRepository.save(c1);
            courseRepository.save(c2);
            courseRepository.save(c3);
        }
    }
}
