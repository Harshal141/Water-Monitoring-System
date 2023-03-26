//--------------------------------------
// Search Page js
//--------------------------------------

let count1 = document.querySelector('.count1')
let count2 = document.querySelector('.count2')
let count3 = document.querySelector('.count3')
let count4 = document.querySelector('.count4')

// geting counters
for(let i=0;i<200;++i){
    setTimeout(function(){count1?count1.innerText=i:"NULL"},20+10*i)
}
for(let i=0;i<20;++i){
    setTimeout(function(){count2?count2.innerText=i:"NULL"},20+10*i)
}
for(let i=0;i<5;++i){
    setTimeout(function(){count3?count3.innerText=i:"NULL"},20+10*i)
}
for(let i=0;i<60;++i){
    setTimeout(function(){count4?count4.innerText=i:"NULL"},20+10*i)
}

//--------------------------------------
// Error fade
//--------------------------------------

let error = document.querySelector('.alert-danger');
if(error){
setTimeout(() => {
    error.style.display = 'none'
}, 2000);
}