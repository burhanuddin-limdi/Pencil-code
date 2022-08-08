// MAIN LOGIC
function Run() {
  let html = document.querySelector("#html").value;
  let css = "<style>" + document.querySelector("#css").value + "</style>";
  let js = document.querySelector("#js").value;
  var frame = document.getElementById("code");
  var jsRun = document.getElementById("code").contentWindow;
  var frame = frame.contentWindow || frame.contentDocument;
  if (frame.document) frame = frame.document;

  frame.open();
  frame.write(html + css);
  jsRun.eval(js);
  frame.close();
}
window.addEventListener("keyup", () => {
  Run();
});
//-x-x-x-x-x-//
//RESIZE LOGIC//
var direction = null;
rightDrag = () => {
  direction = "right";
};
leftDrag = () => {
  direction = "left";
};
endDrag = () => {
  direction = null;
};
drag = (event) => {
  if (direction !== null) {
    let page = document.querySelector("main");

    let leftCol = document.querySelector("#html");
    let rightCol = document.querySelector("#js");
    const fixleft = leftCol.clientWidth;
    const fixRight = rightCol.clientWidth;

    let leftColWidth =
      direction === "left" ? event.clientX : leftCol.clientWidth + 2;
    let rightColWidth =
      direction === "right"
        ? page.clientWidth - event.clientX
        : rightCol.clientWidth + 2;

    let dragBarWidth = 10;
    let colWidths = [
      leftColWidth,
      dragBarWidth,
      page.clientWidth - 2 * dragBarWidth - leftColWidth - rightColWidth,
      dragBarWidth,
      rightColWidth,
    ];
    colWidths = colWidths.map((c) => c.toString() + "px");
    let newCols = colWidths.join(" ");
    page.style.gridTemplateColumns = newCols;
    console.log(direction);
  }
};
