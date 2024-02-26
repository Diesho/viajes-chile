$(document).ready(function(){
    $('a').on('click',function(event){
        if(this.hash !== ""){
            event.preventdefault();
            var hash = this.hash;

            $('header,main').animate({
                scrolltop: $(hash).offset().top                    
            },800,function(){
                window.location.hash = hash;
            });      
        }
    });
    $('#tooltip').tooltip({title: "Visitanos en GitHub",trigger: "hover", placement: "top"});
    $('#tooltip2').tooltip({title: "Visitanos en Linkedin",trigger: "hover", placement: "top"});
    $('#tooltip3').tooltip({title: "Visitanos en Twitter",trigger: "hover", placement: "top"});
    $('#tooltip4').tooltip({title: "Visitanos en Facebook",trigger: "hover", placement: "top"});
});
