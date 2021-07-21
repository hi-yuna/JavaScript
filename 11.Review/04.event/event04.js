const imgarr = ["a.jpg", "b.jpg", "c.jpg"];
let idx = 0;

const prev = () => {
  const img = document.getElementById("my");
  idx--;
  if (idx == -1) {
    idx = 0;
  }
  img.src = imgarr[idx];
  document.getElementById("result").innerHTML = imgarr[idx];
};

const next = () => {
  const img = document.getElementById("my");
  idx++;
  if (idx == 3) {
    idx = 2;
  }
  img.src = imgarr[idx];
  document.getElementById("result").innerHTML = imgarr[idx];
};
