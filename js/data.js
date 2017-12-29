'use strict';

function generate(){
    var article = core_random_integer({
      'max': 3999,
    });
    if(article < 100){
        article = '0' + article;
    }

    window.open(
      'http://scp-wiki.net/scp-' + article,
      '_blank'
    );
}
