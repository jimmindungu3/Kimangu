Deployment notes - Email configuration

When deploying the `Server` to Render (or any hosted service) you must provide SMTP credentials via environment variables.

Recommended environment variables (choose one method):

- SMTP provider (recommended, e.g. SendGrid / Mailgun / SMTP service):

  - `SMTP_HOST` (e.g. smtp.sendgrid.net)
  - `SMTP_PORT` (e.g. 587 or 465)
  - `SMTP_USER` (username / API user)
  - `SMTP_PASS` (password or API key)

- Gmail (fallback):
  - `EMAIL` (your Gmail address)
  - `PASSWORD` (an App Password — do NOT use your usual Google password; create an App Password if you have 2FA enabled)

Notes:

- Using an SMTP provider (SendGrid/Mailgun) is more reliable for production than direct Gmail.
- On Render, add these as Environment Variables in your service dashboard.
- If your provider requires TLS options, you can set `NODE_TLS_REJECT_UNAUTHORIZED=0` temporarily (not recommended for production).

Example Render env variables (key/value pairs):

- SMTP_HOST: smtp.sendgrid.net
- SMTP_PORT: 587
- SMTP_USER: apikey
- SMTP_PASS: <your-sendgrid-api-key>

After setting env vars, redeploy your service. The server will use these values to connect to the SMTP server.
