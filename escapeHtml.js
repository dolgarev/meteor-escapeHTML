(function() {
  var isString = function (val) {
    return Object.prototype.toString.call(val) === "[object String]"
  }

  if (!Blaze.escapeHtml) {
    Blaze.escapeHtml = function (val, defVal) {
      return Blaze._escape(isString(val) ? val : defVal)
    }
  }

  if (!Blaze.escapeHtmlString) {
    Blaze.escapeHtmlString = function (val, defVal) {
      return Blaze._escape(
        isString(val) ? val : (defVal == null ? '' : defVal)
      )
    }
  }
})();
