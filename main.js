const $ = id => document.getElementById(id);

let title = document.querySelector('h4')
let player = document.querySelector('span')

let turn = 'x'
let arrey = []

function start(id){

   let element = $(id)

   if(turn == 'x' && element.innerHTML == ''){
      element.innerHTML = 'x'
      player.innerHTML = 'o'
      turn = 'o'
   }

   else if(turn == 'o' && element.innerHTML == ''){
      element.innerHTML = 'o'
      player.innerHTML = 'x'
      turn = 'x'
   }

   win()
}

function end(num1,num2,num3){
   title.innerHTML = arrey[num1] + ' is winner'
   title.classList.add('classname')

   $('iteam'+num1).classList.add('className')
   $('iteam'+num2).classList.add('className')
   $('iteam'+num3).classList.add('className')
   setInterval( () => {
      title.innerHTML += '.'
   } ,1000)
   setTimeout( () => {
      location.reload()
   },3000)
}

function win(){

   for(let i = 1; i < 10; i++){
      arrey[i] = $('iteam'+i).innerHTML
   }

   // rows
   if(arrey[1] == arrey[2] && arrey[2] == arrey[3] && arrey[1] != ''){
      end(1,2,3)
   }

   else if(arrey[4] == arrey[5] && arrey[5] == arrey[6] && arrey[4] != ''){
      end(4,5,6)
   }

   else if(arrey[7] == arrey[8] && arrey[8] == arrey[9] && arrey[7] != ''){
      end(7,8,9)
   }

   // columns
   else if(arrey[1] == arrey[4] && arrey[4] == arrey[7] && arrey[1] != ''){
      end(1,4,7)
   }

   else if(arrey[2] == arrey[5] && arrey[5] == arrey[8] && arrey[2] != ''){
      end(2,5,8)
   }

   else if(arrey[3] == arrey[6] && arrey[6] == arrey[9] && arrey[3] != ''){
      end(3,6,9)
   }

   // diagonal
   else if(arrey[1] == arrey[5] && arrey[5] == arrey[9] && arrey[1] != ''){
      end(1,5,9)
   }

   else if(arrey[3] == arrey[5] && arrey[5] == arrey[7] && arrey[3] != ''){
      end(3,5,7)
   }
}