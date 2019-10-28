'use strict';

function repo_init(){
    let events = {
      'generate': {
        'onclick': function(){
            random_scp();
        },
      },
    };
    let keybinds = {
      49: {
        'todo': function(){
            random_scp();
        },
      },
    };
    let max = 5000;
    let links = '';

    for(let i = 0; i < max; i+= 1000){
        let this_max = i + 999;

        links += '<tr><td>'
          + '<a class=external href="javascript:random_scp(' + i + ',' + this_max + ');">' + i + ' to ' + this_max + ' [' + (i / 1000 + 2) + ']</a>';

        keybinds[i / 1000 + 50] = {
          'todo': function(){
              generate({
                'max': this_max,
                'min': i,
              });
          },
        };
    }
    document.getElementById('links').innerHTML += links;

    core_repo_init({
      'events': events,
      'keybinds': keybinds,
      'storage': {
        'target': '_blank',
      },
      'storage-menu': '<table><tr><td><input id=target><td>Target</table>',
      'title': 'RandomSCP.htm',
    });
}
