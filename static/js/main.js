window.onload = function() {
    document.getElementById("sendRegistration").onclick = function () {
        var vards = document.getElementById('vards').value;
        var uzvards = document.getElementById('uzvards').value;
        var telnr = document.getElementById('telnr').value;
        var pkods = document.getElementById('pkods').value;
        var epasts = document.getElementById('epasts').value;
        var parole = document.getElementById('parole').value;
        var dati = new data({
            vards: vards,
            uzvards: uzvards,
            telnr: telnr,
            pkods: pkods,
            epasts: epasts,
            parole: parole
        })
        console.log(JSON.stringify(dati));
    }
}