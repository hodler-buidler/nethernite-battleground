function Request({ http, Response, RequestError }) {
  /**
   * @param {string} text Optional. full-text search to apply
   * @param {number} size how many results should be returned (default 20, max 250)
   * @param {number} from offset to return results from
   */
  return async function request({ text = '', size = 100, from = 0 } = {}) {
    try {
      const response = await http().get('/-/v1/search', {
        params: {
          text,
          size,
          from,
          popularity: 1.0,
          maintenance: 0.0,
          quality: 0.0,
        },
      });
      return Response.make(response);
    } catch (error) {
      throw RequestError.default(error);
    }
  };
}

export default Request;
