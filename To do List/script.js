var input=document.getElementById('newValue');
var parentform=input.parentNode.parentNode;
var plus=document.querySelector('span');
var initValue=input.value;
var nombreselect=0;



// Création des deux boutons (cachés par défaut)
var btnContainer = document.createElement('div');
btnContainer.className='btnContainner';

var btnSupprimer = document.createElement('button');
btnSupprimer.textContent = 'Supprimer';
btnSupprimer.style.backgroundColor = 'red';
btnSupprimer.style.color = 'white';

var btnAnnuler = document.createElement('button');
btnAnnuler.textContent = 'Annuler';
 
btnContainer.appendChild(btnSupprimer);
btnContainer.appendChild(btnAnnuler);

function majBoutons() {
    if (nombreselect > 0) {
        if (!parentform.parentNode.contains(btnContainer)) {
            parentform.parentNode.appendChild(btnContainer);
        }
    } else {
        if (parentform.parentNode.contains(btnContainer)) {
            parentform.parentNode.removeChild(btnContainer);
        }
    }
}



function ajouterTache(tache){
    var newdiv=document.createElement('div');
    newdiv.appendChild(document.createTextNode(tache));
    parentform.appendChild(newdiv);
    newdiv.className='tache';

    // Fait défiler jusqu'à la nouvelle tâche ajoutée
    newdiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    //gestion en cas de selecvtion
    newdiv.addEventListener('click',function(){
        
        if(newdiv.className=='tache'){
            newdiv.className='tacheSelectionnee';
            nombreselect++;
        }else{
            newdiv.className='tache';
            nombreselect = Math.max(0, nombreselect - 1);
        }
        majBoutons();
        
    });
    
}

//bouton +
plus.addEventListener('click',function(){
    plus.className='boutonclique';
    if(input.value){
        ajouterTache(input.value);
        input.value='';
    }
});

//bouton supprimer

btnSupprimer.addEventListener('click', function () {
    btnSupprimer.className='boutonclique';
    var tachesAsupprimer = document.querySelectorAll('.tacheSelectionnee');
    tachesAsupprimer.forEach(function (tache) {
        parentform.removeChild(tache);
        nombreselect = Math.max(0, nombreselect - 1);
    });
    majBoutons();
});

// Bouton "Annuler" : désélectionne toutes les tâches
btnAnnuler.addEventListener('click', function () {
    btnAnnuler.className='boutonclique';
    var taches = document.querySelectorAll('.tacheSelectionnee');
    taches.forEach(function (tache) {
        tache.className = 'tache';
    });
    nombreselect = 0;
    majBoutons();
});





