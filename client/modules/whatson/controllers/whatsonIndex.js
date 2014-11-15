whatson.controller('whatsonIndexController', ['$scope','$http','$interval', function($scope,$http,$interval){
    var alldata = [];
    
   /* $http({
        url: 'http://whatson.dev.opencity.io/whats-on',
        method: "GET"
    }).success(function (data){*/

        //alldata = data;

        // Cheating..
        alldata = [{"id":"546796b8857b0","title":"Grants for the Arts Session","date":"2014-11-07 08:17:56","category":"Art","description":"\u003Cp\u003EAre you or your organisation looking for funding towards new arts activity?Arts Council England\u00a0is coming to\u00a0\u202a#\u200eSpalding\u202c! Join James Urquhart and ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/grants-for-the-arts-session\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/grants-for-the-arts-session\/\u0022\u003EGrants for the Arts Session\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b8858de","title":"UnEarthed Exhibition","date":"2014-11-05 11:27:01","category":"Art","description":"\u003Cp\u003E5 artists have undertaken a residency researching the life, work and legacy of John Clare, resulting in UnEarthed, a contemporary ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/unearthed-exhibition\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/unearthed-exhibition\/\u0022\u003EUnEarthed Exhibition\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b8859e8","title":"UnEarthed Exhibition \u2013 Private View","date":"2014-11-05 11:21:58","category":"Art","description":"\u003Cp\u003E5 artists have undertaken a residency researching the life, work and legacy of John Clare, resulting in UnEarthed, a contemporary ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/unearthed-exhibition-private-view\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/unearthed-exhibition-private-view\/\u0022\u003EUnEarthed Exhibition \u0026#8211; Private View\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885a5a","title":"Ross Noble \u2013 Tangentleman","date":"2014-11-05 11:13:40","category":"","description":"\u003Cp\u003EFollowing 14 sell-out tours, the king of improvisational comedy is back with another mind-blowing UK tour.\u00a0Ross Noble\u00a0will be showcasing his ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/ross-noble-tangentleman\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/ross-noble-tangentleman\/\u0022\u003ERoss Noble \u0026#8211; Tangentleman\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885ac9","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-33\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-33\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885b4a","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-32\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-32\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885bf2","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-31\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-31\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885ca2","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-30\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-30\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885d84","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-29\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-29\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885e78","title":"Open Mic Showcase \u2013 ATTICA VIP","date":"2014-11-05 11:02:48","category":"Music","description":"\u003Cp\u003EWhether you can sing, play and instrument or just love live music, we promise you a friendly warm welcome every ... \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-28\/\u0022\u003EContinue \u0026#8594;\u003C\/a\u003E\u003C\/p\u003E\u003Cp\u003EThe post \u003Ca href=\u0022http:\/\/www.idea1.org.uk\/event\/open-mic-showcase-attica-vip-28\/\u0022\u003EOpen Mic Showcase \u0026#8211; ATTICA VIP\u003C\/a\u003E appeared first on \u003Ca href=\u0022http:\/\/www.idea1.org.uk\u0022\u003EIdea1\u003C\/a\u003E.\u003C\/p\u003E"},{"id":"546796b885f0c","title":"Motors: Mercedes A-Class proves less can be more","date":"2014-11-15 10:23:47","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003ERecent history shows that Mercedes has, despite its roots in premium motoring, also spent considerable time and money concentrating on the compact family car market.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/17b9808d\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489466\/u\/0\/f\/610112\/c\/33829\/s\/17b9808d\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489466\/u\/0\/f\/610112\/c\/33829\/s\/17b9808d\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489466\/u\/0\/f\/610112\/c\/33829\/s\/17b9808d\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b885f9d","title":"Wizard in the kitchen as the Wicked Witch reopens","date":"2014-11-15 09:50:10","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EWith highly regarded chef Dameon Clarke working his magic in the kitchens, the Wicked Witch at Ryhall near Stamford developed quite a reputation for its top class food in a very short period of time.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/4dc8e616\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489467\/u\/0\/f\/610112\/c\/33829\/s\/4dc8e616\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489467\/u\/0\/f\/610112\/c\/33829\/s\/4dc8e616\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489467\/u\/0\/f\/610112\/c\/33829\/s\/4dc8e616\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886025","title":"Overtures will bring the sounds of the sixties to the Key","date":"2014-11-15 07:50:10","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003EAfter five years of touring the UK and Europe with their Bootleg Sixties show, The Overtures have really got it all going on - including a visit to Peterborough\u0026#8217;s Key Theatre on Wednesday (November 19).\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/250e77d6\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489468\/u\/0\/f\/610112\/c\/33829\/s\/250e77d6\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489468\/u\/0\/f\/610112\/c\/33829\/s\/250e77d6\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489468\/u\/0\/f\/610112\/c\/33829\/s\/250e77d6\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8860a6","title":"Blazin\u2019 Fiddles to perform at Stamford Arts Centre","date":"2014-11-14 15:46:47","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003ETake a group of the hottest contemporary fiddle players from the Highlands and Islands of Scotland, mix with wonderfully sympathetic keyboard and guitar arrangements and you\u0026#8217;ve got the award-winning Blazin\u0026#8217; Fiddles!\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/6e15f539\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489469\/u\/0\/f\/610112\/c\/33829\/s\/6e15f539\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489469\/u\/0\/f\/610112\/c\/33829\/s\/6e15f539\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489469\/u\/0\/f\/610112\/c\/33829\/s\/6e15f539\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886126","title":"Christmas market set to bring seasonal cheer to Peterborough","date":"2014-11-14 14:03:07","category":"","description":"\u003C!--PSTYLE=WINT_Web Intro--\u003E\u003Cp\u003EThe city\u0026#8217;s Cathedral Square will be transformed into a winter wonderland of shopping and dining in the run-up to Christmas.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/5969d860\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489470\/u\/0\/f\/610112\/c\/33829\/s\/5969d860\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489470\/u\/0\/f\/610112\/c\/33829\/s\/5969d860\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489470\/u\/0\/f\/610112\/c\/33829\/s\/5969d860\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8861a6","title":"Fundraising: Sexy Santas to deliver pizzas in Peterborough","date":"2014-11-13 13:10:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003ESexy Santas will be assisting pizza delivery men in Peterborough on Friday (14 November) for a fun charity fundraiser for Children in Need.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/5b864212\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489471\/u\/0\/f\/610112\/c\/33829\/s\/5b864212\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489471\/u\/0\/f\/610112\/c\/33829\/s\/5b864212\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489471\/u\/0\/f\/610112\/c\/33829\/s\/5b864212\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886227","title":"UnEarthed exhibition: Commemorating 150th anniversary of John Clare\u2019s death","date":"2014-11-13 11:00:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EUnEarthed - an exhibition by Anita Bruce, Sheelah Mahalath Bewley, Kathryn Parsons, Sam Roddan and Sue Shields - is open at the City Gallery in Priestgate until Sunday, 30 November.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/d232740\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489472\/u\/0\/f\/610112\/c\/33829\/s\/d232740\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489472\/u\/0\/f\/610112\/c\/33829\/s\/d232740\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489472\/u\/0\/f\/610112\/c\/33829\/s\/d232740\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8862a9","title":"Young MasterChef Zak toasts vac-packed cabbage!","date":"2014-11-13 08:00:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EThe young Peterborough chef who vac-packed a cabbage on prime time TV has defended his cooking talents.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/3b4d46e4\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489473\/u\/0\/f\/610112\/c\/33829\/s\/3b4d46e4\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489473\/u\/0\/f\/610112\/c\/33829\/s\/3b4d46e4\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489473\/u\/0\/f\/610112\/c\/33829\/s\/3b4d46e4\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b88632a","title":"Controversial Chris coming to Spalding theatre","date":"2014-11-12 17:30:12","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EFollowing a sell-out spring run, Celebrity Juice regular and star of BBC Two\u0026#8217;s Hebburn Chris Ramsey can be seen at the South Holland Centre in Spalding tomorrow (November 13).\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/7beda364\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489474\/u\/0\/f\/610112\/c\/33829\/s\/7beda364\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489474\/u\/0\/f\/610112\/c\/33829\/s\/7beda364\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489474\/u\/0\/f\/610112\/c\/33829\/s\/7beda364\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8863ad","title":"Theatre: SomeTHING monstrous is keeping Emily Brown awake","date":"2014-11-12 16:58:22","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EEmily Brown and the Thing is a magical, musical show for those aged 3 and over, at Peterborough\u0026#8217;s Key Theatre. \u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/7490db86\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489475\/u\/0\/f\/610112\/c\/33829\/s\/7490db86\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489475\/u\/0\/f\/610112\/c\/33829\/s\/7490db86\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489475\/u\/0\/f\/610112\/c\/33829\/s\/7490db86\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886435","title":"Take a look at \u2018life inside\u2019 at Peterborough jail exhibition","date":"2014-11-12 16:53:03","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003ETake a look at life inside with the Prisons Week exhibition at Peterborough Cathedral from November 16-22.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/2f1465f2\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489476\/u\/0\/f\/610112\/c\/33829\/s\/2f1465f2\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489476\/u\/0\/f\/610112\/c\/33829\/s\/2f1465f2\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489476\/u\/0\/f\/610112\/c\/33829\/s\/2f1465f2\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8864b6","title":"Join Dennis Cuddles Starlight Band for Hereward Harmony Ceilidh","date":"2014-11-12 16:43:11","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EHereward Harmony presents its 8th annual Ceilidh on Saturday, November 22 at the ICA Fleet Centre, in Fletton. \u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/fcc6c29\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489477\/u\/0\/f\/610112\/c\/33829\/s\/fcc6c29\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489477\/u\/0\/f\/610112\/c\/33829\/s\/fcc6c29\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489477\/u\/0\/f\/610112\/c\/33829\/s\/fcc6c29\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886537","title":"Review: Clarkes restaurant keeping bar set high","date":"2014-11-12 16:20:12","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EImake an effort to try different foods in different pubs and restaurants to get a feel for the broad range of dining out opportunities in the Greater Peterborough area.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/3becf0ec\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489478\/u\/0\/f\/610112\/c\/33829\/s\/3becf0ec\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489478\/u\/0\/f\/610112\/c\/33829\/s\/3becf0ec\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489478\/u\/0\/f\/610112\/c\/33829\/s\/3becf0ec\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8865b6","title":"Preview: Oundle Food Festival","date":"2014-11-12 15:00:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EFather Christmas will be joined by some of his reindeer in the grotto as part of December\u0026#8217;s Oundle Food Festival.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/46bbc2ae\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489479\/u\/0\/f\/610112\/c\/33829\/s\/46bbc2ae\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489479\/u\/0\/f\/610112\/c\/33829\/s\/46bbc2ae\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489479\/u\/0\/f\/610112\/c\/33829\/s\/46bbc2ae\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886637","title":"Ortons garden centre in Christmas spirit with range of events","date":"2014-11-12 12:30:23","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003ENotcutts Garden Centre has gone all festive with a range of family events happening through until late December.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/7d837a80\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489480\/u\/0\/f\/610112\/c\/33829\/s\/7d837a80\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489480\/u\/0\/f\/610112\/c\/33829\/s\/7d837a80\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489480\/u\/0\/f\/610112\/c\/33829\/s\/7d837a80\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8866b8","title":"Chance to find out more about your WW1 era photos","date":"2014-11-12 12:25:10","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003ESpecialist photo collector Neil Storey will be at the John Clare Theatre on November 17 at 7pm, helping people to find out more about their family\u0026#8217;s military photos.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/654ab90e\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489481\/u\/0\/f\/610112\/c\/33829\/s\/654ab90e\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489481\/u\/0\/f\/610112\/c\/33829\/s\/654ab90e\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489481\/u\/0\/f\/610112\/c\/33829\/s\/654ab90e\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b88673b","title":"Learn the art of willow decorations at Ferry Meadows event","date":"2014-11-12 12:22:00","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003EA willow Christmas decoration making workshop will take place at Ferry Meadows on November 30 from 10am until 4.30pm.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/70c2709d\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489482\/u\/0\/f\/610112\/c\/33829\/s\/70c2709d\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489482\/u\/0\/f\/610112\/c\/33829\/s\/70c2709d\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489482\/u\/0\/f\/610112\/c\/33829\/s\/70c2709d\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8867bf","title":"Oundle theatre to show play about the Great War poets","date":"2014-11-12 11:48:25","category":"","description":"\u003C!--PSTYLE=$ID\/[No paragraph style]--\u003E\u003Cp\u003ETickets are on sale for Not About Heroes by Stephen MacDonald being performed by the Blackeyed Theatre, in association with South Hill Park on Monday, November 17 at 7.45pm at the Stahl Theatre on West Street in Oundle.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/d36b6b7\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489483\/u\/0\/f\/610112\/c\/33829\/s\/d36b6b7\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489483\/u\/0\/f\/610112\/c\/33829\/s\/d36b6b7\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489483\/u\/0\/f\/610112\/c\/33829\/s\/d36b6b7\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b88685b","title":"Plans for Peterborough\u2019s 2014 Christmas lights switch-on","date":"2014-11-12 07:00:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EFather Christmas will help turn on the Peterborough Christmas lights this year as part of a five-hour ceremony in Cathedral Square on Saturday, November 15.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/69c5ba6\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489484\/u\/0\/f\/610112\/c\/33829\/s\/69c5ba6\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489484\/u\/0\/f\/610112\/c\/33829\/s\/69c5ba6\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489484\/u\/0\/f\/610112\/c\/33829\/s\/69c5ba6\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b886951","title":"Peppa Pig delights families at Queensgate switch-on","date":"2014-11-11 17:35:00","category":"","description":"\u003C!--PSTYLE=WINT Web Intro--\u003E\u003Cp\u003EThe festive season at Queensgate Shopping Centre in Peterborough was welcomed in by some special guests and over 2,000 shoppers.\u003C\/p\u003E\u003Cimg width=\u00271\u0027 height=\u00271\u0027 src=\u0027http:\/\/rss.feedsportal.com\/c\/33829\/f\/610112\/p\/1\/s\/6dab481c\/mf.gif\u0027 border=\u00270\u0027\/\u003E\u003Cbr\/\u003E\u003Cbr\/\u003E\u003Ca href=\u0022http:\/\/da.feedsportal.com\/r\/212217489485\/u\/0\/f\/610112\/c\/33829\/s\/6dab481c\/a2.htm\u0022\u003E\u003Cimg src=\u0022http:\/\/da.feedsportal.com\/r\/212217489485\/u\/0\/f\/610112\/c\/33829\/s\/6dab481c\/a2.img\u0022 border=\u00220\u0022\/\u003E\u003C\/a\u003E\u003Cimg width=\u00221\u0022 height=\u00221\u0022 src=\u0022http:\/\/pi.feedsportal.com\/r\/212217489485\/u\/0\/f\/610112\/c\/33829\/s\/6dab481c\/a2t.img\u0022 border=\u00220\u0022\/\u003E"},{"id":"546796b8869e3","title":"15-11-2014 (17:00) Taiz\u00e9 Service","date":"2014-08-27 14:10:48","category":"","description":"For those seeking a reflective approach to spirituality, this ecumenical candlelit service held in the beautiful New Building involves distinctive musical chants, periods of silence and the opportunity to receive ministry, prayer and healing."},{"id":"546796b886a65","title":"16-11-2014 - 22-11-2014 Prisons Week Exhibition","date":"2014-10-09 09:16:39","category":"","description":"This year\u2019s Prisons Week Exhibition invites you to read the stories of real prisoners and to walk the path from desperation and desolation towards the beckoning door of freedom. "},{"id":"546796b886aee","title":"19-11-2014 (13:00) Wednesday at One","date":"2014-09-19 15:33:17","category":"","description":"Remembrance Series: \u0027Just War\u0027 - Speaker: Revd. Canon Ian Black (Vicar, St. John the Baptist, Peterborough, and Canon Residentiary, Peterborough Cathedral)"},{"id":"546796b886b85","title":"21-11-2014 (19:00) Children\u2019s Interfaith Event","date":"2014-10-28 14:42:58","category":"","description":"This annual celebration is the culmination of on-going work between faith groups from the Peterborough Interfaith Council and Peterborough schools.  Faith groups and schools have been paired together to produce a performance or presentation for the evening\u2019s celebrations."},{"id":"546796b886c0a","title":"22-11-2014 (18:00) Confirmation","date":"2014-09-19 15:39:02","category":"","description":"All are welcome to join us for this special service when candidates from around Peterborough Diocese will be confirmed by The Bishop of Peterborough."},{"id":"546796b886c92","title":"26-11-2014 (13:00) Wednesday at One","date":"2014-09-19 15:31:01","category":"","description":"Remembrance Series: \u0027Chaplaincy in the Services\u0027 - Speaker: Revd. (Wg. Cmdr.) Ashley Mitchell (Senior Chaplain, RAF)"},{"id":"546796b886d14","title":"26-11-2014 (19:30) Peterborough Theological Society","date":"2014-09-17 10:47:48","category":"","description":"This month\u0027s speaker is Dr. Helen Cameron, Head of Public Affairs for the Salvation Army. The topic will be \u0027Towards a practical theology for the local church\u0027."},{"id":"546796b886d95","title":"29-11-2014 (10:00 - 15:00) Advent Reflection Day: an event organised by Churches Together in Central Peterborough","date":"2014-11-03 11:37:13","category":"","description":"This is a day of guided meditation in the beautiful surroundings of Peterborough Cathedral at the start of the busy Advent Season. The speaker for the day will be Revd. Dr. Lynne Broughton, who will use the Cathedral building itself as a way of interpreting Advent themes."},{"id":"546796b886e1d","title":"30-11-2014 (08:00) Advent Sunday","date":"2014-09-19 15:39:34","category":"","description":"Our Advent Sunday Services."},{"id":"546796b886e9d","title":"01-12-2014 (19:00) The Advent Procession","date":"2014-09-19 15:40:02","category":"","description":"A candlelit service with procession, readings and music led by the Cathedral Choir for the Season of Advent."},{"id":"546796b886f20","title":"02-12-2014 (10:00) Combat Stress Coffee Morning","date":"2014-08-28 10:41:15","category":"","description":"A central space for veterans and their families to share experiences."},{"id":"546796b886fb6","title":"03-12-2014 (13:00) Wednesday at One","date":"2014-09-19 15:30:36","category":"","description":"Remembrance Series: \u0027Christians in the Frontline\u0027 - Speaker: Revd. Canon William Burke (Rector of Castor with Sutton and Upton with Marholm)"},{"id":"546796b887039","title":"10-12-2014 (13:00) Wednesday at One","date":"2014-09-19 15:30:09","category":"","description":"Aspects of Healing Series (Healing Service): \u0027Healing and Reconciliation\u0027 - Speaker: Revd. Canon Haydn Smart (former Rector of Castor with Sutton and Upton with Marholm)"},{"id":"546796b8870c2","title":"11-12-2014 (12:00 - 13:00) Pre-School Christmas Nativity Service","date":"2014-08-27 07:44:40","category":"","description":"This half hour service, followed by refreshments, is open to everyone, particularly pre-school children."},{"id":"546796b88711d","title":"18-12-2014 (13:00) Business Workers\u0027 and Shoppers\u2019 Carols","date":"2014-09-29 14:57:23","category":"","description":"A lunchtime opportunity to come and sing traditional Christmas Carols in the Cathedral."},{"id":"546796b8874ce","title":"19-12-2014 (19:30) Christmas Concert: John Rutter\u0027s \u0027Gloria\u0027","date":"2014-11-03 13:58:20","category":"","description":"The centre-piece of this year\u0027s Christmas Concert will be John Rutter\u0027s \u0027Gloria\u0027, along with other music for brass and choir."},{"id":"546796b887f50","title":"20-12-2014 (15:00) Christingle Service","date":"2014-09-19 15:40:32","category":"","description":"The Cathedral\u2019s annual service for young children and families includes seasonal readings, carols and other music."},{"id":"546796b887fc7","title":"24-12-2014 (16:00) Christmas Eve Services","date":"2014-09-19 15:41:04","category":"","description":"Details of our Christmas Eve services."},{"id":"546796b888034","title":"25-12-2014 (08:00) Christmas Day Services","date":"2014-09-19 15:41:21","category":"","description":"Details of our Christmas Day Services."},{"id":"546796b8880a4","title":"31-12-2014 (18:30) HOPE for Peterborough - Service for New Year\u2019s Eve","date":"2014-08-27 07:55:23","category":"","description":"An inter-denominational service for Peterborough to celebrate the coming New Year."},{"id":"546796b888110","title":"30-01-2015 (19:30) Katharine of Aragon Festival 2015: A Talk by Alison Weir","date":"2014-11-05 17:07:59","category":"","description":"The renowned historian and author will be with us to give an illustrated talk entitled, \u0027The Exile of Katharine of Aragon\u0027, about the last years of Katharine\u0027s life."},{"id":"546796b88817a","title":"31-01-2015 (19:30) The Sixteen - Monteverdi: Vespers of 1610","date":"2014-11-05 17:27:15","category":"","description":"\u0027The Sixteen\u0027 performs one of the cornerstones of the classical repertoire, Monteverdi\u0027s monumental \u0027Vespers of 1610,\u0027 famed for its thrilling rhythms, grand choruses and beautiful solo movements. Peterborough Cathedral choristers will join \u0027The Sixteen\u0027 for the Sonata sopra Sancta Maria section of the Vespers."}];

        setTimeout(function(){
        $("#owl-demo").owlCarousel({
            items : 2,
            lazyLoad : true,
            navigation : true
          });
    },100);
    
    setTimeout(function(){
        $("#owl-other-demo").owlCarousel({
            items : 2,
            lazyLoad : true,
            navigation : true
          });
    },100);
    
    var startSecond = (alldata.length/2);
        
    $scope.firstRow=alldata.slice(0,startSecond);
    $scope.secondRow=alldata.slice(startSecond,alldata.length);
    /*}).error(function (data){
        alldata = false;
    });*/
        
    $scope.goToSection = function(value){        
        $scope.selectedEvent = value;
        //console.log(Date.today());
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yy = today.getFullYear()
        var day = value.date.split('-');
        
        if (dd===parseInt(day[2].split(' ')[0]) && mm===parseInt(day[1]) && yy===parseInt(day[0])){
            $scope.selectedEvent.date = 'TODAY';
        }
        
     };
    
    $scope.goBackEvents = function(){
        $scope.selectedEvent = undefined;
    };
    
    
    
    
    
    
    //$scope.dataFirstRow=JSON.parse(alldata.splice(0,2));
    //$scope.dataSecondRow=alldata.splice(2,4);
}]);
