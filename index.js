


let anim = false
let one = 20
let two = 200

render()


function add(){
  if (one > 50){
    sub()
    // change()
  } else {
one += 1 
two -= 1

render()
  }
}

function sub(){
  if (one < 10){
    add()
  } else {
 one -= 1
two += 1

render()
  }
 
}

function change(){
  anim = !anim
  console.log(anim)

}



function offset(){

    if (anim === true ){
sub()
console.log(one)
    } else if (anim === false)
    {
     add()
    console.log(one)
    }
   
}

function check(){
  if (one === 50){
    anim = true
  } else if (one === 10){
    anim = false
  }
}


function  render(){
  check()
console.log(anim)
setTimeout(offset, 100)

  const blob = document.querySelector('#blob').innerHTML =  ` 
    <radialGradient id="RadialGradient1">
      <stop offset="${one}%" stop-color="#271F1F" />
      <stop offset="${two}" stop-color="#6a6767" />
    </radialGradient>
 

`
}


// let el = document.getElementById('turbulence');
// tl = new TimelineMax({paused:true});

// tl.from('div', 1,{opacity:0, y: -70});
// // tl.staggerFrom('#gen', 1, {opacity: 0, x:-1, y:-1, ease: Power4.easeOut}, 0.1)
// tl.to(el, 1.5, {attr:{baseFrequency: '1 1'}}, 0)
// tl.play();

