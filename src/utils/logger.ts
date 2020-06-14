type Message = string | object;

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  error(message: Message) {
    this.log('color:red;', message);
  }

  warn(message: Message) {
    this.log('color:yellow;', message);
  }

  info(message: Message) {
    this.log('color:blue;', message);
  }

  verbose(message: Message) {
    this.log('color:gray;', message);
  }

  private log(css: string, messages: Message): void {
    if (process.env.NODE_ENV !== 'production' || window.ENABLE_LOG === true) {
      const date = new Date();
      console.log(
        `%c[${this.prefix}] ${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} %s`,
        css,
        typeof messages === 'string'
          ? messages
          : JSON.stringify(messages, null, 2)
      );
    }
  }
}
