//Scrolling animation//
jQuery(function($)
{
            
$.scrollTo(0);
                    
$('#nav-link1').click(function() { $.scrollTo($('#lap1'), 800);});
$('#nav-link2').click(function() { $.scrollTo($('#lap2'), 800);});
$('#nav-link3').click(function() { $.scrollTo($('#lap3'), 800);});
$('#start').click(function() { $.scrollTo($('#lap1'), 800); });
                    
            
            
            
$('#brand-link').click(function() { $.scrollTo($('body'),1000);});
            
}
);
    
    