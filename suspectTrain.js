

let tour = 0;
const wagon = 5;
//Math.floor(Math.random() * 10) + 1;
//console.log(wagon);
for(tour = 1; tour<5; tour++) {
if(tour < 5){
    let tahmin = prompt("tahminini gir");
    let frontWagon = Math.floor(Math.random() * tahmin) + 1;
    let backWagon = Math.floor(Math.random() * 10) + (tahmin + 1);
    tour++;
    if(tahmin == wagon){
        console.log("Bravooo kazandin");
    }
    else if(tahmin < wagon){
        
        tahmin = frontWagon;
        
        console.log("Hirsiz arka vagonlarda");
    }
    else if(tahmin > wagon){
        
        tahmin = backWagon;
       
        console.log("Hirsiz ön vagonlarda");
    }
    else{
        console.log("üzgünüm kaybettin");
    }

}
else{ console.log("hakkin kalmadi");}

}





