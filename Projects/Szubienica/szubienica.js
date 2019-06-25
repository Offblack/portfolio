const a1 = "Gdyby kózka nie skakała to by nóżki nie złamała";
const a2 = "Bez pracy nie ma kołaczy";
const a3 = "Cisza jak makiem zasiał";
const a4 = "Co cię nie zabije to cię wzmocni";
const a5 = "Dzieci i ryby głosu nie mają";
const a6 = "Głupi ma zawsze szczęście";
const a7 = "Pokiereszowana kierownica";
const a8 = "Nastroszenie jeżozwierza";
const a9 = "Kwas acetylosalicylowy ";
const a10 = "Wyindywidualizowany indywidualista";
const a11 = "Kogut myślał o niedzieli a w sobotę mu łeb ucięli";
const a12 = "Konstantynopolitańczykówna";
const a13 = "Transcendentalia";
const a14 = "Żółć";
const a15 = "Jazz";
const a16 = "Zwierzchnictwo";
const a17 = "Matemorfoza";
const a18 = "Prześladowanie";
const a19 = "Antyterrorysta";
const a20 = "Pięćdziesięciogroszówka";
const a21 = "Magnetoelektryczny";
const a22 = "Luminescencja";


const tab = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22];

var haslo = "";
haslo = tab[Math.ceil(Math.random()*tab.length-1)];


haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.mp3");
var lose = new Audio("lose.mp3");

for(i=0; i<dlugosc; i++)
{
        
        if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
        else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    
    document.getElementById("plansza").innerHTML = haslo1;
    
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


function start()
{
  
var tresc_diva = "";
    
for(i=0; i<=34; i++)
{
    var element = "lit" + i;
    
    tresc_diva = tresc_diva + '<div class="litera" id="'+element+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
    if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    
}
    document.getElementById("alfabet").innerHTML = tresc_diva;

    
    wypisz_haslo();
    
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    
    if(miejsce > this.length -1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
    
    var trafiona = false;
    
for(i=0; i<dlugosc; i++)
{        
    
    if(haslo.charAt(i) == litery[nr]) 
        {
          haslo1 = haslo1.ustawZnak(i,litery[nr]);
          trafiona = true;
        }
}

   if(trafiona==true)
    {
        
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.color = "#d55000";
        document.getElementById(element).style.border = "3px solid #d55000";
        document.getElementById(element).style.backgroundColor = "#fc996f";
        document.getElementById(element).style.cursor = "default";
        
        
        
        
        wypisz_haslo();
       
        
    }
    
    else if(trafiona==false)
        {
        
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.color = "#9e0000";
        document.getElementById(element).style.border = "3px solid #9e0000";
        document.getElementById(element).style.backgroundColor = "#ff4c64";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
            
            
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt=""/>';
        }
    
    if(haslo==haslo1)
        {
            
            win.play();
            document.getElementById("alfabet").innerHTML = '<br /><br />Tak jest! Wygrałeś! <br /> Poprawne hasło to:<br />'+haslo+'<br /><span class="onemore" onclick="location.reload()">JESZCZE RAZ?</span>';
            
        }
    
    else if(ile_skuch>=8)
        {
            
           lose.play();
           document.getElementById("alfabet").innerHTML = '<br /><br />Niestety! Przegrałeś! <br /> Poprawne hasło to:<br />'+haslo+'<br /><span class="onemore" onclick="location.reload()">JESZCZE RAZ?</span>'; 
        }
    
    
}





