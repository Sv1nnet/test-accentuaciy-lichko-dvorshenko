// import $ from 'jquery';

function createRollupElement(title, children) {
  return $('<div>', {
    class: 'rollup-container',
    append: [
      $('<a>', {
        class: 'accent-name',
        href: '#',
        text: title,
        on: {
          click(e) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
          },
        },
      }),
      $('<div>', {
        class: 'rollup-content',
        append: children,
      }),
    ],
  });
}

export default createRollupElement;
