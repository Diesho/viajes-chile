$(document).ready(function(){
    $('a').on('click',function(event){
    if(this.hash !== ""){
        event.preventdefault();
        var hash = this.hash;

        $('heather,main').animate({
            scrolltop: $(hash).offset().top                    
        },800,function(){
            window.location.hash = hash;
        });      
    }
        });
    });
      
