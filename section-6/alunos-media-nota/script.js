function calcularMedia() {
    const trs = document.querySelectorAll("tbody tr")

    let x = 0;
    while(trs[x]) {
        console.log(trs[x])
        
        const tds = trs[x].querySelectorAll("td")
        console.log(tds)
        x++
    }
}

calcularMedia();