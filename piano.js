console.log("piano");

function play(note){
    const audio=new Audio("sounds/"+note+".wav");
    audio.play();
}

piano = document.getElementById("piano");

piano.addEventListener("click", (event) => {
    console.log(event.target.id);
    play(event.target.id);
})

function KeyboardInput(event) {
    const keyMap = {
        'd': 'do', 
        'f': 're', 
        'g': 'mi',
        'h': 'fa', 
        'j': 'sol',
        'k': 'la', 
        'l': 'si',
        'r': 'do-diese',
        't': 're-diese',
        'u': 'fa-diese',
        'i': 'sol-diese',
        'o': 'la-diese'
    };

    const note = keyMap[event.key.toLowerCase()];
     

    if (note) {
        const divNote = document.getElementById(note);
        if(event.type == "keydown"){
            play(note); 
            console.log(`Note jouée : ${note}`);  
            divNote.style.backgroundColor = "#00ff00";
        }
        if(event.type == "keyup"){
            divNote.style.backgroundColor = "";
        }

        
    }
    
    
}

document.addEventListener("keydown", KeyboardInput);
document.addEventListener("keyup", KeyboardInput);