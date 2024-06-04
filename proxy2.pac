function FindProxyForURL(url, host) 
{
    if (shExpMatch(host, "qidian.com") || shExpMatch(host, "m.youtube.com")) 
    {
        return "PROXY 192.168.87.34:3128";
    } 
    else 
    {
        return "DIRECT";
    }
}
