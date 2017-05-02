Tinytest.add('escapeHtml - escape', function(test) {
  var v = '<script>alert(123)</script>';
  test.equal(Blaze.escapeHtml(v), '&lt;script&gt;alert(123)&lt;/script&gt;', 'Expected values to be equal')
});
