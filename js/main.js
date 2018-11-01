'use strict';

function repo_init(){
    let max = 5000;
    let buttons = '';
    for(let i = 0; i < max; i+= 1000){
        buttons += '<tr><td><input id=generate-' + i + ' type=button value="' + i + ' to ' + (i + 999) + ' [' + (i / 1000 + 2) + ']">';
    }
    document.getElementById('buttons').innerHTML += buttons;
    for(let i = 0; i < max; i+= 1000){
        let elements = {};
        let keybinds = {};

        elements['generate-' + i] = {
          'onclick': function(){
              generate({
                'max': i + 999,
                'min': i,
              });
          },
        };
        keybinds[i / 1000 + 50] = {
          'todo': function(){
              generate({
                'max': i + 999,
                'min': i,
              });
          },
        };

        core_events_bind({
          'elements': elements,
          'keybinds': keybinds,
        });
    }

    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'keybinds': {
        49: {
          'todo': generate,
        },
      },
      'title': 'RandomSCP.htm',
    });
}
