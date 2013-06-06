define(["jquery", "backbone", "handlebars", "text!templates/landing.html", "helpers/player"],

    function($, Backbone, Handlebars, template, PlayerHelper){

        var LandingPage = Backbone.View.extend({

            className: "landing-page",

            template : Handlebars.compile(template),

            events : {
                "click .start-recording" : "onStartRecording",
                "click .stop-recording" : "onStopRecording",
                "click .play-recording" : "onPlayRecording",
                "click .stop-playing" : "onStopPlaying"
            },

            initialize : function() {
                PlayerHelper.initialize();
            },

            render : function(){
                console.log("render template");
                $(this.el).html(this.template());
                return this.el;
            },

            onStartRecording : function(){
                $(".stop-recording").removeClass("hidden");
                $(".start-recording").addClass("hidden");
                PlayerHelper.record();
            },

            onStopRecording : function(){
                $(".stop-recording").addClass("hidden");
                $(".start-recording").removeClass("hidden");
                PlayerHelper.stop();
            },

            onPlayRecording : function(){
                $(".play-recording").addClass("hidden");
                $(".stop-playing").removeClass("hidden");
                PlayerHelper.play();
            },

            onStopPlaying : function(){
                $(".stop-playing").addClass("hidden");
                $(".play-recording").removeClass("hidden");
                PlayerHelper.stop();
            }

        });

    return LandingPage;

});