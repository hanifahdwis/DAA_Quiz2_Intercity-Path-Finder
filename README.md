# Intercity Path Finder

**Intercity Path Finder** is a web-based tool designed to demonstrate the **Breadth-First Search (BFS)** algorithm by calculating the shortest route between various cities in East Java, Indonesia.


## Overview

This project models a map of cities as a **Graph**, where cities represent *nodes* and the roads connecting them represent *edges*. Users can select a starting point and a destination to visualize how the algorithm traverses the graph to find the optimal connection.

## Features

* **Interactive Route Checking:** Select a Start City and End City from the dropdown menu.
* **BFS Algorithm Implementation:** Uses Breadth-First Search to ensure the shortest path is found in an unweighted graph.
* **Visual Graph Representation:**
    * Cities are dynamically rendered as nodes based on coordinate data.
    * Connections are drawn using SVG lines.
* **Dynamic Highlighting:** The calculated path is visually highlighted on the map (changing nodes to purple and lines to red) for easy tracking.
* **Route Reversal:** A quick-swap button to reverse the starting and destination points.
* **Responsive UI:** Clean, pastel-themed user interface styled with CSS3.

## Tech Stack

* **HTML:** Structure of the application and SVG container.
* **CSS:** Styling, flexbox layout, and visual transitions (`.highlight` class).
* **JavaScript:**
    * Graph data structure implementation (Adjacency List).
    * BFS Logic.
    * DOM manipulation for rendering nodes and lines.

## How it Works

1.  **The Data:** The map is stored as an object where keys are cities (e.g., "Surabaya", "Malang") and values are arrays of neighboring cities.
2.  **The Algorithm:** When "Check Route" is clicked, the `BFS()` function initializes a queue and a visited set. It explores neighbor nodes layer-by-layer until the target city is found.
3.  **The Visualization:** The script iterates through the result path and applies the `.highlight` CSS class to the relevant HTML elements.

## 📦 Installation & Usage

1.  Clone the repository:
    ```bash
    git clone [https://github.com/yourusername/intercity-path-finder.git](https://github.com/yourusername/intercity-path-finder.git)
    ```
2.  Navigate to the project folder.
3.  Open `index.html` in any modern web browser.
4.  Click the image to enter the main application, select your cities, and hit **Check Route**.

## 🗺️ Map Coverage

The current dataset includes connections for the following cities:
*Surabaya, Malang, Blitar, Kediri, Tulungagung, Trenggalek, Jombang, Madiun, Ponorogo, Lamongan, Bojonegoro, Probolinggo, Jember, Banyuwangi, Bondowoso*.
