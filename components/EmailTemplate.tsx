import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
  name,
}) => (
  <div>
    <h1>{name}</h1>
    <p>{message}</p>
    <p>{email}</p>
  </div>
);
