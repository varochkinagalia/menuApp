# Menu App 

A simple Angular application demonstrating a two-page layout with a checkbox-based menu. The app displays a welcome page with a link to the menu page, where users can select items and see real-time updates of selected count and total sum in the header.
It was built with HTML5, CSS, TypeScript, Angular 21. Also there is no backend – static JSON data.


## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)


## Installation

1. **Clone or download the repository**

2. **Open the project folder in your terminal**

3. **Install dependencies**

   ```bash
   npm install
   ```

## Running the Application

You need to run **one command** in terminal window:

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## How to Use

The application consists of two pages:

### 1. Welcome Page
Displays a greeting message and a link to the menu page.

### 2. Menu Page
The header shows: the current section name (Breakfast / Lunch / Dinner), number of selected items in the current section, total sum of selected items

The main shows: a sidebar provides buttons to switch between three sections: Breakfast, Lunch, Dinner. Each section contains a list of dishes with checkboxes. Checking/unchecking a dish immediately updates the header counters. The selected state of dishes persists when switching between sections.

### Navigation
Click the button on the welcome page to go to the menu.
Use the sidebar buttons to navigate between sections and choose dishes.