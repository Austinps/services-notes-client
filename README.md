# Services Notes Client

This project is the client-side application for managing customer notes across a team.

## Installation

To use this client application, you need to have Node.js installed on your system. Clone the repository and navigate to the project directory. Then, run the following command to install the dependencies:

npm install

## Usage

To start the client application in development mode, use the following command:

npm run dev
This will start the development server using Vite, and you can access the client application in your web browser.

To build the client application for production, run the following command:

npm run build
This will compile the TypeScript code and generate a production-ready build in the dist directory.

## Dependencies

This client application has the following dependencies:

@fortawesome/fontawesome-svg-core: ^6.4.0
@fortawesome/free-solid-svg-icons: ^6.4.0
@fortawesome/react-fontawesome: ^0.2.0
react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.11.2
These dependencies are automatically installed when running the npm install command.

Development Dependencies
This client application has the following development dependencies:

@types/react: ^18.0.28
@types/react-dom: ^18.0.11
@typescript-eslint/eslint-plugin: ^5.57.1
@typescript-eslint/parser: ^5.57.1
@vitejs/plugin-react-swc: ^3.0.0
eslint: ^8.38.0
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.3.4
typescript: ^5.0.2
vite: ^4.3.2
These development dependencies are used for linting, type checking, and bundling the client application.

## Project Structure

The project structure is as follows:

components/: Directory for common components used in the application.
features/auth/: Directory for authentication-related components and features.
features/notes/: Directory for note-related components and features.
features/users/: Directory for user-related components and features.
App.tsx: The main entry point of the application.
index.tsx: The entry point for rendering the application in the DOM.

## License

This project is private and the license information is not available.
