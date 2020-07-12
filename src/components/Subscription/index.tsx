/** @jsx jsx */
import { jsx } from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState, useCallback } from 'react';

import Section from '@components/Section';
import { H3 } from '@components/Headings';

import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Subscription: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      addToMailchimp(email)
        .then(data => {
          if (data.result === 'error') {
            throw data;
          }

          setSubscribed(true);
          setEmail('');

          setTimeout(() => {
            setSubscribed(false);
          }, 6000);
        })
        .catch(err => {
          setError(err.msg);
        });
    },
    [email]
  );

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
      setError('');
    },
    []
  );

  return (
    <Section narrow>
      <SubscriptionContainer
        sx={{
          backgroundColor: 'card',
        }}
      >
        <Content>
          <Heading>
            Join our email list and get notified about new content
          </Heading>
          <Text
            sx={{
              color: 'grey',
            }}
          >
            Be the first to receive our latest content with the ability to
            opt-out at anytime. We promise to not spam your inbox or share your
            email with any third parties.
          </Text>
          <Form
            onSubmit={handleSubmit}
            hasError={error}
            sx={{
              '&::after': {
                color: error ? 'error' : 'accent',
              },
            }}
          >
            <Input
              placeholder="your@email.com"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              sx={{
                color: 'primary',
                backgroundColor: error ? 'errorBackground' : 'inputBackground',
                '::placeholder': {
                  color: 'track',
                },
              }}
            />
            <Button
              type="submit"
              disabled={subscribed}
              sx={{
                border: '1px solid',
                borderColor: error ? 'error' : 'accent',
                color: error ? 'error' : 'accent',
                backgroundColor: subscribed ? 'accent' : 'transparent',
                '&:hover': {
                  backgroundColor: error ? 'error' : 'accent',
                  color: 'background',
                },
                'svg *': {
                  fill: 'background',
                },
              }}
            >
              {subscribed ? <CheckMarkIcon /> : 'Subscribe'}
            </Button>
            {error && (
              <Error
                dangerouslySetInnerHTML={{ __html: error }}
                sx={{
                  color: 'error',
                  a: {
                    color: 'error',
                  },
                }}
              />
            )}
          </Form>
        </Content>
      </SubscriptionContainer>
    </Section>
  );
};

export default Subscription;

const SubscriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${mediaqueries.tablet`
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: -20px auto 80px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;

const Heading = styled(H3)`
  margin-bottom: 20px;

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
`;

const Text = styled.p`
  margin: 0 auto 30px;
  line-height: 1.75;

  ${mediaqueries.tablet`
    padding: 0 26px;
    margin: 0 auto 25px;
  `}
`;

const Form = styled.form<{ hasError: string }>`
  position: relative;

  &::after {
    content: '>';
    position: absolute;
    left: 21px;
    top: 10px;

    ${mediaqueries.tablet`
    left: 34px;
    top: 11px;
  `}
  }
`;

const Input = styled.input`
  position: relative;
  border-radius: 35px;
  border: none;
  padding: 13px 21px 13px 35px;
  width: 471px;

  ::placeholder {
    opacity: 1;
  }

  ${mediaqueries.tablet`
    width: calc(100% - 36px);
    margin: 0 18px;
    padding: 14px 14px 14px 30px;
    margin-bottom: 30px;
  `}
`;

const Button = styled.button`
  position: absolute;
  left: 306px;
  top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 161px;
  height: 38px;
  font-weight: 600;
  border-radius: 35px;
  letter-spacing: 0.42px;
  transition: border-color 0.2s var(--ease-in-out-quad),
    background 0.2s var(--ease-in-out-quad), color 0.2s var(--ease-in-out-quad);

  &[disabled] {
    cursor: not-allowed;
  }

  ${p => mediaqueries.tablet`
    position: relative;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid ${p.theme.colors.horizontalRule};

    &:hover {
      color: initial;
      background: initial;
    }
  `}
`;

const Error = styled.div`
  position: absolute;
  left: 35px;
  bottom: -20px;
  font-size: 12px;

  a {
    text-decoration: underline;
  }

  ${mediaqueries.tablet`
    left: 50px;
    top: 50px;
  `}
`;

const CheckMarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00016 16.1698L4.83016 11.9998L3.41016 13.4098L9.00016 18.9998L21.0002 6.99984L19.5902 5.58984L9.00016 16.1698Z"
      fill="#08080B"
    />
  </svg>
);
