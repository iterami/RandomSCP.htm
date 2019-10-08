'use strict';

function repo_init(){
    let events = {
      'generate': {
        'onclick': generate,
      },
    };
    let keybinds = {
      49: {
        'todo': generate,
      },
    };
    let max = 5000;
    let links = '';

    for(let i = 0; i < max; i+= 1000){
        links += '<tr><td>'
          + '<a class=external href=javascript:; id=generate-' + i + '>' + i + ' to ' + (i + 999) + ' [' + (i / 1000 + 2) + ']</a>';

        events['generate-' + i] = {
          'onclick': function(){
              generate({
                'max': i + 999,
                'min': i,
              });
          }
        };
        keybinds[i / 1000 + 50] = {
          'todo': function(){
              generate({
                'max': i + 999,
                'min': i,
              });
          },
        };
    }
    document.getElementById('links').innerHTML += links;

    core_repo_init({
      'events': events,
      'keybinds': keybinds,
      'title': 'RandomSCP.htm',
    });
}
