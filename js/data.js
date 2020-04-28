'use strict';

function random_scp(min, max){
    min = min || 0;
    max = max || 6000;

    const article = core_digits_min({
      'digits': 3,
      'number': core_random_integer({
        'max': max - min,
      }) + min,
    });

    globalThis.open(
      core_storage_data['url'] + article,
      core_storage_data['target'],
      'noopener'
    );
}
