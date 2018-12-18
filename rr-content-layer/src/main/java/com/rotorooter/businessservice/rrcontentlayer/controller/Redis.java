package com.rotorooter.businessservice.rrcontentlayer.controller;

import com.rotorooter.businessservice.rrcontentlayer.config.RedisConfig;
import com.rotorooter.businessservice.rrcontentlayer.model.Blog;
import com.rotorooter.businessservice.rrcontentlayer.repositories.BlogRepository;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Redis {

    @Autowired
    private ApplicationContext applicationContext;

    @RequestMapping(value = "/redis")
    public String hello(){
        return "hello";
    }

    @RequestMapping(value = "/blogs", method = RequestMethod.GET, produces = "application/json")
    public String getBlogs(){

        RedisTemplate redisTemplate = (RedisTemplate) applicationContext.getBean("redisTemplate");

        // for now just return one blog with a specific ID
        return (String) redisTemplate.opsForValue().get("d53463d3-07af-4298-b6c2-cc2adc2258e4");
    }

}
