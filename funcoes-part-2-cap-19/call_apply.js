function teste(str, n) {
    console.log(this)
    console.log(str, n)
}

teste("string", 10)