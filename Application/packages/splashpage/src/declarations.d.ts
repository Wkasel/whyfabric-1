// This file holds ambient type declarations.
declare module '*.png';
declare module '*.svg';

type Status = 'sending' | 'error' | 'success';
type FormData = {
  [key: string]: string;
};

interface IMailchimpSubscribeProps {
  url: string;
  render: (props: {
    subscribe: (formData: FormData) => void;
    status: Status;
    message: string;
  }) => React.ReactNode;
}

declare module 'react-mailchimp-subscribe' {
  export default class MailchimpSubscribe extends React.Component<
    IMailchimpSubscribeProps
  > {}
}
