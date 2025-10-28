class Block{
    constructor(size){
        this.size = size
        this.el = document.createElement("div");
        this.el.classList.add("blocks")
        this.el.style.width = `calc(80% - ${size*15}px)`
    }
}

class Game{
    constructor(n){
        this.c1Box = document.getElementById("c1");
        this.c2Box = document.getElementById("c2");
        this.c3Box = document.getElementById("c3");
        for(let i=0;i<n;i++){
            let newBlock = new Block(i);
            this.c1Box.appendChild(newBlock.el);
        }
    }
}
let g = new Game(10);
