(function(){
    function updateClock(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        var hdeg = (h+m/60)*360/12;
        var mdeg = (m+s/60)*360/60;
        var sdeg = (s)*360/60;

        console.log(hdeg + ' ' + mdeg + ' ' + sdeg);

        setTimeout(function(){updateClock()}, 500);
    }

    function startClock(){
        setTimeout(function(){updateClock()}, 500);
    }

    startClock();
})();