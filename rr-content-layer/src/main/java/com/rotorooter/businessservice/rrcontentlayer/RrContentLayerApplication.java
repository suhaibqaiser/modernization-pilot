package com.rotorooter.businessservice.rrcontentlayer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@EnableConfigurationProperties
@SpringBootApplication
public class RrContentLayerApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(RrContentLayerApplication.class, args);

	}

}

