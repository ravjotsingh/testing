/**
 * Created by Ravjot on 21/08/14.
 */

window.onload = load;

function load()
{
    /*
    var menu;
    menu = document.getElementById("navlist").children;
    alert(menu.length);
    for(var i=0;i<menu.length;i++)
    {
        alert("poo");
    }
    */
    /*
    document.getElementById("aboutUs").onclick = lnk_aboutus();
    document.getElementById("article").onclick = lnk_article();
    document.getElementById("contactUs").onclick = lnk_guidance();
    document.getElementById("logIn").onclick =lnk_login();
    */

}

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
function lnk_aboutus()
{

}
function lnk_article()
{

}
function lnk_guidance()
{

}
function lnk_login()
{
    alert("login");
    this.className ="li.active";
}