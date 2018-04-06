<script type="text/javascript">
  if (window.location.href == "https://shoulderingsalt.blogspot.co.id/"){
    $( ".home" ).addClass("active");
  } 
  else{
    function getSecondPart(str) {
      return str.split('?=')[1];
    }
    var pathname = window.location.href;
    var remove = getSecondPart(pathname);
    $( "."+remove ).addClass("active");
  }
</script>
