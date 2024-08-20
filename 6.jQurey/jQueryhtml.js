/* JQuery get() */
// $(function(){
//     $('#btn1').click(function(){
//        alert($('#test').text()) 
//     })
// })

// $(function(){
//     $('#btn2').click(function(){
//        alert($('#test').html()) 
//     })
// })

// $(function(){
//     $('#btn3').click(function(){
//         $('#user').val('rajan') 
//     })
// })

/* JQuery set() */

$(function () {
  $(".settext").click(function () {
    $(".heading").text("set heading");
  });
  $(".sethtml").click(function () {
    $(".heading").html("<b>Hello world!</b>");
  });
  $(".setvalue").click(function () {
    $(".input").val("Raju");
  });
});

/* Add method */

/* append = content pachi, prepend = content pehla , after = tag pachi , before = tag pehla */

$(function(){
    $('.append').click(function(){
        $('.heading').append('hello word')
    })
})
$(function(){
    $('.after').click(function(){
        $('.heading').after('hello word')
    })
})
$(function(){
    $('.prepend').click(function(){
        $('.heading').prepend('hello word')
    })
})
$(function(){
    $('.before').click(function(){
        $('.heading').before('hello word')
    })
})

/* Remove() method => badhu j remove kri nakhe tag and content*/

$(function () {
  $(".Remove").click(function () {
    $(".heading").remove();
  });
});

/* empty() method => only content j remove kre*/
$(function () {
  $(".empty").click(function () {
    $(".heading").empty();
  });
});

/* CSS classes */

// addClass()
// removeClass()
// toggleClass()
// css()

// addClass()
$(function(){
    $('.addclass').click(function(){
        $('#heading').addClass('heading')
    })
})

// removeClass()
$(function(){
    $('.removeclass').click(function(){
        $('#heading').removeClass('heading')
    })
})

// toggleClass()
$(function(){
    $('.toggleclass').click(function(){
        $('#heading').toggleClass('heading')
    })
})

// css()
$(function () {
  $(".css").click(function () {
    $("#heading").css("background-color", "yellow");
  });
});
//multiple-css property
$(function () {
  $(".css").click(function () {
    $("#heading").css({
      "background-color": "yellow",
      color: "red",
    });
  });
});
