import { NowRequest, NowResponse } from '@now/node';
import { UAParser } from 'ua-parser-js';
import { gql } from 'apollo-boost';
import moment from 'moment-timezone';
import client from '../_utils/apolloClient';

/**
 * Save page view info
 */
export default async (request: NowRequest, response: NowResponse) => {
  if (
    process.env.NODE_ENV === 'production' &&
    !request.headers.referer.startsWith('https://devrsi0n.com')
  ) {
    response.status(400).send({
      error: 'Invalid referer',
    });
    return;
  }
  if (!request.headers['user-agent']) {
    response.status(400).send({
      error: 'Invalid user agent',
    });
    return;
  }

  const { url, title } = request.body;
  const ua = new UAParser(request.headers['user-agent']);
  const browser = ua.getBrowser();
  const os = ua.getOS();
  const data = `{
    createdAt: "${moment.tz(new Date(), 'Asia/Shanghai').format()}",
    url: "${url}",
    browserName: "${browser.name || 'Unknown'}",
    browserVersion: "${browser.version || 'Unknown'}",
    osName: "${os.name || 'Unknown'}",
    osVersion: "${os.version || 'Unknown'}",
    title: "${title}"
  }`;

  try {
    const result = await client.mutate({
      mutation: gql(`
      mutation {
        createPV(data: ${data}){
          _id
        }
      }
      `),
    });
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send({
      error: 'Save to database error',
    });
  }
};
