import { NowRequest, NowResponse } from '@now/node';

const ENV_ERROR = 'Environment error';
const REQUEST_ERROR = 'Invalid request';

/**
 * Return true if check not pass
 * @param request
 * @param response
 */
export default function requestCheck(
  request: NowRequest,
  response: NowResponse
) {
  if (process.env.NOW_DEV) {
    return false;
  }

  if (process.env.NODE_ENV !== 'production') {
    response.status(400).send({
      error: ENV_ERROR,
    });
    return true;
  }

  if (!request.headers.referer.startsWith('https://devrsi0n.com')) {
    response.status(400).send({
      error: REQUEST_ERROR,
    });
    return true;
  }
  return false;
}
