package com.rotorooter.businessservice.rrcontentlayer.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RedisConfig {

    @Autowired
    private ApplicationContext ctx;

    @Value("${dotcms.host}")
    private String dotCMSHost;

    @Value("${dotcms.port}")
    private String dotCMSPort;

    @Value("${redis.host}")
    private String host;

    @Value("${redis.port}")
    private int port;

    private RestTemplate restTemplate = new RestTemplate();

    public RedisConfig(){
        String envHost = System.getenv("REDIS_URL");

        //  temporary out of service :p
        if(envHost != null ){
//            this.host = envHost;
        }
    }

    @Bean
    public JedisConnectionFactory jedisConnectionFactory() {

        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration(host, port);
        return new JedisConnectionFactory(redisStandaloneConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(jedisConnectionFactory());
        return template;
    }

    @Bean
    public StringRedisTemplate stringRedisTemplate() {
        StringRedisTemplate stringRedisTemplate = new StringRedisTemplate(jedisConnectionFactory());
        stringRedisTemplate.setEnableTransactionSupport(true);
        return stringRedisTemplate;
    }


    //  call dotCMS every one minute
    @Scheduled(fixedDelay = 60000)
    public void runTask() {
        String url = String.format("http://%s:%s/api/content/id/d53463d3-07af-4298-b6c2-cc2adc2258e4",dotCMSHost, dotCMSPort);
        System.out.println("DOTCMS URL called: "+ url);

        String result = restTemplate.getForObject(url, String.class);
        redisTemplate().opsForValue().set("d53463d3-07af-4298-b6c2-cc2adc2258e4", result);

    }

}
