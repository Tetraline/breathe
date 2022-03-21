function buildGrid() {
  boxesDiv = document.getElementById("boxes");
  for (let i = 0; i < 25; i++) {
    let box = document.createElement("div");
    box.classList.add("grey");
    box.classList.add("box");
    box.setAttribute("id", i);
    boxesDiv.appendChild(box);
  }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function animate() {
  for (let i = 0; i < 25; i++) {
    box = document.getElementById(i);
    box.classList.remove("grey");
    box.classList.add("green");
    await delay(8500);
  }
}

buildGrid();
animate();
