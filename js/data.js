'use strict';

function generate(){
    var article = core_random_integer({
      'max': 3999,
    }) + 1;
    if(article < 10){
        article = '00' + article;

    }else if(article < 100){
        article = '0' + article;
    }

    window.open(
      'http://scp-wiki.net/scp-' + article,
      '_blank'
    );
}
