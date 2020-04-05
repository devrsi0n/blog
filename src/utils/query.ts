interface Config {
  method?: 'GET' | 'POST';
  data?: object;
}

export function query(url: string, config?: Config) {
  const controller = new AbortController();
  // Get the abortController's signal
  const { signal } = controller;
  const promise = fetch(url, {
    method: config?.method ?? 'GET',
    ...(config?.data && {
      body: JSON.stringify(config.data, null, 2),
    }),
    headers: {
      Accept: 'application/json',
      ...(config?.data && {
        'Content-Type': 'application/json',
      }),
    },
    signal,
  });
  // @ts-ignore
  promise.cancel = controller.abort;
  return promise.then(rsp => rsp.json());
}
