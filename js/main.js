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
}
