export async function query(url: string, data: object) {
  const rsp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data, null, 2),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rsp.json();
}
