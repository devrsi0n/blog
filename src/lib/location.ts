function error() {
  throw Error('Unexpected location function in server side');
}

export function getLocation(urlStr: string) {
  const url = new URL(urlStr);
  const location: Location = {
    origin: url.origin,
    href: url.href,
    protocol: url.protocol,
    host: url.host,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash,
    ancestorOrigins: null,
    assign: null,
    reload: null,
    replace: null,
  };
  return location;
}
