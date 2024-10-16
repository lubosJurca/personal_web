'use server';

import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { formSchema } from '@/lib/schemas';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  const { name, email, message } = emailFormData;
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['lubos.jurca@gmail.com'],
    subject: 'Email z kontaktního formuláře',
    react: EmailTemplate({ name, message, email }),
  });

  if (error) {
    console.error(error);
  }
};
