function FindProxyForURL(url, host) 
{
    if (shExpMatch(host, "*.baidu.com") || shExpMatch(host, "m.youtube.com") || shExpMatch(host, "www.qidian.com"))
    {
        return "PROXY 192.168.87.34:3128";
    } 
    else 
    {
        return "DIRECT";
    }
}
