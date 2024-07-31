package org.ismetg.controller;


import lombok.RequiredArgsConstructor;
import org.ismetg.dto.request.UserLoginRequestDto;
import org.ismetg.dto.request.UserRegisterRequestDto;
import org.ismetg.dto.response.ResponseDto;
import org.ismetg.exception.ErrorType;
import org.ismetg.exception.UserException;
import org.ismetg.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    @CrossOrigin("*")
    public ResponseEntity<ResponseDto> register(@RequestBody UserRegisterRequestDto dto){

        ResponseDto register = userService.register(dto);
        return ResponseEntity.ok(register);

    }

    @PostMapping("/login")
    @CrossOrigin("*")
    public ResponseEntity<ResponseDto> login(@RequestBody UserLoginRequestDto dto){
        ResponseDto<Boolean> login = userService.login(dto);

        return ResponseEntity.ok(login);
    }

}
