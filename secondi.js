function nuovoPiatto(nomeImmagine, descrizione, prezzo){
    return  `<article class='voce-piatto'>
                <img class='immagine-piatto' src='Immagini/`+ nomeImmagine + `.jpg' alt=''>
                <div class='descrizione-piatto'>` + descrizione + `<br>` + prezzo + `</div>
            </article>`;
}


var elencoPiattiDiCarne = [
    piatto1 = {
        nomeImmagine: "carnePollo",
        descrizione: "Pollo arrosto",
        prezzo: "€13,50"
    },

    piatto2 = {
        nomeImmagine: "carneFiletto",
        descrizione: "Filetto di manzo",
        prezzo: "€15,00"
    },

    piatto3 = {
        nomeImmagine: "carneTagliataDiPollo",
        descrizione: "Tagliata di pollo",
        prezzo: "€14,00"
    },

    piatto4 = {
        nomeImmagine: "carneGulashDiCervo",
        descrizione: "Gulash di cervo",
        prezzo: "€14,50"
    }
];

var colonnaPiattiDiCarne = "";
elencoPiattiDiCarne.forEach(piattoDiCarne => {
    colonnaPiattiDiCarne += nuovoPiatto(piattoDiCarne.nomeImmagine, piattoDiCarne.descrizione, piattoDiCarne.prezzo);
});



var elencoPiattiDiPesce = [
    piatto1 = {
        nomeImmagine: "pesceSalmone",
        descrizione: "Salmone al forno",
        prezzo: "€13,00"
    },

    piatto2 = {
        nomeImmagine: "pesceTonnoGratinato",
        descrizione: "Tonno gratinato al forno",
        prezzo: "€13,00"
    },

    piatto3 = {
        nomeImmagine: "pesceBranzino",
        descrizione: "Branzino al forno",
        prezzo: "€12,00"
    },

    piatto4 = {
        nomeImmagine: "pesceInsalataDiMare",
        descrizione: "InsalataDiMare",
        prezzo: "€14,00"
    }
];

var colonnaPiattiDiPesce = "";
elencoPiattiDiPesce.forEach(piattoDiPesce => {
    colonnaPiattiDiPesce += nuovoPiatto(piattoDiPesce.nomeImmagine, piattoDiPesce.descrizione, piattoDiPesce.prezzo);
});


async function onLoad_Setup(){
    let colonna1 = document.getElementById("colonna1");
    colonna1.innerHTML = "<h3>Carne</h3>" + colonnaPiattiDiCarne;

    let colonna2 = document.getElementById("colonna2");
    colonna2.innerHTML = "<h3>Pesce</h3>" + colonnaPiattiDiPesce;
}

/*var piattiDiCarne = [];
for (let i = 0; i < elencoPiattiDiCarne.length; i++){
    piattiDiCarne.push(nuovoPiatto(elencoPiattiDiCarne[i].nomeImmagine, elencoPiattiDiCarne[i].descrizione));
}

var colonnaPiattiDiCarne = "";
piattiDiCarne.forEach(piatto => {
    colonnaPiattiDiCarne += piatto;
});*/

/*var piattiDiCarne = [
    nuovoPiatto("carnePollo", "Pollo arrosto"),
    nuovoPiatto("carneFiletto", "Filetto di manzo"),
    nuovoPiatto("carneTagliataDiPollo", "Tagliata di pollo"),
    nuovoPiatto("carneGulashDiCervo", "Gulash di cervo"),
    nuovoPiatto("carneGulashDiCervo", "Gulash di cervo")
];*/