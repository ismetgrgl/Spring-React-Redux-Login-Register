package org.ismetg.service;

import lombok.RequiredArgsConstructor;
import org.ismetg.dto.request.UserLoginRequestDto;
import org.ismetg.dto.request.UserRegisterRequestDto;
import org.ismetg.dto.response.ResponseDto;
import org.ismetg.entity.User;
import org.ismetg.exception.ErrorType;
import org.ismetg.exception.UserException;
import org.ismetg.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public ResponseDto<Boolean> register(UserRegisterRequestDto dto) {

        if (!usernameControl(dto.getUsername())) {
            return ResponseDto.<Boolean>builder()
                    .code(400)
                    .message("Bu username daha önce kullanılmış")
                    .data(false)
                    .build();
        }
        if (!emailControl(dto.getEmail())) {
            return ResponseDto.<Boolean>builder()
                    .code(300)
                    .message("Bu email daha önce kullanılmış")
                    .data(false)
                    .build();
        }

        User user = User.builder()
                .email(dto.getEmail())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();
        userRepository.save(user);

        return ResponseDto.<Boolean>builder()
                .code(200)
                .message("Kayıt Başarılı")
                .data(true)
                .build();
    }

    public ResponseDto<Boolean> login(UserLoginRequestDto dto) {
        Optional<User> optionalByUsernameAndPassword = userRepository.findOptionalByUsernameAndPassword(dto.getUsername(), dto.getPassword());
        if (optionalByUsernameAndPassword.isEmpty()) {
            return ResponseDto.<Boolean>builder()
                    .code(400)
                    .message("Kullanıcı adı veya Şifre Hatalı")
                    .data(false)
                    .build();
        }
        return ResponseDto.<Boolean>builder()
                .code(200)
                .message("Başarılı şekilde giriş yapıldı")
                .data(true)
                .build();
    }

    private boolean usernameControl(String username) {
        return userRepository.findByUsername(username).isEmpty();
    }

    private boolean emailControl(String email) {
        return userRepository.findByEmail(email).isEmpty();
    }


}
