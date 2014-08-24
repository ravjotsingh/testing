/**
 * Created by Ravjot on 21/08/14.
 */

//window.onload = load;
document.observe("dom:loaded", load);

function load()
{
    $("abtUs").observe("click", function(event){
        aboutUs(event, this);
    });

    $("articles").observe("click", function(event){
        articlesHandler(event, this);
    });

    $("contactUs").observe("click", function(event){
        contactUs(event, this);
    });

    $("logIn").observe("click", function(event){
        login(event, this);
    });
}
/*
function menu_inactive()
{
    var menu;
    menu = document.getElementById("navlist").children;
    //alert(menu.length);
    for(var i=0;i<menu.length;i++)
    {
        menu[i].className ="inactive";
    }
}
*/
function lnk_click(event, elem)
{
    var x = $(elem).up();

    var parN = $(x).nextSiblings();
    for (var i = 0; i < parN.length; i++){
        parN[i].addClassName("inactive");
        parN[i].removeClassName("active");
    }

    var parP = $(x).previousSiblings();
    for (var i = 0; i < parP.length; i++){
        parP[i].addClassName("inactive");
        parP[i].removeClassName("active");
    }
    x.removeClassName("inactive");
    x.addClassName("active");
}

function aboutUs(event, elm){
    lnk_click(event, elm);
}

function articlesHandler(event, elm){
    lnk_click(event, elm);
}

function contactUs(event, elm){
    lnk_click(event, elm);
}

function login(event, elm){
    lnk_click(event, elm);
}