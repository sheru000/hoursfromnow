export async function submitToIndexNow(url: string) {
  try {
    const apiUrl = `https://api.indexnow.org/indexnow`;
    const key = 'e44aa258207847e59e12ef8d3e24f899'; // Replace this with your actual key (from your .txt verification file)
    const keyLocation = `https://hoursfromnow.tech/${key}.txt`;

    const body = {
      host: 'hoursfromnow.tech',
      key: key,
      keyLocation: keyLocation,
      urlList: [url],
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('IndexNow submission failed:', await response.text());
    } else {
      console.log('IndexNow submission successful:', url);
    }
  } catch (err) {
    console.error('IndexNow error:', err);
  }
}
