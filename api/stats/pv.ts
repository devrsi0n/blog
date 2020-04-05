import { NowRequest, NowResponse } from '@now/node';
import { UAParser } from 'ua-parser-js';
import { gql } from 'apollo-boost';
import { formateDate } from '../_utils/date';
import client from '../_utils/apolloClient';
import requestCheck from '../_utils/requestCheck';

/**
 * Save page view info
 */
export default async (request: NowRequest, response: NowResponse) => {
  if (requestCheck(request, response)) {
    return;
  }

  if (!request.headers['user-agent']) {
    response.status(400).send({
      error: 'Invalid user agent',
    });
    return;
  }

  const { url, title } = request.body;
  console.log({ body: request.body });
  if (!url || !title) {
    response.status(400).send({
      error: 'Invalid url or title',
    });
    return;
  }
  const ua = new UAParser(request.headers['user-agent']);
  const browser = ua.getBrowser();
  const os = ua.getOS();
  if (!browser.name || !os.name) {
    response.status(400).send({
      error: 'Invalid browser or OS',
    });
    return;
  }
  const data = `{
    createdAt: "${formateDate(new Date())}",
    url: "${url}",
    browserName: "${browser.name || 'Unknown'}",
    browserVersion: "${browser.version || 'Unknown'}",
    osName: "${os.name || 'Unknown'}",
    osVersion: "${os.version || 'Unknown'}",
    title: "${title}"
  }`;

  try {
    const mutationStr = `
      mutation {
        createPV(data: ${data}){
          _id
        }
      }
    `;
    console.log({ mutationStr });
    const result = await client.mutate({
      mutation: gql(mutationStr),
    });
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send({
      error: 'Save to database error',
    });
  }
};
