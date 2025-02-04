import React from 'react';

const Home = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Header with Image */}
      <div className="text-center mb-8">
        <img
          src="https://github.com/user-attachments/assets/7cbd1715-37f4-4c9d-9feb-370ad86b4dc8"
          alt="REMR Stack"
          className="mx-auto rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">REMR Stack Template</h1>
        <p className="text-lg text-gray-600 mt-2">
          A modern, full-stack development template using <strong>Nx Monorepo, React, Express, MariaDB,
          Redis,</strong> and <strong>Docker</strong>. This project is designed to help you quickly bootstrap a scalable
          and containerized full-stack application.
        </p>
      </div>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Nx Monorepo</strong>: Manage frontend and backend code in a single repository with built-in tooling
            for dependency management, code generation, and more.
          </li>
          <li>
            <strong>React</strong>: A powerful frontend library for building user interfaces.
          </li>
          <li>
            <strong>Express</strong>: A lightweight backend framework for building RESTful APIs.
          </li>
          <li>
            <strong>MariaDB</strong>: A robust, open-source relational database.
          </li>
          <li>
            <strong>Redis</strong>: A high-performance in-memory data store for caching and session management.
          </li>
          <li>
            <strong>Docker</strong>: Containerization for easy development, testing, and deployment.
          </li>
        </ul>
      </section>

      {/* Prerequisites Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        <p className="mb-4">Before you begin, ensure you have the following installed:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Node.js</strong> (v16 or higher recommended)</li>
          <li><strong>Docker</strong> (v20 or higher recommended)</li>
          <li><strong>Docker Compose</strong> (v2 or higher recommended)</li>
          <li><strong>Nx CLI</strong> (optional but recommended for better developer experience)</li>
        </ul>
      </section>

      {/* Getting Started Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <div className="space-y-6">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Clone the Repository</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>git clone https://github.com/zanvencelj/remr-stack-template.git</code>
              <br/>
              <code>cd remr-stack-template</code>
            </pre>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Install Dependencies</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>yarn install</code>
            </pre>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Set Up Environment Variables</h3>
            <p className="mb-2">
              Edit the <code>docker-compose.yml</code> and <code>docker-compose.prod.yml</code> files to include your
              specific configuration (e.g., database credentials, Redis connection details).
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Start the Application with Docker</h3>
            <p className="mb-2">
              This project uses Docker Compose to manage the backend services (Express, MariaDB, Redis). To start the
              application, run:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>docker-compose up --build</code>
            </pre>
            <p className="mt-2">
              Once the containers are running, you can access:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Backend API</strong>: <code>http://localhost:8000/api</code></li>
            </ul>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Start the Frontend</h3>
            <p className="mb-2">
              In development, the frontend is run directly from the terminal. To start the frontend development server,
              use one of the following commands:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>yarn start:main</code>
              <br/>
              <code>npx nx run &lt;app-name&gt;:serve</code>
            </pre>
            <p className="mt-2">
              Replace <strong>&lt;app-name&gt;</strong> with the name of your frontend app (e.g., <code>main</code>).
            </p>
            <p className="mt-2">
              Once this is running, you can access:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Frontend</strong>: <code>http://localhost:4200</code></li>
            </ul>
          </div>

          {/* Running Multiple Frontend Apps */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Running Multiple Frontend Apps</h3>
            <p className="mb-2">
              If your project contains multiple frontend applications, you can configure
              the <code>package.json</code> scripts to run multiple projects simultaneously. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>nx run-many --target=serve --projects=&lt;app1&gt;,&lt;app2&gt;,&lt;app3&gt;</code>
            </pre>
            <p className="mt-2">
              Replace <strong>&lt;app1&gt;, &lt;app2&gt;, &lt;app3&gt;</strong> with the names of your frontend apps.
              This command will start all specified apps in parallel.
            </p>
          </div>

          {/* Step 6 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">6. (Optional) Run Without Docker</h3>
            <p className="mb-2">
              If you prefer to run the application locally without Docker:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>yarn start:backend</code>
            </pre>
            <p className="mt-2">
              Make sure MariaDB and Redis are running locally and properly configured in
              your <strong>.env</strong> file.
            </p>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
        <p className="mb-4">
          The project is organized as an Nx Monorepo with the following structure:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`remr-stack-template/
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
└── README.md                # This file`}
          </code>
        </pre>
      </section>

      {/* Available Scripts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Scripts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><code>start:main</code>: Starts the frontend in development mode (without Docker).</li>
          <li><code>build:main</code>: Builds the frontend for production.</li>
          <li><code>test:main</code>: Runs tests for frontend apps.</li>
          <li><code>lint:main</code>: Lints the monorepo project defined in scripts.</li>
          <li><code>e2e:main</code>: Runs e2e tests for monorepo project defined in scripts.</li>
          <li><code>start:backend</code>: Starts the Express server.</li>
        </ul>
      </section>

      {/* Docker Configuration Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Docker Configuration</h2>
        <p className="mb-4">
          The <code>docker-compose.yml</code> file defines the following services:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>backend</strong>: Express app served on port 8000.</li>
          <li><strong>mariadb</strong>: MariaDB database.</li>
          <li><strong>redis</strong>: Redis server for caching.</li>
        </ul>
        <p className="mt-4">
          You can customize the Docker configuration by editing the <code>docker-compose.yml</code> file or the
          individual Dockerfiles.
        </p>
      </section>

      {/* Production Deployment Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Production Deployment</h2>
        <p className="mb-4">
          For production deployment, this project includes a <code>docker-compose.prod.yml</code> file optimized for
          running the REMR Stack in a production environment. This configuration ensures that all services (frontend,
          backend, MariaDB, and Redis) are built and run with production-ready settings.
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Build the Production Images</h3>
            <p className="mb-2">
              Run the following command to build the Docker images for production:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>docker-compose -f docker-compose.prod.yml build</code>
            </pre>
            <p className="mt-2">
              This will:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Build the React frontend with production optimizations (e.g., minified code, tree-shaking).</li>
              <li>Build the Express backend with production settings.</li>
              <li>Prepare the MariaDB and Redis services for production use.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Start the Production Services</h3>
            <p className="mb-2">
              Once the images are built, start the services in detached mode (background):
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>docker-compose -f docker-compose.prod.yml up -d</code>
            </pre>
            <p className="mt-2">
              This will:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Start the frontend on port 80 (or the port specified in the configuration).</li>
              <li>Start the backend API on port 8000 (or the port specified in the configuration).</li>
              <li>Start the MariaDB and Redis services.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Verify the Deployment</h3>
            <p className="mb-2">
              After starting the services, verify that everything is running correctly:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Access the frontend at <code>http://&lt;your-server-ip&gt;</code>.</li>
              <li>Access the backend API at <code>http://&lt;your-server-ip&gt;:8000/api</code>.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Stop the Production Services</h3>
            <p className="mb-2">
              To stop the production services, run:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>docker-compose -f docker-compose.prod.yml down</code>
            </pre>
            <p className="mt-2">
              This will stop and remove all containers, networks, and volumes associated with the production deployment.
            </p>
          </div>
        </div>

        {/* Key Differences in docker-compose.prod.yml */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Key Differences in <code>docker-compose.prod.yml</code></h3>
          <p className="mb-2">
            The <code>docker-compose.prod.yml</code> file is optimized for production with the following changes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Frontend</strong>: Uses a production build of the React app, served via a lightweight web
              server <strong>nginx</strong>.
            </li>
            <li><strong>Backend</strong>: Runs the Express app with <code>NODE_ENV=production</code> for better
              performance and security.
            </li>
            <li><strong>Database</strong>: Persists MariaDB data to a named volume to ensure data is not lost when
              containers are restarted.
            </li>
            <li><strong>Redis</strong>: Uses a persistent volume for Redis data (if required).</li>
            <li><strong>Ports</strong>: Exposes only the necessary ports (e.g., 80 for the frontend and 8000 for the
              backend).
            </li>
          </ul>
        </div>

        {/* Scaling in Production */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Scaling in Production</h3>
          <p className="mb-2">
            To scale specific services (e.g., backend or frontend), you can use Docker Compose's scaling feature. For
            example, to scale the backend to 3 instances:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code>docker-compose -f docker-compose.prod.yml up -d --scale backend=3</code>
          </pre>
          <p className="mt-2">
            This is useful for handling increased traffic or improving fault tolerance.
          </p>
        </div>
      </section>

      {/* Contributing Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contributing</h2>
        <p className="mb-4">Contributions are welcome!</p>
      </section>

      {/* License Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">License</h2>
        <p className="mb-4">
          This project is licensed under the <strong>Apache-2.0 License</strong>. See the <code>LICENSE</code> file for
          details.
        </p>
      </section>

      {/* Acknowledgments Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://nx.dev/" className="text-blue-600 hover:underline">Nx</a> for monorepo management.</li>
          <li><a href="https://reactjs.org/" className="text-blue-600 hover:underline">React</a> for the frontend.</li>
          <li><a href="https://expressjs.com/" className="text-blue-600 hover:underline">Express</a> for the backend.
          </li>
          <li><a href="https://mariadb.org/" className="text-blue-600 hover:underline">MariaDB</a> for the database.
          </li>
          <li><a href="https://redis.io/" className="text-blue-600 hover:underline">Redis</a> for caching.</li>
          <li><a href="https://www.docker.com/" className="text-blue-600 hover:underline">Docker</a> for
            containerization.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Enjoy building with the REMR Stack Template! 🚀</h2>
      </section>
    </div>
  );
}

export default Home;
