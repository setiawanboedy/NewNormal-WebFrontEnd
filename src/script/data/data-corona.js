function getDataIndonesia() {
    fetch('https://lintangwisesa.github.io/Indonesia-Covid19-Maps/data/indonesia.json')
    .then(response => response.json())
    .then(data => {

        let positif = data.Confirmed
        let sembuh = data.Recovered
        let meninggal = data.Deaths
        
        document.getElementById("data-positif").innerHTML = positif
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });

}
export default getDataIndonesia;