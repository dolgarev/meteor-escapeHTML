# meteor-escapeHtml

Expose internal method `Blaze._escape` as `Blaze.escapeHtml`

```js
Blaze.escapeHtml('<script>alert(123)</script>') // => result is "&lt;script&gt;alert(123)&lt;/script&gt;"
Blaze.escapeHtml(1) // => result is error "Uncaught TypeError: x.replace is not a function"
Blaze.escapeHtml(1, 'n/a') // => result is "n/a"

Blaze.escapeHtmlString('<script>alert(123)</script>') // => result is "&lt;script&gt;alert(123)&lt;/script&gt;"
Blaze.escapeHtmlString(1) // => result is ""
Blaze.escapeHtmlString(1, '<b>n/a</b>') // => result is "&lt;b&gt;n/a&lt;/b&gt;"
```
