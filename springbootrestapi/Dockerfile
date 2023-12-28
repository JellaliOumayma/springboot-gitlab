# Utilisation d'une image de base Java
FROM openjdk:16

# Répertoire de travail
WORKDIR /app

# Copier le fichier JAR de l'application Spring Boot dans le conteneur
COPY target/springbootrestapi-1.0.0.jar /app/application.jar


# Exposer le port sur lequel l'application Spring Boot fonctionne (par exemple, 8080)
EXPOSE 8080

# Commande pour lancer l'application Spring Boot
CMD ["java", "-jar", "application.jar"]