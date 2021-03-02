console.log("background working");


async function getWeather(){
  const data = await helper.get("?id=1880251&appid=bc733fd8452051fdf30ff17f6268f668");
  return data;
}

function customOnMessageAddListener(callback) {
    chrome.runtime.onMessage.addListener((...args) => {
      callback.apply(null, args);
      return true;
    });
}

customOnMessageAddListener(async (request, sender, sendResponse) => {
    if (request.action === "readLocal") {
      sendResponse(await getWeather());
    }
})

const helper = new weatherApiHelper();
