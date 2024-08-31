# viatick-backend

Welcome to the Viatick Backend repository! This project provides the backend services for the Viatick application, a platform designed to manage and analyze data efficiently.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Data management with Prisma ORM.
- RESTful API endpoints for various operations.
- Middleware for date formatting and other functionalities.
- Configurable carbon footprint categories.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **Prisma**: ORM for database interaction.
- **Date-fns**: Date manipulation and formatting.
- **MySQL**: Database for storing data.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Kyaw-Thi-Ha-Lin/viatick-backend.git

2. **Navigate to the Project Directory**

   ```bash
   cd viatick-backend

3. **Install Dependencies**

   ```bash
   npm install

4. **Copy .env.example**

   ```bash
   cp .env.example .env

5. **Set up DB in .env**

6. **Run Migration**

   ```bash
   npx prisma migrate dev --name=init

7. **Seeding Database**

   ```bash
   npx prisma db seed
