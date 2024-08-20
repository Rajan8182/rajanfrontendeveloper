$(document).ready(function () {
    $("button").click(function () {
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

  /* jQuery */

/* Effects */

// $(selector).event(speed , callback)

// $(function(){
//     $('#hide').click(function(){
//         $('#firstHeading').hide(5000 , function(){
//             alert("Hi , I Am JQuery!!!!!!!!")
//         })
//     })
// })

// $(function(){
//     $('#show').click(function(){
//         $('#firstHeading').show(5000)
//     })
// })

// $(function(){
//     $('#toggle').click(function(){
//         $('#firstHeading').toggle('fast')
//     })
// })


/* fade Effect */

/* FadeIn , FadeOut , FadeToggle , FadeTo */

$(function(){
    $('#fadein').click(function(){
        $('#demo-1').fadeIn(1000)
        $('#demo-2').fadeIn(2000)
        $('#demo-3').fadeIn(3000)
        $('#demo-4').fadeIn(4000)
        $('#demo-5').fadeIn(5000)
        $('#demo-6').fadeIn(6000)
    })
})


$(function(){
    $('#fadeout').click(function(){
        $('#demo-1').fadeout(1000)
        $('#demo-2').fadeout(2000)
        $('#demo-3').fadeout(3000)
        $('#demo-4').fadeout(4000)
        $('#demo-5').fadeout(5000)
        $('#demo-6').fadeout(6000)

    })
})

$(function(){
    $('#fadetoggle').click(function(){
        $('#demo-1').fadetoggle(1000)
        $('#demo-2').fadetoggle(2000)
        $('#demo-3').fadetoggle(3000)
        $('#demo-4').fadetoggle(4000)
        $('#demo-5').fadetoggle(5000)
        $('#demo-6').fadetoggle(6000)

    })
})


$(function(){
    $('#fadeto').click(function(){
        $('#demo-1').fadeto(1000)
        $('#demo-2').fadeto(2000)
        $('#demo-3').fadeto(3000)
        $('#demo-4').fadeto(4000)
        $('#demo-5').fadeto(5000)
        $('#demo-6').fadeto(6000)

    })
})

/* Slide Effect */

/* slideUp , SlideDown , SlideToggle */

// $(function(){
//     $('#slide').click(function(){
//         $('#slide-content').slideDown()
//     })
// })


// $(function(){
//     $('#slide').click(function(){
//         $('#slide-content').slideUp()
//     })
// })

// $(function(){
//     $('#slide').click(function(){
//         $('#slide-content').slideToggle()
//         $('#slide-content').slideDown()
//         $('#slide-content').slideUp()
//         $('#slide-content').fadeIn()
//     })
// })