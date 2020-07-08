import React from 'react';
import { useQuery, useMutation, queryCache } from 'react-query';
import Actions from '@components/Actions';
import { query } from '@utils/query';
import debounce from '@utils/debounce';
import { isNotProd } from '@utils/env';

interface Props {
  url: string;
}

const FETCH_KEY = 'articles.actions';

type Params = [['like' | 'handclap' | 'share'], number][];

function ArticleActions({ url }: Props) {
  const fetchActions = () =>
    query(`/api/articles/actions?url=${encodeURIComponent(url)}`);
  const { status, data } = useQuery(FETCH_KEY + url, fetchActions);

  const updateActions = ({ like, handclap, share }) =>
    query(`/api/articles/save-actions`, {
      method: 'POST',
      data: {
        url,
        like,
        handclap,
        share,
      },
    });
  const [mutate] = useMutation(updateActions, {
    onSuccess() {
      queryCache.refetchQueries(FETCH_KEY);
    },
  });
  // Debounce handler with count to resolve
  // user click multiply actions quickly
  const handleAction = debounce(async (params: Params) => {
    const payload = {
      like: 0,
      handclap: 0,
      share: 0,
    };
    params.forEach(item => {
      const [originalParam, count] = item;
      const [type] = originalParam;
      payload[type] = count;
    });
    mutate(payload);
  }, 1000);
  const count = {
    like: 0,
    handclap: 0,
    share: 0,
    ...data?.data?.article,
  };
  if (isNotProd) {
    return (
      <Actions
        handleAction={handleAction}
        like={0}
        handclap={0}
        /* share={0} */
      />
    );
  }

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>Error</p>;
  }

  return (
    <Actions
      handleAction={handleAction}
      like={count.like}
      handclap={count.handclap}
      // share={count.share}
    />
  );
}

export default React.memo(ArticleActions);
