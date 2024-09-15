package com.Jal.JalNigam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
//@ComponentScan(basePackages = "com.Jal.JalNigam.config")
public class JalNigamApplication {

	public static void main(String[] args) {
		SpringApplication.run(JalNigamApplication.class, args);
	}

}
