let  validationMotDePasse = prompt("quel est ton mot de passe!");

if(validationMotDePasse.length >= 5 && validationMotDePasse.length <= 12){
    console.log("Mot de passe valide")
} else{
    console.log("Mot de passe invalide")
}