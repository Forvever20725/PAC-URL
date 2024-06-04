function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.baidu.com") || shExpMatch(host, "*.baidu.cn")) {
        return "PROXY 192.168.87.34:3128;";
    } else {
        return "DIRECT";
    }
}
