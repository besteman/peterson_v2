/* eslint-disable no-undef */
(() => {
  $.ajax({
    url: '/api/quotes_data',
    method: 'GET',
  }).then((response) => {
    const quoteP = $('<blockquote>')
      .text(response)
      .addClass('block-quote');

    $('#quote-box').html(quoteP);
  });
})();
