var events = [];
events.push({
    selector: '#btn-prev',
    click: function() { console.log('Click on the #btn-prev'); }
});
events.push({
    selector: '#btn-exit',
    click: function() { console.log('Click on the #btn-exit'); }
});
events.push({
    selector: '#btn-next',
    click: function() { console.log('Click on the #btn-next'); }
});

var keys = [];
keys.push({
    selector: '#btn-prev',
    event: 'click',
    key: 37 // left arrow
});
keys.push({
    selector: '#btn-exit',
    event: 'click',
    key: 27 // esc
});
keys.push({
    selector: '#btn-next',
    event: 'click',
    key: 39 // right arrow
});