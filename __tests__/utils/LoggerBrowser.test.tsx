import { LoggerBrowser } from 'utils/LoggerBrowser';

describe('LoggerBrowser', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should create info logger', () => {
    LoggerBrowser.info('Hello world');
    console.info = jest.fn();
    console.info('hello');
    expect(console.info).toHaveBeenCalledWith('hello');
  });
  it('should create warn logger', () => {
    LoggerBrowser.warn('Hello world');
    console.warn = jest.fn();
    console.warn('hello');
    expect(console.warn).toHaveBeenCalledWith('hello');
  });
  it('should create error logger', () => {
    LoggerBrowser.error('Hello world');
    console.error = jest.fn();
    console.error('hello');
    expect(console.error).toHaveBeenCalledWith('hello');
  });
});
