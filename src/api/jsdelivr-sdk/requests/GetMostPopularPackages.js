function Request({ http, Response, RequestError }) {
  /**
   * @param {string} period Optional. "day", "week", "month", or "year";
   * @param {number} limit Optional. How many record to display per page.
   * @param {number} page Optional. Which page to load.
   */
  return async function request({
    period = 'month',
    limit = 100,
    page = 1,
  } = {}) {
    try {
      const response = await http.get('/stats/packages', {
        params: {
          period,
          limit,
          page,
        },
      });
      return Response.make(response);
    } catch (error) {
      throw RequestError.default(error);
    }
  };
}

export default Request;
