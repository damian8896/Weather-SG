"use strict";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

class weatherApiHelper extends apiHelper {
  constructor() {
    super(WEATHER_API_BASE_URL);
  }

  async getAuthHeaders() {
    return {"appid": "bc733fd8452051fdf30ff17f6268f668"};
  }
}
