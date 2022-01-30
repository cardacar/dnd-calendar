//Generador de color aleatorio
export const randomColorGenerate = ()=>{
    let maxValue = 0xFFFFFF;
    let randomNumber = Math.random()*maxValue;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0)
    return randomColor;
}