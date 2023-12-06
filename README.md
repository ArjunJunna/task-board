## Project Overview

This project utilizes React, React Router DOM, Axios and TypeScript to create a dynamic web application focused on task management.

Click here for live preview - [Task-Board](https://task-board-onq6.onrender.com/)

 **Features**
 
 1. Task Board layout, Drag-and-Drop functionality and Task cards.
 2. Task metrics visualization.
 3. Search functionality, which will search by task name from any group (Ready/In progress/Testing/Done).
 4. Filters by assignee, filter by severity of the task.
 5. Unique colors / badges to each task based on severity (High/Medium/Low).
 6. Light and dark mode functionality.

### Design Decisions

1. **Technology Stack:** Leveraged React's ecosystem for its component-based architecture, React Router DOM for navigation, Axios to fetch data and TypeScript for type safety.
2. **State Management:** Utilized React's state and context API for managing global state concerning tasks and user interactions.
3. **Styling:** Incorporated plain CSS for styling.
4. **Data Visualization:** Utilized Chart.js to visually represent task metrics through bar charts.

### Challenges Faced

1. **Data Mapping to Charts:** Formatting data to fit Chart.js requirements was challenging.

### Potential Improvements

1. **CRUD Functionality:** Implement full CRUD operations for tasks, enabling users to create, read, update, and delete tasks.
2. **Additional Pages:** Introduce separate pages such as archives, trash, or a detailed task view.
3. **Enhanced Modal:** Develop a dedicated modal for entering task details, enhancing user experience.
4. **Authentication & User Accounts:** Incorporate user authentication for managing user-specific tasks and settings securely.
5. **Data Persistence:** Introduce backend (like a database or server) for persistent storage of tasks and user data.
6. **Enhanced Data Visualization:** Explore advanced visualization techniques or additional chart types for better insights into task metrics.

## Running the React App with Vite

### Prerequisites

- **Node.js:** Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).
- **Git:** Install Git if not already available. Download from [git-scm.com](https://git-scm.com/).

### Clone the Repository

1. Open a terminal or command prompt.
2. Clone the repository using Git:
   ```bash
   git clone <repository-url>
3. cd your-project-folder  
4. npm install
5. npm run dev

