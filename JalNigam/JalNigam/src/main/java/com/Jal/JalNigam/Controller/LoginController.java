package com.Jal.JalNigam.Controller;

import com.Jal.JalNigam.Modal.User;
import com.Jal.JalNigam.Service.CustomUsers;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final AuthenticationManager authenticationManager;

    @Value("${jwt.secret}")
    private String jwtSecretKey;

    @Value("${jwt.expirationMs}")
    private long jwtExpirationMs;

    private final SecretKey jwtSecret;

    public LoginController(AuthenticationManager authenticationManager, @Value("${jwt.secret}") String jwtSecretKey) {
        this.authenticationManager = authenticationManager;
        this.jwtSecret = Keys.hmacShaKeyFor(jwtSecretKey.getBytes());
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            if (!(userDetails instanceof CustomUsers)) {
                throw new RuntimeException("Unexpected user details implementation");
            }

            CustomUsers customUserDetails = (CustomUsers) userDetails;

            String token = generateJwtToken(authentication);
            UUID uuid = customUserDetails.getUuid();
            String role = customUserDetails.getRole();
            String Piu = customUserDetails.getPiu();

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("uuid", String.valueOf(uuid));
            response.put("role", role);
            response.put("piuCode",Piu);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    private String generateJwtToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String username = userDetails.getUsername();
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
                .signWith(jwtSecret)
                .compact();
    }
}
