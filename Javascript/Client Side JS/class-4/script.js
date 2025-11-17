// console.log(document.all[0])
// console.log(document.all)
// console.log(typeof (document.all))
// x = 1
// for(el of document.all){
//     console.log(el.innerText)
//     console.log(x++)
// }

console.log(document.doctype)

function getDeviceInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    hardwareCores: navigator.hardwareConcurrency,
    isMobile: /Mobi|Android/i.test(navigator.userAgent), // Simple mobile detection
  };
  console.log('Device Info:', info);
  return info;
}
async function getIPAddress() {
  try {
    // Using a public IP address API service (e.g., ipify)
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    console.log('User IP Address:', ipAddress);
    return ipAddress;
  } catch (error) {
    console.error('Could not fetch IP address:', error);
    return 'IP retrieval failed';
  }
}

getIPAddress();
getDeviceInfo();