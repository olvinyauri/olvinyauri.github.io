$(document).ready(function(){

    //menu button
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    //theme-toggler
    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

    //Portfolio filter

    $('.portfolio .button-container .btn').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.portfolio .image-container .box').show('400')
        }
        else{
            $('.portfolio .image-container .box').not('.'+filter).hide('200');
            $('.portfolio .image-container .box').filter('.'+filter).show('400');
        }
    });
});