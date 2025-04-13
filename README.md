# 🧩 Maze Solver Visualizer

A simple maze-solving visualizer using **Breadth-First Search (BFS)** built with HTML, Bootstrap, and JavaScript. This project takes a predefined 16x16 maze and finds the shortest path from a **Start (S)** point to a **Goal (G)** point. The path, once found, is marked with `*`.

## 🎮 Features

- 📏 16x16 grid maze with walls (`#`), open spaces (` `), a **Start** point (`S`), and a **Goal** point (`G`)
- 🔍 Uses **BFS algorithm** to find the shortest path
- ✨ Visualizes the solution by tracing the shortest path
- 🧠 Clean UI with easy-to-understand maze structure

## 🚀 Getting Started

 **Clone the repo**
```bash
git clone https://github.com/your-username/maze-solver-visualizer.git
cd maze-solver-visualizer

## 🧭 Running the Project

1. Open the `index.html` file in your browser  
2. No server setup needed – it's fully client-side!


## 🧠 How It Works

- The maze is represented as a **2D array**.
- The **Breadth-First Search (BFS)** algorithm explores the shortest path from the **Start (S)** to the **Goal (G)**.
- A **parent tracking array** is used to trace the final path.
- The solution path is visually marked with `*` and rendered in real time on the grid.


## 🕹️ Controls

- **Solve Maze**: Click the **Solve** button to compute and display the shortest path.
- **Visualize**: *This is yet to be implemented! Coming soon!


## 🧱 Maze Symbols

| Symbol | Meaning           |
|--------|-------------------|
| `S`    | Start Point       |
| `G`    | Goal Point        |
| `#`    | Wall / Obstacle   |
| (space)| Empty Space       |
| `*`    | Path from S to G  |


## 🧩 Technologies Used

- HTML 
- Bootstrap
- JavaScript (Vanilla)  
- BFS (Breadth-First Search) Pathfinding Algorithm  

