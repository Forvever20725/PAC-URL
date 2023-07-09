function FindProxyForURL(url, host) {
    // 代理服务器的 IP 地址和端口号
    var proxyIP = "192.168.87.34";
    var proxyPort = 3128;

    // 需要使用代理的网站列表
    var proxySites = [
        "qidian.com",
        "youtube.com"
    ];

    // 检查网站是否需要使用代理
    for (var i = 0; i < proxySites.length; i++) {
        if (dnsDomainIs(host, proxySites[i])) {
            // 返回代理地址和端口
            return "PROXY " + proxyIP + ":" + proxyPort;
        }
    }

    // 默认情况下，直接连接
    return "DIRECT";
}
