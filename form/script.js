function openTab_kinder(evt, tabName) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the link that opened the tab
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
			
			
}

function showtext()
{
var text="Here is some text that I want added to the HTML file";
document.getElementById("textarea").innerHTML=text;
}

function showMoreOrLess(thisObj,bonusContent){
    var caption = thisObj.innerHTML;
    //alert(caption);
    if ( caption == "Read more" ) {
        document.getElementById(bonusContent).style.display = "inline";
        thisObj.innerHTML = "Read less";
    } else {
        document.getElementById(bonusContent).style.display = "none";
        thisObj.innerHTML = "Read more";
    }
}