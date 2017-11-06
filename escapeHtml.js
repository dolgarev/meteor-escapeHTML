(function () {
  var toString = Object.prototype.toString

  var isString = function (val) {
    return toString.call(val) === '[object String]'
  }

  var isNumber = function (val) {
    return toString.call(val) === '[object Number]'
  }

  if (!Blaze.escapeHtml) {
    Blaze.escapeHtml = function (val, defVal) {
      return Blaze._escape(isString(val) ? val : defVal)
    }
  }

  if (!Blaze.escapeHtmlString) {
    Blaze.escapeHtmlString = function (val, defVal) {
      val = isNumber(val) ? String(val) : val
      return Blaze._escape(
        isString(val) ? val : (defVal == null ? '' : defVal)
      )
    }
  }
})()
