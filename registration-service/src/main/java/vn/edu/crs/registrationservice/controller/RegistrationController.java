package vn.edu.crs.registrationservice.controller;

import vn.edu.crs.registrationservice.dto.RegistrationRequestDTO;
import vn.edu.crs.registrationservice.entity.Registration;
import vn.edu.crs.registrationservice.service.RegistrationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication; // ĐÃ BỔ SUNG: Import Security
import org.springframework.web.bind.annotation.*;
import java.util.List; // ĐÃ BỔ SUNG: Import List

@RestController
@RequestMapping("/registrations")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Registration register(@Valid @RequestBody RegistrationRequestDTO dto) {
        return registrationService.register(dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void cancel(@PathVariable Long id) {
        registrationService.cancel(id);
    }

    // --- ĐÃ BỔ SUNG: Endpoint lấy danh sách môn học đã đăng ký (Buổi 9) ---
    @GetMapping("/my")
    public List<Registration> getMyRegistrations (Authentication authentication) {
        // Lấy studentId từ JWT để chống lỗi bảo mật IDOR
        Long studentId = (Long) authentication.getCredentials();
        return registrationService.getMyRegistrations (studentId);
    }
}