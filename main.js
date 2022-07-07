function krediHesapla(){


    var cekilecekTutar, vadeSayisi, fOran, yurutulenZaman; // Girilne değerler
    var aylikTaksit, odenecekToplamTutar;// Sonuc değerleri 

    cekilecekTutar = document.getElementById("txtKrediTutari").value; // anapara
    fOran          = document.getElementById("foran").value;//faiz oranı
    yurutulenZaman = document.getElementById("yurutulenZaman").value; // faiz ödeme zamanı
    girilenZaman   = document.getElementById("girilenZaman").value;
    vadeSayisi     = document.getElementById("listeVade").value;

    


    if(yurutulenZaman == "Yıllık"){
      var yuru = parseInt(girilenZaman)/100;
    } else if(yurutulenZaman == "Aylık"){
      var yuru = parseInt(girilenZaman)/1200; 
    } else if(yurutulenZaman == "Günlük"){
      var yuru = parseInt(girilenZaman)/36500;
    }
    odenecekToplamTutar= cekilecekTutar * (1+(fOran*yuru));
   
    if(vadeSayisi == "12" ){
      var aylikTaksit = odenecekToplamTutar/12;
    } else if(vadeSayisi =="24"){
      var aylikTaksit = odenecekToplamTutar/24;
    } else if(vadeSayisi=="36"){
      var aylikTaksit = odenecekToplamTutar/36;
    }else if(vadeSayisi =="48"){
      var aylikTaksit = odenecekToplamTutar/48;
    }




    
    


    

  


    document.querySelector("#sonuc").innerHTML = "Geri ödeme toplamı : "+ odenecekToplamTutar.toFixed(2) + " ₺<br>" +"Aylık taksit tutarınız : "+ aylikTaksit.toFixed(2) + " ₺";
}