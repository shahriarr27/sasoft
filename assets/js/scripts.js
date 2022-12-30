const backToTop = document.querySelector(".back-to-top");
window.addEventListener('scroll', function(){
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
  
})

$(".my-toggle1").change(function() {
  if(this.checked) {
    $('.mo-price1').css('display', 'none');
    $('.yr-price1').css('display', 'block');
  } else {
    $('.mo-price1').css('display', 'block');
    $('.yr-price1').css('display', 'none');
}
});

$(".my-toggle2").change(function() {
  if(this.checked) {
    $('.mo-price2').css('display', 'none');
    $('.yr-price2').css('display', 'block');
  } else {
    $('.mo-price2').css('display', 'block');
    $('.yr-price2').css('display', 'none');
}
});
$(".my-toggle3").change(function() {
  if(this.checked) {
    $('.mo-price3').css('display', 'none');
    $('.yr-price3').css('display', 'block');
  } else {
    $('.mo-price3').css('display', 'block');
    $('.yr-price3').css('display', 'none');
}
});