// import $ from 'jquery';

function createRollupElement(title, children) {
  return $('<div>', {
    class: 'rollup-container',
    on: {
      click(e) {
        e.preventDefault();
        $(this).toggleClass('active');
      },
    },
    append: [
      $('<a>', {
        class: 'accent-name',
        href: '#',
        text: title,
      }),
      $('<div>', {
        class: 'rollup-content',
        append: children,
      }),
    ],
  });
}

export default createRollupElement;
