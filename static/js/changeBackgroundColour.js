function changeBackgroundColour() {
    document.getElementById("mainBody");
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const paddedColor = randomColor.padEnd(7, '0');
    document.body.style.backgroundColor = paddedColor;
}
