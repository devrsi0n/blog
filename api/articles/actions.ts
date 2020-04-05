import { NowRequest, NowResponse } from '@now/node';
import { getArticle } from './_services';
import requestCheck from '../_utils/requestCheck';

/**
 * Query article actions info by url
 */
export default async (request: NowRequest, response: NowResponse) => {
  if (requestCheck(request, response)) {
    return;
  }

  try {
    const { url } = request.query;
    if (!url) {
      response.status(400).send({
        error: 'Invalid url',
      });
      return;
    }
    const result = await getArticle(url as string);
    response.setHeader('Cache-Control', 'no-cache');
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send({
      error: 'Save to database error',
    });
  }
};
