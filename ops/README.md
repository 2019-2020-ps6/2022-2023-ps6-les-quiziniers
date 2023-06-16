# Etapes de la partie OPS 
### Etape 1 : Done
### Etape 2 : Done 
### Etape 3 : Done
### Etape 4 : Commencée mais pas fonctionnelle

# Healthcheck pour chaque service :

## Healthcheck front-end :

```docker    
      healthcheck:
      test: [ "CMD-SHELL", "curl -f http://localhost:8080 || exit 1" ]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Ce healthcheck permet de vérifier que le front-end est bien lancé et fonctionnel.
### Si le front-end ne répond pas, le container sera relancé.
### Il vérifie toutes les 30 secondes en se connectant à l'adresse http://localhost:8080.
### Ce qui lui permet de notifier de l'état du front-end.
#### Exemple de réponse du healthcheck :
#### ops-frontend-1  | 127.0.0.1 - - [16/Jun/2023:13:31:57 +0000] "GET / HTTP/1.1" 200 772 "-" "curl/7.74.0" "-"
## Healthcheck back-end :

```docker
          healthcheck:
      test: [ "CMD-SHELL", "curl -f http://localhost:9428 || exit 1" ]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Ce healthcheck permet de vérifier que le back-end est bien lancé et fonctionnel.
### Si le back-end ne répond pas, le container sera relancé.
### Il vérifie toutes les 30 secondes en se connectant à l'adresse http://localhost:9428.
### Ce qui lui permet de notifier de l'état du back-end.
#### Exemple de réponse du healthcheck :
#### ops-backend-1   | [2023-06-16T13:31:56.304Z] GET /api/status 200 0.479 ms - 4

# Explications du dossier ops : 

## Docker-compose.yml :

```docker
services:
  backend:
    container_name: backend
    image: backend
    build: ../backend
    ports:
      - "8000:9428"
    restart: always
    healthcheck:
      test: [ "CMD-SHELL", "curl -f http://localhost:9428 || exit 1" ]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - app-network

  frontend:
    container_name: frontend
    image: frontend
    volumes:
      - ./../front-end/default.conf:/etc/nginx/conf.d/default.conf
    build:
      context: ../front-end
      args:
        TESTURL: "http://backend:9428"
        API_URL: "http://backend:9428"
        ENVIRONMENT: production
    ports:
      - "8080:80"
    restart: always
    depends_on:
      - backend
    healthcheck:
      test: [ "CMD-SHELL", "curl -f http://localhost:8080 || exit 1" ]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

### Ce docker-compose permet de lancer les deux containers (front-end et back-end) et de les lier entre eux.
### Il permet également de lancer les healthchecks pour chaque container.
### Le site peut être accédé à l'adresse http://localhost:8080.

## Docker-compose-e2e.yml :

```docker 
version: '3'
services:
  frontend:
    image: frontend
    volumes:
      - ./../front-end/default.conf:/etc/nginx/conf.d/default.conf
    build:
      context: ../front-end
      dockerfile: ../front-end/Dockerfile
      args:
        TESTURL: "http://localhost:8000"
        ENVIRONMENT: e2e
    ports:
      - "8080:80"
    depends_on:
      - backend
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:80/ || exit 1"]
      interval: 10s
      timeout: 10s
      retries: 5
  backend:
    image: backend
    build:
      context: ../backend
      dockerfile: ../backend/Dockerfile-e2e
    user: node
    ports:
      - "8000:9428"
    healthcheck:
      test: [ "CMD-SHELL", "curl -f http://localhost:9428/api/status || exit 1" ]
      interval: 10s
      timeout: 10s
      retries: 5
  tests:
    image: frontendtest
    build:
      context: ../front-end
      dockerfile: ../front-end/Dockerfile-e2e
    user: pwuser
    depends_on:
      - backend
      - frontend
    volumes:
      - test-results:/usr/local/app/test-results
      - playwright-report:/usr/local/app/playwright-report
    network_mode: "host"
volumes:
  test-results:
  playwright-report:
```

### Ce docker-compose permet de lancer les tests e2e.
### Il permet également de lancer les healthchecks pour chaque container.
### Les tests peuvent être lancés avec la commande : ```docker-compose -f docker-compose-e2e.yml up```
### Le site reste accessible à l'adresse http://localhost:8080.
### Une fois les tests terminés, les résultats sont disponibles dans le dossier test-results.

## Architecture du dossier ops :

```bash
├── docker-compose-e2e.yml
├── docker-compose.yml
├── README.md
├── run-e2e.sh
├── run.sh
```

## Utilisateurs : 

### - backend : node 
### - frontend : node 
### - tests : pwuser

## Architecture du projet :

### Le dossier racine contient les dossiers front-end, back-end et ops.
### Le dossier front-end contient les dossiers e2e, src et les fichiers Dockerfile ( classique et e2e) et default.conf.
### Le dossier back-end contient les dossiers e2e, src et les fichiers Dockerfile ( classique et e2e).
### Le dossier ops contient les deux docker-compose et les deux scripts pour lancer les tests e2e et les containers.

## Lancement du projet : 

### Pour lancer le projet en production, il faut lancer le script run.sh avec la commande : ```./run.sh```
### Le site est accessible à l'adresse http://localhost:8080.
### Pour lancer le projet en e2e, il faut lancer le script run-e2e.sh avec la commande : ```./run-e2e.sh```
### Le site est accessible à l'adresse http://localhost:8080 une fois les tests achevés.

## Statut du livrable :

### Le livrable est fonctionnel et répond aux exigences du projet.
### Le mot de passe administrateur est : soi213
## Proxy (pas réalisé) :

### Nous avons essayé de mettre en place un proxy avec nginx mais nous n'avons pas réussi à le faire fonctionner.
### Commencé mais pas fonctionnel : On a fait un autre docker compose avec un service reverse proxy qui prend en image nginx et qui dépend du front et du back. Ce service communique via le port 80.
