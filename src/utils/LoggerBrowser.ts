export class LoggerBrowser {
  static info(message: string, ...optionalParams): void {
    console.info(message, optionalParams)
  }

  static warn(message: string, ...optionalParams): void {
    console.warn(message, optionalParams)
  }

  static error(message: string, ...optionalParams): void {
    console.error(message, optionalParams)
  }
}
