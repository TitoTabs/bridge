"use client";
import React, { useEffect } from "react";

const Container = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
        if (!vsl){vsl=function(u,cb){
            if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
            if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
            i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_CfEsMd96UjcQPDoU', 'https://fast.vidalytics.com/embeds/liw2XJtk/CfEsMd96UjcQPDoU/');
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section>
        <title>Dog Training Revolution</title>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 transition-transform transform">
        {/* Header Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight text-center">
          Stop Struggling With Your Dog&apos;s Behavior - There&apos;s A Better
          Way
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 text-center">
          Discover the breakthrough{" "}
          <span className="font-semibold italic">{`"brain training"`}</span>{" "}
          method that&apos;s transforming impossible dogs into perfectly behaved
          companions - without force, treats, or countless hours of training.
        </p>

        {/* Video Placeholder */}
        <div className="relative w-full mt-10 aspect-video bg-gray-300 rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
          <div
            id="vidalytics_embed_CfEsMd96UjcQPDoU"
            style={{
              width: "100%",
              position: "relative",
              paddingTop: "56.25%",
            }}
          ></div>
        </div>

        {/* Interactive Call-to-Action */}
        <div className="mt-8 space-y-6 text-center">
          <p className="text-lg md:text-xl font-semibold text-gray-800 animate-pulse">
            🔒 Special Limited-Time Offer Below 🔒
          </p>
          <p className="text-sm md:text-base text-red-500 font-bold">
            WARNING: This revolutionary training method is only available for a
            short time at this exclusive rate. Don&apos;t miss your chance to
            transform your relationship with your dog forever.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 text-white text-lg md:text-xl bg-blue-500 hover:bg-blue-600 rounded-full shadow-md transition-transform transform hover:scale-110 animate-bounce"
          >
            CLICK HERE TO UNLOCK THE SECRET →
          </a>
          <p className="text-sm md:text-base text-gray-600">
            ❌ Offer Expires Soon - Don&apos;t Wait! ❌
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
