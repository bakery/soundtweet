define(["jquery", "views/landing"],function($, LandingPage){

    return {
        run : function(){
            $(document).ready(function(){

                $(".landing-container").html(
                    new LandingPage().render()
                );
            });
        }
    };

});