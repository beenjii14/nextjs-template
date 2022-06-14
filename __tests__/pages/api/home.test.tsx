import home from 'pages/api/home';

describe('Api home', () => {
  it('Should return status code 200', async () => {
    const req = { method: 'GET' } as any;
    const jsonRenderSpy = jest.fn();
    const res = {
      statusCode: 200,
      json: jsonRenderSpy,
      setHeader: jest.fn(),
    } as any;
    await home(req, res);
    expect(res.statusCode).toBe(200);
  });
});
