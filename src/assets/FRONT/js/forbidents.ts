const root = document.documentElement;
const eyef = document.getElementById('eyef') as unknown as SVGElement;
let cx = parseFloat(eyef.getAttribute("cx")!);
let cy = parseFloat(eyef.getAttribute("cy")!);

document.addEventListener("mousemove", evt => {
  const x = evt.clientX / innerWidth;
  const y = evt.clientY / innerHeight;

  root.style.setProperty("--mouse-x", x.toString());
  root.style.setProperty("--mouse-y", y.toString());
  
  cx = 115 + 30 * x;
  cy = 50 + 30 * y;
  eyef.setAttribute("cx", cx.toString());
  eyef.setAttribute("cy", cy.toString());
});

document.addEventListener("touchmove", touchHandler => {
  const x = touchHandler.touches[0].clientX / innerWidth;
  const y = touchHandler.touches[0].clientY / innerHeight;

  root.style.setProperty("--mouse-x", x.toString());
  root.style.setProperty("--mouse-y", y.toString());
});