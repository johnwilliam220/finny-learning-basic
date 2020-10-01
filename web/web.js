function openMenu(eve,item){
    var i, tab, tablinks;
    tab = document.getElementsByClassName("menu");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
      }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tab.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }  
      
  document.getElementById(item).style.display = "block";
  eve.currentTarget.className += " active";
}