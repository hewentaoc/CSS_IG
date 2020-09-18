setTimeout(function(){
    $('.init').removeClass('init');
},200)


$('.item').on('click',function(){
  $('.title').css({
    transition:' opacity 0.2s linear',
 })
  $(this).addClass('active');
  $('.wrapper').addClass('wrapS');
})

$('.close').on('click',function(e){
    e.stopPropagation();
    $('.active').removeClass('active');
    $('.wrapper').removeClass('wrapS');
    $('.title').css({
       transition:' opacity 0.2s linear 0.8s ',
    })
})