var heure=0,min=0,s=0,ms=0;
var estlance=false

var spanMiliseconde=document.getElementById('miliseconde');
var spanSeconde=document.getElementById('seconde');
var spanMinute=document.getElementById('minute');
var spanHeure=document.getElementById('heure')
var boutonStart=document.getElementById('start');
var boutonStop=document.getElementById('stop')
var boutonReset=document.getElementById('reset')
var intervalID;
function plusUn(i){
    i++;
}
// fontion qui gere les miliseconde
function temps(){
    boutonStart.className='boutonclique';
    if(estlance)return;
    estlance=true;
    intervalID = setInterval(function() { // On met en place l'intervalle pour afficher la progression du temps
        if(ms>=1000){
            ms=1000-ms;
            if(s>=60){
                s=60-s;
                
                if(min>=60){
                    min=60-min;
                    spanHeure.innerHTML=heure++;
                }
                spanMinute.innerHTML=min++;
            }
            spanSeconde.innerHTML=s++;
        }
        spanMiliseconde.innerHTML = ms++ ;
    }, 1);
    boutonStart.disabled=false;
}
boutonStart.addEventListener('click',temps);
boutonStart.addEventListener('mouseout',function(){
    boutonStart.className='';
});
boutonStop.addEventListener('click',function(){
    estlance=false;
    clearInterval(intervalID);
    boutonStop.className='boutonclique';
});
boutonStop.addEventListener('mouseout',function(){
    boutonStop.className='';
});
boutonReset.addEventListener('click',function(){
    estlance=false;
    boutonReset.className='boutonclique';
    clearInterval(intervalID);
    s=0,heure=0,min=0,ms=0;
    spanHeure.innerHTML=0;
    spanMiliseconde.innerHTML=0;
    spanMinute.innerHTML=0;
    spanSeconde.innerHTML=0;
});
boutonReset.addEventListener('mouseout',function(){
    boutonReset.className='';
});