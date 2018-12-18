FROM openjdk:8 AS TEMP_BUILD_IMAGE
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY . $APP_HOME
RUN ./gradlew build
COPY . .
RUN ./gradlew build

FROM java:8
ENV ARTIFACT_NAME=rr-content-layer-0.0.1-SNAPSHOT.jar
ENV APP_HOME=/usr/app/
WORKDIR /app
COPY --from=TEMP_BUILD_IMAGE $APP_HOME/build/libs/$ARTIFACT_NAME /app/rr-content-layer.jar
ENTRYPOINT ["java","-jar","rr-content-layer.jar"]
EXPOSE 8080
