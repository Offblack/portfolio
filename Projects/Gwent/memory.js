var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

var pair = false;
var another_number;
var PairsLeft = 6;
var TurnCounter = 0;
lock = false;

function revealCard(nr)
{
    
    var opacityValuse = $('#c'+nr).css('opacity');
    

    
    if( opacityValuse != 0 && lock == false)
    {
        
        lock = true;
        
        var one_Card = "url(img/"+cards[nr]+")"; 
        
        $('#c'+nr).css('background-image', one_Card);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
        
        
    if(pair == false)
    {
        pair = true;
        another_number = nr;
        lock = false;
        
        
    }
    else
    {
        
        
        if(cards[another_number] == cards[nr])
        {
            setTimeout(function() { hide2cards(nr, another_number); }, 750);
            pair = false;
        }
        else
        {
            setTimeout(function() { restore2cards(nr, another_number); }, 1000);
            pair = false;
        }
        
        TurnCounter++;
        $('#score').html('Turn counter: '+TurnCounter);
    }
    }
}

function hide2cards(nr1, nr2)
{
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    lock = false;
    PairsLeft--;
    
    if(PairsLeft == 0)
    {
        $('#board').html('<div id="end"><h1><span id="winner">You win!</span><br>Done in '+TurnCounter+' turns<br />Want to play <span id="again" onclick="location.reload();">again?</span></h1></div>');
    }
}

function restore2cards(nr1, nr2)
{
    $('#c'+nr1).css('background-image','url(img/karta.png)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');
    
    $('#c'+nr2).css('background-image','url(img/karta.png)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    
    lock = false;
}