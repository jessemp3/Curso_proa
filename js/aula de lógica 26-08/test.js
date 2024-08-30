function showDiv1 (){ 
    document.querySelector('#camada1').style.visibility = 'visible';
    document.querySelector('#camada2').style.visibility = 'hidden';
    document.querySelector('#camada3').style.visibility = 'hidden';
}


function showDiv2 (){ 
    document.querySelector('#camada1').style.visibility = 'hidden';
    document.querySelector('#camada2').style.visibility = 'visible';
    document.querySelector('#camada3').style.visibility = 'hidden';
}

function showDiv3 (){ 
    document.querySelector('#camada1').style.visibility = 'hidden';
    document.querySelector('#camada2').style.visibility = 'hidden';
    document.querySelector('#camada3').style.visibility = 'visible';
}

function hiddenAll (){
    document.querySelector('#camada1').style.visibility = 'hidden';
    document.querySelector('#camada2').style.visibility = 'hidden';
    document.querySelector('#camada3').style.visibility = 'hidden';
}
