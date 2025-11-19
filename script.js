const graph = {
    "Surabaya": ["Malang", "Blitar", "Madiun", "Probolinggo", "Jember", "Lamongan"],
    "Malang": ["Surabaya", "Blitar"],
    "Blitar": ["Surabaya", "Malang", "Kediri", "Tulungagung"],
    "Kediri": ["Blitar", "Jombang", "Tulungagung"],
    "Tulungagung": ["Blitar", "Kediri", "Trenggalek"],
    "Trenggalek": ["Tulungagung"],
    "Jombang": [ "Kediri", "Madiun"],
    "Madiun": ["Surabaya", "Jombang", "Ponorogo"],
    "Ponorogo": ["Madiun"],
    "Lamongan": ["Surabaya", "Bojonegoro"],
    "Bojonegoro": ["Lamongan"],
    "Probolinggo": ["Surabaya", "Jember",],
    "Jember": ["Surabaya", "Probolinggo"],
    "Banyuwangi": ["Bondowoso"],
    "Bondowoso": ["Banyuwangi"]
};

const positions = {
    "Surabaya": { x: 600, y: 350 },
    "Malang": { x: 750, y: 550 },
    "Blitar": { x: 550, y: 580 },
    "Kediri": { x: 400, y: 500 },
    "Tulungagung": { x: 450, y: 650 },
    "Trenggalek": { x: 350, y: 720 },
    "Jombang": { x: 450, y: 400 },
    "Madiun": { x: 250, y: 320 },
    "Ponorogo": { x: 150, y: 450 },
    "Lamongan": { x: 550, y: 180 },
    "Bojonegoro": { x: 400, y: 120 },
    "Probolinggo": { x: 850, y: 320 },
    "Jember": { x: 1000, y: 480 },
    "Banyuwangi": { x: 1150, y: 580 },
    "Bondowoso": { x: 1200, y: 400 }
};

const selectA = document.getElementById("startCity");
const selectB = document.getElementById("endCity");
Object.keys(graph).forEach(c => {
    selectA.innerHTML += `<option>${c}</option>`;
    selectB.innerHTML += `<option>${c}</option>`;
});

const svg = document.getElementById("lines");

for (let kota in graph) {
    graph[kota].forEach(tujuan => {
        if (!positions[kota] || !positions[tujuan]) return;

        let x1 = positions[kota].x + 20;
        let y1 = positions[kota].y + 20;
        let x2 = positions[tujuan].x + 20;
        let y2 = positions[tujuan].y + 20;

        svg.innerHTML += `
      <line id="line-${kota}-${tujuan}"
      x1="${x1}" y1="${y1}"
      x2="${x2}" y2="${y2}"
      stroke="black" stroke-width="2">
      </line>`;
    });
}

for (let kota in positions) {
    const div = document.createElement("div");
    div.className = "node";
    div.id = `node-${kota}`;
    div.style.left = positions[kota].x + "px";
    div.style.top = positions[kota].y + "px";
    div.innerHTML = kota;
    document.getElementById("map").appendChild(div);
}

function BFS(start, goal) {
    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === goal) return path;
        if (!visited.has(node)) {
            visited.add(node);
            for (let tetangga of graph[node]) {
                queue.push([...path, tetangga]);
            }
        }
    }
    return null;
}

function clearHighlight() {
    document.querySelectorAll(".node").forEach(n => n.classList.remove("highlight"));
    document.querySelectorAll("line").forEach(l => {
        l.style.stroke = "black";
        l.style.strokeWidth = "2";
    });
}

function highlightPath(path) {
    for (let i = 0; i < path.length; i++) {
        document.getElementById(`node-${path[i]}`).classList.add("highlight");

        if (i < path.length - 1) {
            let a = path[i];
            let b = path[i + 1];
            let garis = document.getElementById(`line-${a}-${b}`) ||
                document.getElementById(`line-${b}-${a}`);
            if (garis) {
                garis.style.stroke = "red";
                garis.style.strokeWidth = "4";
            }
        }
    }
}

function reverseKota() {
    let temp = selectA.value;
    selectA.value = selectB.value;
    selectB.value = temp;
}

function cekRute() {
    clearHighlight();
    let start = selectA.value;
    let goal = selectB.value;
    let hasil = BFS(start, goal);

    if (!hasil) {
        routeOutput.innerHTML = "There's no route between " + start + " and " + goal + ".";
        return;
    }

    routeOutput.innerHTML = "Route:  " + hasil.join(" → ");
    highlightPath(hasil);
}