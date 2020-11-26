const fs= require ("fs");
const chalk= require("chalk");

const loadNotes = () =>
{
    try{
        bufferString = fs.readFileSync("notes.json");
        realString = bufferString.toString();
        return JSON.parse(realString);
    }

    catch(e)
    {
        return [];
    }
   
}

const saveNotes = (notes) => fs.writeFileSync("notes.json",JSON.stringify(notes));
    

const addNote =(title, body) =>{
    const notes = loadNotes();
    const noteDup = notes.find((note)=>note.title === title)
        
    
    //console.log(notesDup);
    if (!noteDup)
    {
        notes.push({title,body});
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added!"))
    }

    else
        console.log(chalk.red.inverse("Title already exists!"));
}

const removeNote = (title)=>{
    notes = loadNotes();
    notesDup = notes.filter((note)=> !(note.title===title));
        
    

    if (notesDup.length === notes.length)
        console.log(chalk.red.inverse("Note not found!"));

    else{
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesDup);
    }
}

const listNotes = ()=>{
   const notes = loadNotes();
    if(notes.length !=0)
    {
        console.log(chalk.green.inverse("Your notes:"));
        notes.forEach((element) => {
        console.log(element.title);
    });
    }
    else
        console.log(chalk.red.inverse("No notes found!"));
}

const readNote = (title)=>{
   const notes = loadNotes();
   const findNote = notes.find((note)=> title===note.title)
   if(findNote)
   {
       console.log(chalk.blue.bold(findNote.title));
       console.log(findNote.body);
   }
   
   else{
       console.log(chalk.red.inverse("Note not found"));
   }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}