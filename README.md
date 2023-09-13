# CertiLedger

CertiLedger is a blockchain-based online certificate generation and validation system that provides a secure and transparent way to issue and verify certificates. This repository contains the source code and setup instructions for deploying CertiLedger.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Purpose](#purpose)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Certificate Generation:** Easily create and issue certificates online.
- **Blockchain Integration:** Utilizes blockchain technology for secure certificate storage and verification.
- **Dockerized:** The application is containerized using Docker for easy deployment.
- **Code Quality:** Includes ESLint for code linting and Prisma for database management.
- **React and Redux:** Front-end built with ES7+ React and Redux.
- **Tailwind CSS:** Utilizes Tailwind CSS for a responsive and customizable UI.

## Tech Stack

- [Docker](https://www.docker.com/)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [DotENV](https://github.com/motdotla/dotenv)
- [ES7+ React/Redux/React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://eslint.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Purpose

The purpose of CertiLedger is to provide a secure and efficient way to issue and validate certificates in various domains, ensuring the integrity and authenticity of the certification process. This project was created as a response to a topic in the Smart India Hackathon, aiming to address the challenges of certificate fraud and verification.

## Getting Started

To get started with CertiLedger, follow these steps:

1. Clone this repository: `git clone https://github.com/yourusername/CertiLedger.git`
2. Install the required dependencies.
3. Set up your environment variables using a `.env` file.
4. Build and run the Docker container.

```bash
# Example .env file:
DATABASE_URL=your_database_connection_string
SECRET_KEY=your_secret_key
# Add other environment variables as needed
