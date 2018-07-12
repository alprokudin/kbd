window.onload = function () {
    var chk_kbd = document.getElementById("chk-kbd");
    var kbd_list = document.getElementsByClassName("key");

    if (chk_kbd.checked === true) {
        {
            for (i = 0; i < kbd_list.length; i++)
                kbd_list[i].style.display = 'inline';
        }
    }

    chk_kbd.onchange = function () {
        for (i = 0; i < kbd_list.length; i++) {
            if (kbd_list[i].style.display === 'inline') {
                kbd_list[i].style.display = 'none';
                document.removeEventListener('keyup', keynav);
            } else {
                kbd_list[i].style.display = 'inline';
                document.addEventListener('keyup', keynav);
            }
        }
    };

    var elems = document.getElementsByTagName('button');
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', btn_click);
    }

    function keynav(e) {
        var keyInput = e.keyCode;
        for (let i in keys) {
            if (keyInput === keys[i]['key']) {
                var sel = keys[i]['selector'];
                var ev = keys[i]['event'];
                break;
            }
        }
        for (let i in events) {
            if (sel === events[i]['selector']) {
                event = new Event(events[i][ev]());
                document.dispatchEvent(event);
            }
        }
    }

    function btn_click(e) {
        btn_id = '#' + this.id;
        for (i in events){
            if (events[i]['selector'] == btn_id){
                event = new Event(events[i]['click']());
                document.dispatchEvent(event);
            }
        }
    }
};