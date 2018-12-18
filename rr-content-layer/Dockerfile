FROM java:8
WORKDIR /app
COPY build/libs/rr-content-layer-0.0.1-SNAPSHOT.jar /app/rr-content-layer.jar
ENTRYPOINT ["java","-jar","rr-content-layer.jar"]
EXPOSE 8080