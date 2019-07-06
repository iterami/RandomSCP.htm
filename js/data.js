'use strict';

function generate(args){
    args = core_args({
      'args': args,
      'defaults': {
        'max': 5000,
        'min': 0,
      },
    });

    let article = core_digits_min({
      'digits': 3,
      'number': core_random_integer({
        'max': args['max'] - args['min'],
      }) + args['min'],
    });

    window.open(
      'http://scp-wiki.net/scp-' + article,
      '_blank'
    );
}
