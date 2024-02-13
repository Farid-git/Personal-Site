# Мой Сайт

## Технологии

* **NextJS**
* **Vite**
* **TailWind**


## Костыли

Для корректной работы при статическом билде необходимо использовать костыль в .htaccess:

```editorconfig
RewriteEngine On
RewriteBase /

# Redirect requests with a trailing slash to the non-trailing version
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)/$ $1 [L,R=301]

# Append ".html" to requests without a trailing slash
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)$ $1.html [L,R=301]
```