# Todo List App

## Overview
This is a Todo List application built using React and Vite. It allows users to create, update, search, and mark tasks as done. The tasks are displayed in an expandable list format, showing a description and a timestamp of the last update when expanded.

## Features
- Create Task
- Update Task
- Mark as Done
- Search Tasks
- Expandable List

## System Design
- **Frontend**: React
- **Build Tool**: Vite
- **Data Storage**: Dummy JSON file in the public directory

## Implementation
The application is structured into components to handle different functionalities:
- **TaskList**: Displays the list of tasks and handles search functionality.
- **TaskItem**: Displays individual task details.
- **TaskForm**: Form to create new tasks.
- **SearchBar**: Input for searching tasks.

## Setup and Run
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open the application in your browser at `http://localhost:3000`

## Bonus Features
- URL parameters are used to handle search queries.
- The application is easily adaptable for future enhancements.
- Basic styling is applied for a better user experience.
