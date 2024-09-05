const left = document.querySelector('.left');
const right= document.querySelector('.right');
const slider= document.querySelector('.slider');
const image= document.querySelectorAll('.img-1');

let slidenumber = 1;
const length = image.length;

//for dot
const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');

  buttons[0].style.backgroundColor = '#c6b4ce';

  const resetbg = ()=>{
     buttons.forEach((button) =>{
        button.style.backgroundColor = '#62436f';
     });
  };

  buttons.forEach((button,i) => {
     button.addEventListener('click',()=>{
        resetbg();
        slider.style.transform = `translateX(-${i*1140}px)`;
        slidenumber = i + 1;
        button.style.backgroundColor = '#c6b4ce';
     });
  });


const changecolor = ()=>{
   resetbg();
   buttons[slidenumber-1].style.backgroundColor = '#c6b4ce';
};



//end dot


const nextslide = ()=>{
   slider.style.transform = `translateX(-${slidenumber*1140}px)`;
   slidenumber++;
};

const prevslide = ()=>{
   slider.style.transform = `translateX(-${(slidenumber-2)*1140}px)`;
   slidenumber--;
};

const getfirstslide = ()=>{
   slider.style.transform = `translateX(0px)`;
   slidenumber = 0;
};

const getlastslide = ()=>{
   slider.style.transform = `translateX(-${(length-1)*1140}px)`;
   slidenumber = length;
};

 right.addEventListener('click',()=>{
   slidenumber < length ? nextslide(): getfirstslide();
   changecolor();
 });

 left.addEventListener('click',()=>{
   slidenumber > 1 ? prevslide(): getlastslide();
   changecolor();
 });


