const code = 1234;

let  motDePasse = prompt("quel est ton mot de passe!");
motDePasse = parseInt(motDePasse)

if (motDePasse === code) {
    console.log("OK!.");
}  else{
    console.log("Accés interdit!.");
}
