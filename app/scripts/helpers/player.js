define(['recorder'], function(){


    function timecode(ms) {
        var hms = {
          h: Math.floor(ms/(60*60*1000)),
          m: Math.floor((ms/60000) % 60),
          s: Math.floor((ms/1000) % 60)
        };
        var tc = []; // Timecode array to be joined with '.'
        if (hms.h > 0) {
          tc.push(hms.h);
        }
        tc.push((hms.m < 10 && hms.h > 0 ? "0" + hms.m : hms.m));
        tc.push((hms.s < 10  ? "0" + hms.s : hms.s));
        return tc.join(':');
    }


    var PlayerHelper = {

        initialize : function(){
            Recorder.initialize({
                swfSrc: "scripts/vendor/recorder.swf"
            });
        },

        record : function(){

            Recorder.record({
                start: function(){
                    console.log("recording started");
                },
                progress: function(milliseconds){
                    $(".counter").html(timecode(milliseconds));
                }
            });
        },

        stop : function(){
            Recorder.stop();
            console.log("recording/playing stopped");
        },

        play : function(){
            Recorder.stop();
            Recorder.play({
                start: function(){
                    console.log("playing started");
                },
                progress : function(milliseconds){
                    $(".counter").html(timecode(milliseconds));
                }
            });
        }
    };

    return PlayerHelper;

});