let note = prompt("Quelle est ta note ?");
note = parseInt(note)
if (note < 12) {
    console.log("Pas de mention");
} else if (note >= 12 && note < 14) {
    console.log("Passable");
} else if (note >= 14 && note < 16) {
    console.log("Bien");
} else if (note >= 16 && note < 18) {
    console.log("Très bien");
} else if (note >= 18 && note <= 20) {
    console.log("Excellent");
} 

