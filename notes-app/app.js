// const fs= require('fs');

// fs.appendFileSync("notes.txt", "hello!\n");
// fs.appendFileSync("notes.txt", "this is node js\n");

const yargs = require("yargs");
const validator = require("validator");
const str = require("./notes.js");
const chalk= require("chalk");
const { argv } = require("yargs");
const noteUtil = require("./notes.js");
//const yargs = require("yargs");

// const s = str();
// console.log(s);
// console.log(validator.isEmail("abc@email.com"));
// console.log(chalk.inverse(chalk.underline(chalk.bold(chalk.blue("Success")))));

yargs.command({
    command: "add",
    describe: "To add a note",
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        },

        body: {
            describe: "Body of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler(){
        console.log("Adding new note");
        //noteUtil.addNote(argv.title, argv.body)

    }

})

yargs.command({

    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe:  "Title to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler(){
        noteUtil.removeNote(argv.title);

    }
})

yargs.command({
    command: "list",
    describe: "List of all the notes",
    handler(){
        noteUtil.listNotes();
    }
    

})

yargs.command({

    command: "read",
    describe: "Read a specific note",
    builder: ({
        title: {
            describe: "Title of note",
            demandOption: true,
            type: "string"
        }
    }),
    handler(argv){
        noteUtil.readNote(argv.title);
    }
})

yargs.parse();