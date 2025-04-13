const rows = 16;
const cols = 16; 

const maze = [
    ['S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ', '#', ' ', ' '],
    [' ', '#', ' ', '#', '#', '#', '#', '#', '#', ' ', ' ', '#', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', '#', '#', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', '#', ' ', '#', '#', ' ', '#', ' ', '#', '#', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', '#', '#', '#', ' ', '#', ' ', '#', ' ', '#', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#', '#', ' ', ' ', ' ', ' '],
    [' ', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '#', '#', '#', '#', '#', 'G', '#', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', '#', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' '],
    [' ', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ']
];



const directions = { 'D': [1, 0], 'L': [0, -1], 'U': [-1, 0], 'R': [0, 1] };

// Create a grid and display it
function createMazeGrid() {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = ''; // Clear existing maze

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = maze[i][j];
           
            if (maze[i][j] === '#') {
                cell.classList.add('wall');
            } else if (maze[i][j] === ' ') {
                cell.classList.add('empty');
            } else if (maze[i][j] === 'S') {
                cell.classList.add('start');
            } else if (maze[i][j] === 'G') {
                cell.classList.add('goal');
            }else{
                cell.classList.add('path');
            }
            mazeElement.appendChild(cell);
        }
    }
}

// Check if the position is valid
function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
}

// Solve the maze using BFS
function solveMaze() {
    const distance = Array.from({ length: rows }, () => Array(cols).fill(-1));
    const parent = Array.from({ length: rows }, () => Array(cols).fill(null));

    const start = findStart();
    const goal = findGoal();

    if (!start || !goal) {
        alert("Start or Goal not defined.");
        return;
    }

    const queue = [start];
    distance[start[0]][start[1]] = 0;

    while (queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();

        if (currentRow === goal[0] && currentCol === goal[1]) {
            tracePath(parent, start, goal);
            return;
        }

        for (const [dir, [dr, dc]] of Object.entries(directions)) {
            const newRow = currentRow + dr;
            const newCol = currentCol + dc;

            if (isValid(newRow, newCol) && maze[newRow][newCol] !== '#' && distance[newRow][newCol] === -1) {
                distance[newRow][newCol] = distance[currentRow][currentCol] + 1;
                parent[newRow][newCol] = [currentRow, currentCol];
                queue.push([newRow, newCol]);
            }
        }
    }

    alert("No Path");
}

// Find the starting position 'S'
function findStart() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                return [i, j];
            }
        }
    }
    return null;
}

// Find the goal position 'G'
function findGoal() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'G') {
                return [i, j];
            }
        }
    }
    return null;
}

// Trace and mark the path from start to goal
function tracePath(parent, start, goal) {
    let current = goal;
    while (current && current[0] !== start[0] || current[1] !== start[1]) {
        const [r, c] = current;
        maze[r][c] = '*';
        current = parent[r][c];
    }
    maze[start[0]][start[1]] = 'S';
    maze[goal[0]][goal[1]] = 'G';
    createMazeGrid(); // Update the maze display
}


document.querySelector(".btnSolve").addEventListener("click", () => {
    solveMaze();
});

document.querySelector(".btnVisualize").addEventListener("click",() =>{
    visualizeMazeSolving();
});


createMazeGrid(); // Initial maze display
