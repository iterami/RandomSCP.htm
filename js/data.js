'use strict';

function random_scp(min, max){
    min = min || 0;
    max = max || 5000;

    const article = core_digits_min({
      'digits': 3,
      'number': core_random_integer({
        'max': max - min,
      }) + min,
    });

    window.open(
      'http://scp-wiki.net/scp-' + article,
      core_storage_data['target'],
      'noopener'
    );
}
