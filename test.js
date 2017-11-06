Tinytest.add('escapeHtml - escape', function(test) {
  var v = '<script>alert(123)</script>';
  test.equal(Blaze.escapeHtml(v), '&lt;script&gt;alert(123)&lt;/script&gt;', 'Expected values to be equal')
  test.equal(Blaze.escapeHtml(1, ''), '', 'Expected values to be equal')
});

Tinytest.add('escapeHtmlString - escape', function(test) {
  var v = '<script>alert(123)</script>';
  test.equal(Blaze.escapeHtmlString(v), '&lt;script&gt;alert(123)&lt;/script&gt;', 'Expected values to be equal')
  test.equal(Blaze.escapeHtmlString(1), '1', 'Expected values to be equal')
  test.equal(Blaze.escapeHtmlString([], v), '&lt;script&gt;alert(123)&lt;/script&gt;', 'Expected values to be equal')
  test.equal(Blaze.escapeHtmlString({}, '-'), '-', 'Expected values to be equal')
});
