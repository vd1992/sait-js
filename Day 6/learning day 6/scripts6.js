$(document).ready(function(){
    console.log(math.eval('sin(45deg)^2'));

    console.log($('.h2'));

    $('p').html('bye');
    $('p').css('color','purple');

    let linkz=$("a");
    linkz.each(function(){
        let link=$(this);
        link.text(link.text() + "!!!");
        }
        )
})

$('#button').on('click',function(){
        console.log("click");
        console.log(event.target);
        let num=Math.trunc((Math.random())*100);
        $(button).text(num);
        $(divs).css("background-color", "red");
})

$('#button').toggle(1000);
$('#button').toggle(1000);

