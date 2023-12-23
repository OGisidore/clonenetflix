// les parametres de mon header
// ma page de formulaire

// let inpu = document.getElementById('password').value;
// let btn = document.getElementById('button');
// let para = document.getElementById('errorMessage');
// let lien = document.getElementById('lien')
// btn.addEventListener('click' ,()=>{
//     let password = '12354';
//     if(inpu === password){
//         lien.href = 'accueil.html';

//      } 

//    return para.innerText = 'veuillez saisir le bon mot de passe'
     
// })












const toggleSearch = ()=>{
    var input = document.getElementById('searchInput');
    input.style.display = input.style.display === 'none'?'block': 'none';
}
// const hoverSeach = (isHovered)=>{
//     var icon = document.getElementById('serie');
//     var input = document.getElementById('searchInput');
//     if(isHovered){
//         icon.style.display = 'none';
//         input.style.display = 'block';
//     } else {
//         icon.style.display = 'block';
//         input.style.display = 'none';
//     }


// }





let chercher = document.getElementById('voir-plus');
let reduit = document.getElementsByClassName('reduit');
let complet = document.getElementById('complet')
let p = document.getElementById('voche')

chercher.addEventListener('click', function(){

        complet.style.display = 'grid';
        chercher.style.display = 'none';
        p.style.display = 'none' 
});

complet.addEventListener('click', function(){
    
    chercher.style.display = 'grid';
    p.style.display = 'grid';
    complet.style.display = 'none';


})

let episodes = document.getElementById('episodes');
// episodes.style.borderColor = '#f10d0df9'

let Episode = document.getElementById('Episodes');

let Simillaire = document.getElementById('simillaires');

let Title = document.getElementById('Title_sim');

let annonces = document.getElementById('Annonce');

let collection = document.getElementById('Collectio');

episodes.addEventListener('click' ,function(){

    // Simillaire.style.border = 'none';
    // annonces.style.borde = 'none';
    // episodes.style.borderColor = '#f10d0df9'
    Episode.style.display = 'block';
    Title.style.display = 'none';
    collection.style.display = 'none';


});

Simillaire.addEventListener('click' ,function(){

    // episodes.style.border = 'none';
    // annonces.style.borde = 'none';
    // Simillaire.style.borderColor = '#f10d0df9';
    Title.style.display = 'block';
    Episode.style.display = 'none';
    collection.style.display = 'none';
    episodes.style.border = 'none';
    annonces.style.borde = 'none';


})

annonces.addEventListener('click' ,function(){

    // episodes.style.border = 'none';
    // Simillaire.style.border = 'none';
    // annonces.style.borderColor = '#f10d0df9'
    Title.style.display = 'none';
    Episode.style.display = 'none';
    collection.style.display = 'block';

    

    

    
});

// function generale(annonces,simillaires,episodes) {
//     if(annonces)
    
// }


// const general = (annonces,Simillaire,episodes)=>{
//     if (annonces){
//         return annonces.addEventListener();
//     } else if(Simillaire){
//         return Simillaire.addEventListener();
//     }
//     else {
//         return episodes.addEventListener();
//     }
// }

