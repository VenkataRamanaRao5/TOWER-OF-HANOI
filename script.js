class Block{
    constructor(size,n){
        this.size = size
        this.el = document.createElement("div");
        this.el.classList.add("blocks")
        this.el.id = size
        this.el.style.width = `calc(80% - ${size*15}px)`
        this.el.innerText = n-size;
    }
}

class Game{
    constructor(n){
        this.count = 0
        this.c1Box = document.getElementById("c1");
        this.c2Box = document.getElementById("c2");
        this.c3Box = document.getElementById("c3");
        this.flag = true;
        this.n = n
        this.el;
        for(let i=0;i<n;i++){
            let newBlock = new Block(i,n);
            this.c1Box.appendChild(newBlock.el);
        }
        
        // this.c1Box.addEventListener('mouseenter',this.ghover.bind(this));
        // this.c2Box.addEventListener('mouseenter',this.ghover.bind(this));
        // this.c3Box.addEventListener('mouseenter',this.ghover.bind(this));

    }
    // ghover(event){
    //     if(!this.flag){
    //         let boxes = event.currentTarget.querySelectorAll('.blocks');
    //         let bascontainer = event.currentTarget.top;
    //         if(boxes.length>0){
    //             this.el.style.top = boxes[boxes.length-1];
    //         }
    //     }
    // }
    gameStart(){
        this.boundGamer = this.gamer.bind(this);
        this.c1Box.addEventListener('click', this.boundGamer);
        this.c2Box.addEventListener('click', this.boundGamer);
        this.c3Box.addEventListener('click', this.boundGamer);
    }
    /*
    parseInt crisis is real,gave me a lot of trouble!
    */
    isGameOver(grid){
        //console.log('game over',grid.id,grid)
        if(grid.id==="c1")return false
        let b = grid.querySelectorAll('.blocks')
        //console.log('mymy:',b);
        if(b.length===this.n){
            for(let i=0;i<this.n;i++){
                if(parseInt(b[i].id)!==i)return false;
            }
            return true;
            //return false
        }else{
            return false
        }
    }

    makeGameOver(){
        this.c1Box.removeEventListener('click', this.boundGamer);
        this.c2Box.removeEventListener('click', this.boundGamer);
        this.c3Box.removeEventListener('click', this.boundGamer);
        this.c2Box.classList.add('endGame');
        this.c2Box.innerHTML = `
        <div id="won"> You won !! </div>
        <div> Your score: ${this.count}</div>
        <div> Perfect score: ${2**this.n-1}</div>
        `
    }
    gamer(event){
        // if(event.target.classList.contains('blocks')){}
            if(this.flag){
                this.flag = false
                let groupBoxes = event.currentTarget.querySelectorAll(".blocks");
                if(groupBoxes.length>0){
                    //console.log(groupBoxes)
                    this.el = groupBoxes[groupBoxes.length-1];
                    this.el.classList.add('block-clr');
                }else{
                    this.flag = true
                }
            }else{
                /*
                My my who thought a single line from target--->currentTarget have such a beautiful 
                change .This just solved so many problem!
                */
                let groupBoxes = event.currentTarget;
                let boxlist = event.currentTarget.querySelectorAll('.blocks');
                if(boxlist.length==0){
                    groupBoxes.appendChild(this.el)
                    this.el.classList.remove('block-clr')
                    this.count+=1
                    document.getElementById('score').innerHTML=`MOVES: ${this.count}`
                    this.el = 0
                    this.flag = true

                    /*This won't work,unneccessary code but don't remove it!*/
                    if(this.isGameOver(groupBoxes)){
                        this.makeGameOver();
                    }
                }else if(boxlist.length>0){
                    // console.log(boxlist.length)
                    // console.log(boxlist)
                    // console.log(parseInt(boxlist[boxlist.length-1].id))
                    if(parseInt(boxlist[boxlist.length-1].id)<=parseInt(this.el.id)){
                        groupBoxes.appendChild(this.el)
                        this.el.classList.remove('block-clr')
                        this.count+=1
                        document.getElementById('score').innerHTML=`MOVES: ${this.count}`
                        this.el = 0
                        this.flag = true

                        if(this.isGameOver(groupBoxes)){
                            //console.log('Game mudnchu!')
                            this.makeGameOver();
                        }
                    }
                }
                
            }
        }
}
document.getElementById('c2').classList.add('hori');
document.getElementById('restart').addEventListener('click',()=>window.location.reload());

let count = 3;
let g = new Game(count);
document.getElementById('theValue').innerText = count;
document.getElementById('left').addEventListener('click',()=>{
    if(count>3){
        count-=1
        document.getElementById('c1').innerHTML=''
        g = new Game(count);
        document.getElementById('theValue').innerText = count;
    }
})
document.getElementById('right').addEventListener('click',()=>{
    if(count<9){
        count+=1
        document.getElementById('c1').innerHTML=''
        g = new Game(count);
        document.getElementById('theValue').innerText = count;
    }
})
document.getElementById('start').addEventListener('click',()=>{
    g.gameStart()
    document.getElementById('start').remove();
    document.getElementById('restart').style.display='block'
    document.getElementById('c2').classList.remove('hori');
    // document.getElementById('levelChanger').remove();
    document.getElementById('c2').innerHTML=''
}
);
//g.gameStart()
