Package.describe({
  name: 'liberation:escapehtml',
  summary: 'Expose internal method Blaze._escape',
  version: '0.0.2',
  git: 'https://github.com/dolgarev/meteor-escapeHtml.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['blaze']);
  api.addFiles('escapeHtml.js', ['client', 'server']);
});

Package.on_test(function(api) {
  api.use(['liberation:escapehtml', 'tinytest', 'blaze'], 'client', 'server');
  api.add_files('test.js', 'client', 'server');
});
