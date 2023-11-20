function randomGen(){

    const arr = [
    "Kdo chce, hledá způsob. Kdo nechce, hledá důvod.",
    "Pokud máš odvahu říci „sbohem“, život tě obdaří novým „vítej“.",
    "Největší dárek, který můžeš někomu dát, je tvůj čas, tvá pozornost a tvoje láska.",
    "Činy mluví hlasitěji než slova.",
    "Jsou lidé, díky kterým je svět krásnější prostě jen proto, že tu jsou.",
    "Každý den nemusí být krásný, ale na každém dni něco krásného je.",
    "Život začíná tam, kde končí strach.",
    "Upřímní lidé mají jednu obrovskou výhodu. Nemusejí si pamatovat, co komu řekli.",
    "Láska není to, co říkáte. Láska je to, co děláte.",
    "Arogance je parukou k zakrytí duševní pleše. ",
    "Když na někoho ukážu prstem, tři prsty ukazují zpátky na mě. ",


]

const random1 = arr[(Math.floor(Math.random()*(arr.length)))];
document.getElementById("outputGen").innerHTML = random1
console.log(random1);

}

switch (new Date().getQuote()) {
    case 0:
      quote = "Kdo chce, hledá způsob. Kdo nechce, hledá důvod.";
      break;
    case 1:
        quote  = "Pokud máš odvahu říci „sbohem“, život tě obdaří novým „vítej“.";
      break;
    case 2:
        quote = "Největší dárek, který můžeš někomu dát, je tvůj čas, tvá pozornost a tvoje láska.";
      break;
    case 3:
        quote = "Činy mluví hlasitěji než slova.";
      break;
    case 4:
        quote = "Jsou lidé, díky kterým je svět krásnější prostě jen proto, že tu jsou.";
      break;
    case 5:
        quote= "Každý den nemusí být krásný, ale na každém dni něco krásného je.";
      break;
    case 6:
        quote = "Život začíná tam, kde končí strach.";
  }