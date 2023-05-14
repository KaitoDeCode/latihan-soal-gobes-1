function ubahLatar () {
    const inputHexa = document.getElementById("inputHexa");
    
    let warna = inputHexa.value;
    
    document.getElementById("targetObject").style.backgroundColor = warna
}
