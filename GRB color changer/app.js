const colorChangerBtn = document.querySelector("#background-color-change");
const root = document.querySelector("#root");


const showColorName = document.querySelector(".colorName")



colorChangerBtn.addEventListener('click', function () {
    const RGBColor = genaratorRGBColor();
    root.style.backgroundColor = RGBColor ;
    
    showColorName.innerHTML = ` color :  ${RGBColor};`
    showColorName.style.color = RGBColor ;
})

function genaratorRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb( ${red},${green},${blue})`

}