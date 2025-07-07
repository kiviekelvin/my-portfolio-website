# EmailJS Setup Instructions

To enable real email functionality for your contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Configuration
In `src/services/emailService.ts`, replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## 6. Enable Real Email Sending
In `src/components/Contact.tsx`, change line 34 from:
```typescript
await sendEmailDemo(data);
```
to:
```typescript
await sendEmail(data);
```

## 7. Remove Demo Notice
Remove the "Demo Mode Active" notice section from the Contact component.

## Template Variables Available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (Kelvin Ahante)
- `{{to_email}}` - Your email (kelvinkivie@gmail.com)
- `{{reply_to}}` - Sender's email for replies

## Free Tier Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

For production use, consider upgrading to a paid plan for higher limits and no branding.