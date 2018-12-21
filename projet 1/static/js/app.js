//Vérification que jQuery est chargé
// console.log(typeof $);
// //jQuery et $ sont identiques
// console.log(jQuery === $);
//Périmètre de sécurité avec la fonction anonyme
(function(){

  let test= 'variable définie dans app.js';
  let sectionsVisible = false;
  let counterClick = 0;

  //function n'intervenant pas sur le DOM ici
  //...



  $(document).ready(function(){
    //quand le DOM est complêtement chargé (état:ready) la fonction
    // anonyme s'éxecute
    //Il est préférable de placer à l'interieur de cette fonction
    //toutes les instructions manipulant ou écoutant le DOM

    //ciblage du document
    //certains dev ajoute un $ dans le
    //nom de la variable pour indiquer qu'elle
    // a recu le retoue de la fonction jQuery
    //const sections$ = $('section');
    const sections = $('section');
    const btnShow =  $('#btnShow');
    const headers = $('h2');

    //fonction intervenant sur le DOM
    function toggleSections(){
      sectionsVisible = !sectionsVisible;

      //toggleClass utilise un if interne
      //pour determiner s'il doit ajouter ou retirer
      //le nom de la classe css fournit en paramètre
      headers.toggleClass('highlighted');

        //Modifier le texte du boutton
        //Afficher ou masquer les sections
    if (sectionsVisible//cela veux dire sectionsVisible === true donc visible
    ){


      btnShow.text('Masquer les sections');
      sections.show();
      //  headers.css('color','red')//inline style
      //headers.css({'color':'red','font-size':'3rem'});
      headers.addClass('highlighted');
    }else {
      btnShow.text('Afficher les sections');
      sections.hide();
      //  headers.css('color','#000')//inline style
      //headers.css({'color':'black','font-size':'1.3rem'});
      headers.removeClass('highlighted');
    }
    counterClick++;
    if(counterClick > 9 ){
      $('body').html('<h1> Vous avez dépassé le nombre de  Clicking autorisé revenez demain!!!</h1>'+'<img src="https://www.papado.fr/wp-content/uploads/2017/10/Sticker-t%C3%AAte-de-mort.png">')
    }

    }

    headers.on('click',function(){
      //console.log(e.target.parentNode);
      //On masque ou afiche l'element suivant dans le DOM
      $(this).next().fadeToggle(250);

    })

    btnShow.on('click', toggleSections);

    })

  })()// fin de la fonction englobante
