'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { formSchema } from '@/lib/schemas';
import { sendEmail } from '@/app/api/send';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('ContactPage.ContactForm');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail(values);
    toast({
      className: 'bg-green-400 font-semibold border-none text-primaryDark',
      title: 'Zpráva byla odeslána!',
      description: 'Děkuji za zprávu. Pokusím se odpovědět co nejdříve! ',
    });
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 '>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>{t('nameLabel')}</FormLabel>
              <FormControl className='bg-primaryLight text-primaryDark font-semibold'>
                <Input placeholder={`${t('nameLabel')}`} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Email</FormLabel>
              <FormControl className='bg-primaryLight text-primaryDark font-semibold'>
                <Input placeholder='Email ' type='email' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold '>
                {t('messageLabel')}
              </FormLabel>
              <FormControl className='bg-primaryLight text-primaryDark font-semibold'>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  rows={6}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={form.formState.isSubmitting}
          className='w-full bg-teal-700 hover:bg-decoration hover:text-primaryDark hover:font-semibold '
        >
          {t('sendButton')}
        </Button>
      </form>
    </Form>
  );
};
export default ContactForm;
