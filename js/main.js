'use strict';

function repo_init(){
    const keybinds = {
      49: {
        'todo': function(){
            random_scp();
        },
      },
    };
    const max = 6000;
    let links = '';

    for(let i = 0; i < max; i += 1000){
        const series_max = i + 999;

        links += '<tr><td>'
          + '<a class=external href="javascript:random_scp(' + i + ',' + series_max + ');">'
            + i + ' to ' + series_max + ' [' + (i / 1000 + 2)
          + ']</a>';

        keybinds[i / 1000 + 50] = {
          'todo': function(){
              random_scp(
                i,
                series_max
              );
          },
        };
    }
    document.getElementById('links').innerHTML += links;

    core_repo_init({
      'keybinds': keybinds,
      'storage': {
        'target': '_blank',
        'url': 'http://scp-wiki.net/scp-',
      },
      'storage-menu': '<table><tr><td><input id=target><td>Target'
        + '<tr><td><input id=url><td>URL</table>',
      'title': 'RandomSCP.htm',
    });
}
