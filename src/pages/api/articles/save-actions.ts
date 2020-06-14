import { NowRequest, NowResponse } from '@now/node';
import { getArticle, createArticle, updateArticle } from './_services';
import requestCheck from '../_utils/requestCheck';

/**
 * Save article actions info
 */
export default async (request: NowRequest, response: NowResponse) => {
  if (requestCheck(request, response)) {
    return;
  }

  try {
    const { url, title = '', like = 0, handclap = 0, share = 0 } = request.body;
    if (!url) {
      response.status(400).send({
        error: 'Invalid url',
      });
      return;
    }
    let article = await getArticle(url as string);
    if (!article) {
      article = await createArticle({
        url: url as string,
        title: title as string,
        like: like as number,
        handclap: handclap as number,
        share: share as number,
      });
    }
    article = article?.data?.article;
    if (!article) {
      throw new Error('Invalid article');
    }
    console.log(request.body);
    console.log(article);
    const resp = await updateArticle(article._id, {
      url: url as string,
      title: (title as string) || article.title,
      like: article.like + +like,
      handclap: article.handclap + +handclap,
      share: article.share + +share,
    });
    response.status(200).send(resp);
  } catch (error) {
    response.status(500).send({
      error: 'Save to database error',
    });
  }
};
