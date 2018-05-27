var portfolioElements = 0;

function portfolioFilter(category) {

    portfolioElements = $(".portfolio-img").length;

    console.log(portfolioElements);

    $("." + category).show();

    return portfolioElements;

}

window.onload = function() {

    $("#portfolio").click(function(){
        
        $(".portfolio-img").show();

    });

    $("#weddings").click(function(){
        
        $(".portfolio-img").hide();
        portfolioFilter("weddings");

    });

    $("#citiscapes").click(function(){
        
        $(".portfolio-img").hide();
        portfolioFilter("citiscapes");

    });

    $("#children-babies").click(function(){
        
        $(".portfolio-img").hide();
        portfolioFilter("children-babies");

    });

    $("#animals").click(function(){
        
        $(".portfolio-img").hide();
        portfolioFilter("animals");

    });

}



