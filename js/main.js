'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'title': 'RandomSCP.htm',
    });

    let max = 5000;
    let buttons = '';
    for(let i = 0; i < max; i+= 1000){
        buttons += '<tr><td><input id=generate-' + i + ' type=button value="Between ' + i + ' and ' + (i + 1000) + '">';
    }
    document.getElementById('buttons').innerHTML += buttons;
    for(let i = 0; i < max; i+= 1000){
        document.getElementById('generate-' + i).onclick = function(){
            generate({
              'max': i + 1000,
              'min': i,
            });
        };
    }
}
