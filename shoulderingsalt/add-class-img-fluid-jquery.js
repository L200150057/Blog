<script>
$('img').addClass(' img-fluid');

$('.nav li').click(function(){
  $('.nav li').removeClass('active');
$(this).addClass('active');
})

$('.img-fluid').filter(function(){
  return $(this).parents('div').hasClass('col-sm-3');
}).css('height', '300px');

</script>
