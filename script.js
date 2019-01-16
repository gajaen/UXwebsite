function smaller(id1, id2, id3) {
    var idList1 = id1.split(' ');
    var idList2 = id2.split(' ');
    var idList3 = id3.split(' ');
    var item1, item2, item3;

    
    
    for (var i = 0; i < idList1.length; i++) {
        item1 = document.getElementById(idList1[i]);
        item2 = document.getElementById(idList2[i]);
       
       
       
        if (item1) {
            if (item1.style.fontSize == '1.5vw') {
                item1.style.fontSize='';  
                item1.style.lineHeight= '';
                item2.style.fontSize = '';
                
                
            }
            else if(item1.style.fontSize == '2.3vw'){
                item1.style.fontSize='1.5vw';
                
                document.getElementById('stor').disabled  = false;
                
                item2.style.fontSize = '2vw';
                
                /*document.getElementById("h1_1").style.fontSize = '2vw';*/
                
            }
           else{
                if (item1.style.fontSize== '0.9vw') {
                    item1.style.fontSize = '0.7vw';
                    document.getElementById('liten').disabled  = true;
                    
                    item2.style.fontSize = '1vw';
                    
                    /*document.getElementById("h1_1").style.fontSize = '1vw';*/
                }
                else{
                    item1.style.fontSize = '0.9vw';
                    item1.style.lineHeight= '';
                    item2.style.fontSize = '1.2vw';
                    

                }
            }
        }
    }
    for (var j = 0; j < idList3.length; j++) {
        item3 = document.getElementById(idList3[j]);
        if (item3.style.fontSize == '1.8vw') {
            item3.style.fontSize= '1.5vw ';
        }
        else if (item3.style.fontSize == '2.41vw'){
            item3.style.fontSize = '1.8vw';
        }
        else{
            if (item3.style.fontSize== '0.9vw') {
                item3.style.fontSize = '0.7vw';
            }
            else
                item3.style.fontSize = '0.9vw';
        }

    }

    
}


function bigger(id1, id2, id3) {

    var idList1 = id1.split(' ');
    var idList2 = id2.split(' ');
    var idList3 = id3.split(' ');
    var item1, item2, item3;

    
    
    for (var i = 0; i < idList1.length; i++) {
        item1 = document.getElementById(idList1[i]);
        item2 = document.getElementById(idList2[i]);
       
        if (item1) {
             if(item1.style.fontSize == '0.7vw'){
                item1.style.fontSize='0.9vw';
                document.getElementById("liten").disabled = false;
                
                item2.style.fontSize = '1.2vw';
                
            }
            else if (item1.style.fontSize == '0.9vw') {
                item1.style.fontSize= '';
                item1.style.lineHeight= '';
                item2.style.fontSize = '';
                
            }
           
           else{
                if (item2.style.fontSize == '2vw') {
                   
                   item1.style.fontSize = '2.3vw';

                   item2.style.fontSize = '2.5vw';

                document.getElementById("stor").disabled = true;
                
                    
                    
                }
                else{
                    item1.style.fontSize= '1.5vw';
                    item1.style.lineHeight= '1.2';

                    item2.style.fontSize = '2vw';
                }
            }
        }
        for (var j = 0; j < idList3.length; j++) {
            item3 = document.getElementById(idList3[j]);
            if (item3.style.fontSize == '0.9vw') {
                item3.style.fontSize= ' 1.5vw ';
            }
            else if(item3.style.fontSize == '0.7vw'){
                item3.style.fontSize = '0.9vw';
            }
            else{
                if (item3.style.fontSize == '1.8vw') {
                    item3.style.fontSize = '2.41vw';
                    
                }
                else
                    item3.style.fontSize = '1.8vw';
            }

        }
    }   
}

function validateForm() {
    var x = document.forms["myForm"]["mail"].value;
    var y = document.forms["myForm"]["msg"].value;
    if (x == "" ) {
        alert("Please fill in your e-mail");
        return false;
    }
    if(y == ""){
        alert("Pleaase fill in your message to us");
        return false;
    }
    else if (x) {
        alert("Message Sent!");
    }
    location.reload(false);
}

function swapStyleSheet(sheet){
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
function openTab(evt, tabName) {
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