
const alldrums=document.querySelectorAll('.drums');
alldrums.forEach(drums  =>{
drums.addEventListener('click',function(event){
    
    const btnss=event.currentTarget.classList;
     if(btnss.contains('kicky')){
       
        const kicks=document.getElementById('kick');
        kicks.play();
       
     }
     if(btnss.contains('snarey')){
        const Snare=document.getElementById('Snare');
       Snare.play();
       
     }
     
     if(btnss.contains('Cymbaly')){
        const cymbal=document.getElementById('Cymbal');
        cymbal.play();
        
        
     }
     if(btnss.contains('Tomsy')){
        const Toms=document.getElementById('Tom');
        Toms.play();
        
     }
});
});
