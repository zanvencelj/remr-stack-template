![REMR](https://github.com/user-attachments/assets/7cbd1715-37f4-4c9d-9feb-370ad86b4dc8)


# REMR Stack Template
A modern, full-stack development template using **Nx Monorepo, React, Express, MariaDB, Redis,** and **Docker**. This project is designed to help you quickly bootstrap a scalable and containerized full-stack application.

## Features

- **Nx Monorepo**: Manage frontend and backend code in a single repository with built-in tooling for dependency management, code generation, and more.

- **React**: A powerful frontend library for building user interfaces.

- **Express**: A lightweight backend framework for building RESTful APIs.

- **MariaDB**: A robust, open-source relational database.

- **Redis**: A high-performance in-memory data store for caching and session management.

- **Docker**: Containerization for easy development, testing, and deployment.


## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)

- **Docker** (v20 or higher recommended)

- **Docker Compose** (v2 or higher recommended)

- **Nx CLI** (optional but recommended for better developer experience)


## Getting Started
#### 1. Clone the Repository

```bash
git clone https://github.com/zanvencelj/remr-stack-template.git
cd remr-stack-template
```

#### 2. Install Dependencies

Run the following command to install dependencies for both the frontend:

```bash
yarn install
```

#### 3. Set Up Environment Variables

Edit the `doocker-compose.yml` and `docker-compose.prod.yml` files to include your specific configuration (e.g., database credentials, Redis connection details).

#### 4. Start the Application with Docker

This project uses Docker Compose to manage the backend services (Express, MariaDB, Redis). To start the application, run:

```bash
docker-compose up --build
```

This will:

- Build the Docker images for the backend, MariaDB, and Redis.

- Start all the services.

Once the containers are running, you can access:

**Backend API**: `http://localhost:8000/api`

#### 5. Start the Frontend

In development, the frontend is run directly from the terminal. To start the frontend development server, use one of the following commands:

```bash
yarn start:main
```
or
```bash
npx nx run <app-name>:serve
```
Replace **`<app-name>`** with the name of your frontend app (e.g., `main`).

Once this is running, you can access:

- **Frontend**: `http://localhost:4200`

**Running Multiple Frontend Apps**

If your project contains multiple frontend applications, you can configure the `package.json` scripts to run multiple projects simultaneously. For example:

```
nx run-many --target=serve --projects=<app1>,<app2>,<app3>
```

Replace `<app1>,<app2>,<app3>` with the names of your frontend apps. This command will start all specified apps in parallel.

#### 6. (Optional) Run Without Docker

If you prefer to run the application locally without Docker:

Start the Backend

```bash
yarn start:backend
```
Make sure MariaDB and Redis are running locally and properly configured in your **`.env`** file.


## Project Structure

The project is organized as an Nx Monorepo with the following structure:

```
remr-stack-template/
├── apps/
│   └── main/                # React application
├── libs/                    # Shared libraries (e.g., utilities, types)
├── backend/
│   ├── src/                 # Backend files
│   │   └── server.js        # Backend entrypoint
│   └── package.json         # Backend package.json
├── dist/                    # Builds and other outputs
├── docker-compose.yml       # Docker Compose configuration
├── docker-compose.prod.yml  # Docker Compose configuration for production
├── .env                     # Environment variables
├── nx.json                  # Nx workspace configuration
├── package.json             # Root package.json
└── README.md                # This file
```

## Available Scripts

- `start:main`: Starts the frontend in development mode (without Docker).
- `build:main`: Builds the frontend for production.
- `test:main`: Runs tests for frontend apps.
- `lint:main`: Lints the monorepo project defined in scripts.
- `e2e:main`: Runs e2e tests for monorepo project defined in scripts.
- `start:backend`: Starts the Express server.


## Docker Configuration

The `docker-compose.yml` file defines the following services:

- **backend**: Express app served on port 8000.

- **mariadb**: MariaDB database.

- **redis**: Redis server for caching.

You can customize the Docker configuration by editing the `docker-compose.yml` file or the individual Dockerfiles.


## Nx React Monorepo Generators
Nx provides powerful generators to streamline the creation and management of React applications and libraries within your monorepo. These generators help you scaffold new projects, components, and libraries quickly while maintaining a consistent structure and configuration.

### Available Generators
Here are some of the most commonly used Nx generators for React projects:

1. Generate a New React Application
To create a new React application inside your monorepo, run:

```bash
npx nx g @nx/react:application <app-name> --directory apps/<app-name>
```
Replace <app-name> with the name of your application (e.g., main, admin, dashboard).

This command will:

- Generate a new React app in the apps/<app-name> directory.

- Set up all necessary configuration files (e.g., tsconfig.json, jest.config.ts).

- Add the app to the Nx workspace configuration.

2. Generate a New React Library
To create a reusable React library, run:

```bash 
npx nx g @nx/react:library <lib-name> --directory libs/<lib-name>
```
Replace <lib-name> with the name of your library (e.g., ui, utils, api).

This command will:

- Generate a new React library in the libs/<lib-name> directory.

- Set up the library with TypeScript, Jest, and ESLint configurations.

- Add the library to the Nx workspace configuration.

3. Generate a New React Component
To create a new React component inside an application or library, run:

```bash
npx nx g @nx/react:component <component-name> --project=<project-name>
```
Replace <component-name> with the name of your component (e.g., Header, Sidebar) and <project-name> with the name of the project where the component should be created.

This command will:

- Generate a new component in the specified project.

- Create the component file, styles, and test file.

- Update the project's exports if it's a library.

**To learn more about Nx and Nx generators check out [this tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)**

## Production Deployment
For production deployment, this project includes a `docker-compose.prod.yml` file optimized for running the REMR Stack in a production environment. This configuration ensures that all services (frontend, backend, MariaDB, and Redis) are built and run with production-ready settings.

### Steps to Deploy in Production
  **1. Build the Production Images**    
  Run the following command to build the Docker images for production:
  
  ```bash
  docker-compose -f docker-compose.prod.yml build
  ```
  This will:
  
  - Build the React frontend with production optimizations (e.g., minified code, tree-shaking).
  
  - Build the Express backend with production settings.
  
  - Prepare the MariaDB and Redis services for production use.

  **2. Start the Production Services**
  Once the images are built, start the services in detached mode (background):

  ```bash
  docker-compose -f docker-compose.prod.yml up -d
  ```

  This will:
  
  - Start the frontend on port 80 (or the port specified in the configuration).
  
  - Start the backend API on port 8000 (or the port specified in the configuration).
  
  - Start the MariaDB and Redis services.

  **3. Verify the Deployment**

  After starting the services, verify that everything is running correctly:

  Access the frontend at http://<your-server-ip>.

  Access the backend API at http://<your-server-ip>:8000/api.

  **4. Stop the Production Services**
  To stop the production services, run:
  
  ```bash
  docker-compose -f docker-compose.prod.yml down
  ```
  This will stop and remove all containers, networks, and volumes associated with the production deployment.

**Key Differences in `docker-compose.prod.yml`**

The `docker-compose.prod.yml` file is optimized for production with the following changes:

- **Frontend**: Uses a production build of the React app, served via a lightweight web server **nginx**.

- **Backend**: Runs the Express app with NODE_ENV=production for better performance and security.

- **Database**: Persists MariaDB data to a named volume to ensure data is not lost when containers are restarted.

- **Redis**: Uses a persistent volume for Redis data (if required).

- **Ports**: Exposes only the necessary ports (e.g., 80 for the frontend and 8000 for the backend).

**Scaling in Production**

To scale specific services (e.g., backend or frontend), you can use Docker Compose's scaling feature. For example, to scale the backend to 3 instances:

```bash
docker-compose -f docker-compose.prod.yml up -d --scale backend=3
```
This is useful for handling increased traffic or improving fault tolerance.


## Contributing
Contributions are welcome!


## License
This project is licensed under the Apache-2.0 License. See the LICENSE file for details.

## Acknowledgments

- [Nx](https://nx.dev/) for monorepo management.

- [React](https://reactjs.org/) for the frontend.

- [Express](https://expressjs.com/) for the backend.

- [MariaDB](https://mariadb.org/) for the database.

- [Redis](https://redis.io/) for caching.

- [Docker](https://www.docker.com/) for containerization.

---
Enjoy building with the REMR Stack Template! 🚀
---
