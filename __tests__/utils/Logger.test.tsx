jest.mock('winston', () => {
  const mFormat = {
    combine: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    splat: jest.fn(),
    simple: jest.fn(),
    colorize: jest.fn(),
    json: jest.fn(),
  };
  const mTransports = {
    Console: jest.fn(),
    File: jest.fn(),
  };
  const mLogger = {
    info: jest.fn(),
    warn: jest.fn(),
  };
  return {
    format: mFormat,
    transports: mTransports,
    createLogger: jest.fn(() => mLogger),
  };
});
import { createLogger, format, transports } from 'winston';
import { Logger } from 'utils/Logger';

describe('Logger', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should create the logger', () => {
    Logger.info('Hello world');
    expect(format.combine).toBeCalledTimes(1);
    expect(format.printf).toBeCalledWith(expect.any(Function));
    expect(transports.Console).toBeCalledTimes(1);
    expect(createLogger).toBeCalledTimes(1);
  });
});
