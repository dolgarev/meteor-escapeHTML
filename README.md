# meteor-escapeHtml

Expose internal method `Blaze._escape` as `Blaze.escapeHtml`

```js
Blaze.escapeHtml('<script>alert(123)</script>') // => result is "&lt;script&gt;alert(123)&lt;/script&gt;"
```
