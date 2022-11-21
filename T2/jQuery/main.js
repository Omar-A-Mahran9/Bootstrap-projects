$(document).ready(function () {
  arr = ["image/4.jpeg", "image/5.jpeg", "image/3.jpeg"];

  let selecto = $(".image");
  let i = 0;

  s = setInterval(() => {
    selecto.fadeOut(500, () => {
  
      selecto.attr("src", arr[i]);
      selecto.fadeIn(500);
    });
    i = (i + 1) % arr.length;
  }, 1000);

  $("button").on("click", () => {
    return clearInterval(s);
  });




  $("img").on("click",(e)=>{
    console.log($(e.target).next())
    $(e.target).next().slideToggle(100)

  })
});
