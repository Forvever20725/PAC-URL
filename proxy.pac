function FindProxyForURL(url, host) {
  // 直接连接不使用代理的网址和主机
  var direct = ["qidian.com"];

  // 使用代理服务器的网址和主机
  var proxy = "192.168.87.34:3128";

  // 如果网址或主机在direct数组中，则直接连接，否则使用代理
  if (direct.indexOf(host) !== -1 || direct.indexOf(url) !== -1) {
    return "DIRECT";
  } else {
    return proxy;
  }
}