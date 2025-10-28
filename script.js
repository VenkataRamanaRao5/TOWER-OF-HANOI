class Block{
    constructor(size){
        this.size = size
        this.el = document.createElement("div");
        this.el.classList.add("blocks")
        this.el.id = size
        this.el.style.width = `calc(80% - ${size*15}px)`
    }
}

class Game{
    constructor(n){
        this.c1Box = document.getElementById("c1");
        this.c2Box = document.getElementById("c2");
        this.c3Box = document.getElementById("c3");
        this.flag = true;
        this.el;
        for(let i=0;i<n;i++){
            let newBlock = new Block(i);
            this.c1Box.appendChild(newBlock.el);
        }
        
        this.c1Box.addEventListener('click',this.gamer.bind(this));
        this.c2Box.addEventListener('click',this.gamer.bind(this));
        this.c3Box.addEventListener('click',this.gamer.bind(this));

        this.c1Box.addEventListener('click',this.ghover.bind(this));
        this.c2Box.addEventListener('click',this.ghover.bind(this));
        this.c3Box.addEventListener('click',this.ghover.bind(this));

    }
    ghover(){
        if(!this.flag){
            
        }
    }
    gamer(event){
            if(this.flag){
                this.flag = false
                let groupBoxes = event.currentTarget.querySelectorAll(".blocks");
                if(groupBoxes.length>0){
                    console.log(groupBoxes)
                    this.el = groupBoxes[groupBoxes.length-1];
                }else{
                    this.flag = true
                }
            }else{
                let groupBoxes = event.target;
                groupBoxes.appendChild(this.el)
                this.el = 0
                this.flag = true
            }
        }
}
let g = new Game(10);