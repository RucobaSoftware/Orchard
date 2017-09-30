<%@ WebHandler Language="C#" Class="Terra2.Imfuscator.Handler" %>

using System;
using System.Reflection;
using System.Web.Caching;
using System.IO;

namespace Terra2.Imfuscator
{
    public class Handler : System.Web.IHttpHandler
    {
        public void ProcessRequest(System.Web.HttpContext context)
        {
            Type streamerType = null;
            string path = context.Request.PhysicalPath.Replace("ashx", "dll");
            Cache cache = context.Cache;
            if (cache[path] != null)
                streamerType = (Type) cache[path];
            else
            {
                Assembly assembly = Assembly.Load(File.ReadAllBytes(path)); // Prevents file from being locked unlike .LoadFrom
                streamerType = assembly.GetType("Terra2.Imfuscator.Streamer");
                cache.Add(path, streamerType, new CacheDependency(path), Cache.NoAbsoluteExpiration, TimeSpan.FromMinutes(5), CacheItemPriority.Normal, null);
            }            
            streamerType.InvokeMember("StreamImage", 
                                System.Reflection.BindingFlags.Default | System.Reflection.BindingFlags.InvokeMethod, 
                                null, 
                                null, 
                                new object[] { context });
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

    }
}