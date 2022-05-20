const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
          <meta charSet='utf-8' />
        {/* normalize.css removes cross-browser differences in defaults, e.g.,
        differences in how form elements appear between Firefox and IE
        See: http://necolas.github.com/normalize.css/ */}
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        {/* application.css is where you put your styles */}
        <link rel="stylesheet" href="/stylesheets/application.css" />

        <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" />
        <script defer src="/js/application.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
