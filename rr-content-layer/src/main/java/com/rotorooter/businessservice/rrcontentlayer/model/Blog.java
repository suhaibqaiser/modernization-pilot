package com.rotorooter.businessservice.rrcontentlayer.model;

import org.springframework.data.redis.core.RedisHash;
import java.io.Serializable;

@RedisHash("dotCMS/blog")
public class Blog implements Serializable {

    private String htmlContent;

    public Blog(String html){
        this.htmlContent = html;
    }


    public String getHtmlContent() {
        return htmlContent;
    }

    public void setHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
    }


}
