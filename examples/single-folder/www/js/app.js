var __t;__t=function(ns){var curr,index,part,parts,_i,_len;curr=null,parts=[].concat=ns.split(".");for(index=_i=0,_len=parts.length;_i<_len;index=++_i){part=parts[index];if(curr===null){curr=eval(part);continue}curr[part]==null?curr=curr[part]={}:curr=curr[part]}return curr};var app=window.app={},artists=window.artists={},genres=window.genres={};((function(){__t("artists.triphop").Lovage=function(){function a(){console.log("\t\tArtist: Lovage created!")}return a}(),__t("artists.triphop").MassiveAttack=function(){function a(){console.log("\t\tArtist: MassiveAttack created!")}return a}(),__t("artists.triphop").Portishead=function(){function a(){console.log("\t\tArtist: Portishead created!")}return a}(),__t("artists.progressive").KingCrimson=function(){function a(){console.log("\t\tArtist: KingCrimson created!")}return a}(),__t("genres").TripHop=function(){function a(){console.log("\tGenre: TripHop created!"),new artists.triphop.MassiveAttack,new artists.triphop.Portishead,new artists.triphop.Lovage}return a}(),__t("artists.progressive").TheMarsVolta=function(){function a(){console.log("\t\tArtist: TheMarsVolta created!")}return a}(),__t("artists.progressive").Tool=function(){function a(){console.log("\t\tArtist: Tool created!")}return a}(),__t("genres").Progressive=function(){function a(){console.log("\tGenre: Progressive created!"),new artists.progressive.KingCrimson,new artists.progressive.TheMarsVolta,new artists.progressive.Tool}return a}(),__t("app").App=function(){function a(){console.log("App created!"),new genres.Progressive,new genres.TripHop}return a}(),new app.App})).call(this)