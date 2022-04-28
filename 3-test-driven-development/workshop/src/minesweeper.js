class Minesweeper{
    createField(columns,lines){
        let field = "";
        for(let i = 0; i<columns; i++){
            field += ".".repeat(lines) 
            field += "\n";
        }
       console.log(field)
        return field;
    }

}

module.exports = { Minesweeper }
  