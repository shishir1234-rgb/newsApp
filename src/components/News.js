import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "José Pontes",
        "title": "45% Of New Cars In Netherlands Now Plugin Cars!",
        "description": "In the Netherlands, 45% of new car sales were plugin car sales in August. Furthermore, 33% were full electrics. The Netherlands saw an increase in plugin registrations to 12,518 units in August, with the Dutch plugin vehicle (PEV) market thus reaching 45% of …",
        "url": "https://cleantechnica.com/2023/09/20/45-of-new-cars-in-netherlands-now-plugin-cars/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/2023-August-Netherlands-EV-Sales-Report.png",
        "publishedAt": "2023-09-20T04:10:57Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIn the Netherlands, 45% of new car sales were plugin car sales in August. Furthermore, 33% were full electric… [+6612 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla CEO Elon Musk Showcases Cybertruck As Innovative Departure In Auto Design",
        "description": "Tesla Inc TSLA CEO Elon Musk, on Monday, touted its upcoming Cybertruck as the much-needed “change” in auto design. What Happened: Musk posted a picture of the cybertruck on X, formerly Twitter, in response to Twitch co-founder and ex-CEO Emmett Shear who sha…",
        "url": "https://biztoc.com/x/d5921b5530cbbfd2",
        "urlToImage": "https://c.biztoc.com/p/d5921b5530cbbfd2/s.webp",
        "publishedAt": "2023-09-20T04:04:21Z",
        "content": "Tesla Inc TSLA CEO Elon Musk, on Monday, touted its upcoming Cybertruck as the much-needed change in auto design.What Happened: Musk posted a picture of the cybertruck on X, formerly Twitter, in resp… [+282 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Video: Tesla's Journey To Create $150M Megapack Battery System From The Ground Up",
        "description": "In a new development, CS Energy unveils a timelapse video of its $150 million Tesla Inc. TSLA Megapack project under construction in Queensland, Australia, Electrek reported. The Megapack, which was launched in 2019, has become a preferred choice for utility-…",
        "url": "https://biztoc.com/x/974b4b277f32bb68",
        "urlToImage": "https://c.biztoc.com/p/974b4b277f32bb68/s.webp",
        "publishedAt": "2023-09-20T04:04:19Z",
        "content": "In a new development, CS Energy unveils a timelapse video of its $150 million Tesla Inc. TSLA Megapack project under construction in Queensland, Australia, Electrek reported.The Megapack, which was l… [+289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Instacart, Nio, Avinger, Alibaba, Tesla: Why These 5 Stocks Are Trending Today",
        "description": "U.S. stocks experienced a downward trend as trading neared its close, with the Dow Jones witnessing a decline of over 100 points on Tuesday. The Dow decreased by 0.31%, settling at 34,517.73, while the NASDAQ experienced a drop of 0.23%, closing at 13,678.19.…",
        "url": "https://biztoc.com/x/2be4ad848b00e117",
        "urlToImage": "https://c.biztoc.com/p/2be4ad848b00e117/s.webp",
        "publishedAt": "2023-09-20T04:04:17Z",
        "content": "U.S. stocks experienced a downward trend as trading neared its close, with the Dow Jones witnessing a decline of over 100 points on Tuesday. The Dow decreased by 0.31%, settling at 34,517.73, while t… [+288 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Notebookcheck.net"
        },
        "author": "Julian van der Merwe",
        "title": "Video of Tesla Model 3 highway debris strike fire fuels EV safety discussion",
        "description": "A Tesla Model 3 caught fire and burned out on a New Jersey highway after hitting debris in the road at speed. The fire is reminiscent of a design weakness of early Model S units, which sparked an NHTSA investigation, and may highlight a need for more robust v…",
        "url": "https://www.notebookcheck.net/Video-of-Tesla-Model-3-highway-debris-strike-fire-fuels-EV-safety-discussion.752820.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/tesla-model-3-fire-teaser.jpeg",
        "publishedAt": "2023-09-20T04:02:00Z",
        "content": "A recent Tesla Model 3 fire caught on video and shared by the State Of Charge YouTube channel has reignited the debate about electric vehicle fires and thermal runaway when damage occurs. In this par… [+2004 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Stock futures are little changed ahead of Fed rate decision: Live updates - CNBC",
        "description": "Stock futures are little changed ahead of Fed rate decision: Live updatesCNBC Dow Jones Futures Fall: Market Avoids This Bearish Signal Ahead Of Fed Decision; Tesla Leads 12 Stocks To WatchInvestor's Business Daily Stocks Slide Before Fed DecisionBarron's The…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171858906",
        "urlToImage": null,
        "publishedAt": "2023-09-20T03:32:57Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Guest Contributor",
        "title": "The World Just Sweltered Through Hottest August On Record",
        "description": "August 2023 was Earth’s hottest August in NOAA’s 174-year climate record. The sizzling month also wrapped up the Northern Hemisphere’s",
        "url": "https://cleantechnica.com/2023/09/19/the-world-just-sweltered-through-hottest-august-on-record/",
        "urlToImage": "http://cleantechnica.com/files/2021/07/Dry-Heat-Sun-and-Rock-Cynthia-Shahan-CleanTechnica-e1626781549693.jpg",
        "publishedAt": "2023-09-20T03:32:45Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAugust 2023 was Earths hottest August in NOAAs 174-year climate record.\r\nThe sizzling month also wrapped up t… [+5005 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "People.cn"
        },
        "author": "F_400991",
        "title": "Commentary: For global investors, \"the next China\" is China",
        "description": "BEIJING, Sept. 20 (Xinhua) -- Two weeks ago, Tesla reached a new milestone in China after its Shangh",
        "url": "http://en.people.cn/n3/2023/0920/c90000-20074192.html",
        "urlToImage": null,
        "publishedAt": "2023-09-20T03:16:46Z",
        "content": "(Xinhua) 10:57, September 20, 2023\r\nBEIJING, Sept. 20 (Xinhua) -- Two weeks ago, Tesla reached a new milestone in China after its Shanghai Gigafactory rolled out its 2 millionth made-in-China vehicle… [+5701 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Guest Contributor",
        "title": "New Roadmap to Accelerate Offshore Wind Transmission in U.S.",
        "description": "Interior and Energy Departments Release Comprehensive Transmission Action Plan to Unlock America’s Vast Potential of Atlantic Offshore Wind Energy",
        "url": "https://cleantechnica.com/2023/09/19/new-roadmap-to-accelerate-offshore-wind-transmission-in-u-s/",
        "urlToImage": "http://cleantechnica.com/files/2022/08/CT-image-offshore-wind-farm.jpg",
        "publishedAt": "2023-09-20T03:13:31Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nRoadmap to Accelerate Offshore Wind Transmission and Improve Grid Resilience and Reliability\r\nWASHINGTON As p… [+8302 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Reuters",
        "title": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "description": "A senior Republican in Congress has raised concerns about Tesla's relationship with Chinese battery manufacturer CATL, questioning whether electric vehicle subsidies are being directed to foreign entities. The House Ways and Means Committee chairman, Represen…",
        "url": "https://economictimes.indiatimes.com/tech/technology/republican-lawmaker-seeks-details-of-tesla-relationship-with-chinese-battery-company-catl/articleshow/103796081.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-103796135,width-1200,height-630,imgsize-163042,overlay-ettech/photo.jpg",
        "publishedAt": "2023-09-20T02:52:00Z",
        "content": "A senior Republican in Congress asked Tesla Tuesday to detail its relationship with Chinese battery manufacturer CATL amid concerns electric vehicle subsidies are flowing to foreign entities raising … [+3436 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "POLITICO.eu"
        },
        "author": "Sergey Radchenko",
        "title": "We don’t know if Elon Musk brought Armageddon closer — all we know is uncertainty",
        "description": "Historians and public intellectuals aren’t prophets or revolutionaries. They should maintain cool heads and weigh their words carefully.",
        "url": "https://www.politico.eu/article/we-dont-know-if-elon-musk-brought-armageddon-closer-all-we-know-is-uncertainty-starlink-satellite-drones/",
        "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2018/05/GettyImages-855370170.jpg",
        "publishedAt": "2023-09-20T02:01:00Z",
        "content": "Press play to listen to this article\r\nVoiced by artificial intelligence.\r\nSergey Radchenko is the Wilson E. Schmidt Distinguished Professor at the Johns Hopkins School of Advanced International Studi… [+5810 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Riskhedge.com"
        },
        "author": "Mauldin Economics",
        "title": "The #1 Problem With Renewable Energy Is…",
        "description": "Today, I’ll share the #1 problem with renewables… and the once-in-a-generation opportunity it’s handing to investors like us.",
        "url": "https://www.riskhedge.com/post/the-number-one-problem-with-renewable-energy-is",
        "urlToImage": "https://www.valuewalk.com/wp-content/uploads/2023/09/Renewable-energy.jpeg",
        "publishedAt": "2023-09-20T01:27:39Z",
        "content": "Can you name Americas oil king?\r\nIts Texas, of course.\r\nRoughnecks pull 4X more black gold out of the ground there than in New Mexico, in second place.\r\nTexas is also Americas green energy capital. I… [+5768 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
        },
        {
        "source": {
        "id": null,
        "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Cryptocurrency market sees uptrend as major digital currencies record gains",
        "description": "Cryptocurrency market sees uptrend as major digital currencies record gains",
        "url": "https://www.investing.com/news/cryptocurrency-news/cryptocurrency-market-sees-uptrend-as-major-digital-currencies-record-gains-93CH-3177931",
        "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEH7Q068_L.jpg",
        "publishedAt": "2023-09-20T00:22:52Z",
        "content": "In an overall positive trading session on Tuesday, the cryptocurrency market experienced a general uptrend among major digital currencies. Polygon (MATICUSD) led the rally, registering a 1.54% growth… [+2296 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sputnikglobe.com"
        },
        "author": "Mary Manley",
        "title": "Report: US Justice Department Widens Probe Into Alleged Perks Musk Received From Tesla",
        "description": "A report has suggested that federal prosecutors may be pursuing potential criminal charges amid an ongoing investigation into the business practices of Tesla and its CEO Elon Musk.",
        "url": "https://sputnikglobe.com/20230920/report-us-justice-department-widens-probe-into-alleged-perks-musk-received-from-tesla-1113509542.html",
        "urlToImage": "https://cdn1.img.sputnikglobe.com/images/sharing/article/eng/1113509542.jpg?11093751781695168792",
        "publishedAt": "2023-09-20T00:15:35Z",
        "content": "The findings come three weeks after news first broke that the US Department if Justice was reportedly investigating Teslas use of company resources on a house for Musk. \r\nThe US Attorney's Office was… [+348 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Andy Schlafly",
        "title": "UAW 'social justice' demands 4-day work week",
        "description": "The Democrat takeover of Michigan in the last election is yielding more harmful consequences. The Detroit-based United Auto Workers (UAW) union has a new far-Left, anti-Trump president, who was elected by fewer than 500 votes in the runoff after losing the fi…",
        "url": "https://www.wnd.com/2023/09/uaw-social-justice-demands-4-day-work-week/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2023/01/joe-biden-electric-vehicles-cars-hummer-EVs.jpg",
        "publishedAt": "2023-09-20T00:03:14Z",
        "content": "The Democrat takeover of Michigan in the last election is yielding more harmful consequences. The Detroit-based United Auto Workers (UAW) union has a new far-Left, anti-Trump president, who was elect… [+5065 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "medium.datadriveninvestor.com",
        "title": "Can Targeting A Niche Market Make You Large Profits?",
        "description": "Exploring a niche market is fun. You have the opportunity to innovate and expand the market with less competition. Most entrepreneurs ignore this opportunity to enter a large market. This blog will explain why targeting a niche market is good, the benefits of…",
        "url": "https://biztoc.com/x/0b8f8d096bd7b13b",
        "urlToImage": "https://c.biztoc.com/p/0b8f8d096bd7b13b/s.webp",
        "publishedAt": "2023-09-20T00:02:26Z",
        "content": "Exploring a niche market is fun. You have the opportunity to innovate and expand the market with less competition. Most entrepreneurs ignore this opportunity to enter a large market. This blog will e… [+254 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Toyota Reveals Its Plan To Catch Up On EV Battery Technology",
        "description": "An anonymous reader writes: Toyota, the world's largest automaker, has a problem. Although the company is famous for pioneering lean methods of manufacturing and being an early pioneer of hybrid electric powertrains, the switch to battery electric vehicles ca…",
        "url": "https://hardware.slashdot.org/story/23/09/19/2231228/toyota-reveals-its-plan-to-catch-up-on-ev-battery-technology",
        "urlToImage": "https://a.fsdn.com/sd/topics/power_64.png",
        "publishedAt": "2023-09-20T00:02:00Z",
        "content": "Toyota, the world's largest automaker, has a problem. Although the company is famous for pioneering lean methods of manufacturing and being an early pioneer of hybrid electric powertrains, the switch… [+3604 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Activistpost.com"
        },
        "author": "Activist Post",
        "title": "Singapore, Dubai, Aruba Airports Embrace Biometrics for Passport-free Traveler Clearance",
        "description": "By Joel R. McConvey Activist Post Editor’s Note — All of the digital systems that have been rolled out in the name of convenience have...\nSingapore, Dubai, Aruba Airports Embrace Biometrics for Passport-free Traveler Clearance",
        "url": "https://www.activistpost.com/2023/09/singapore-dubai-aruba-airports-embrace-biometrics-for-passport-free-traveler-clearance.html",
        "urlToImage": "https://www.activistpost.com/wp-content/uploads/2023/09/biometric-travel-bu.jpg",
        "publishedAt": "2023-09-19T23:49:32Z",
        "content": "By Joel R. McConvey\r\nActivist Post Editor’s Note — All of the digital systems that have been rolled out in the name of convenience have led to more privacy threats, less security and more government … [+4074 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Stanford.edu"
        },
        "author": "Alex Samuel Harvison",
        "title": "Extended labor unrest",
        "description": "Stanford Law’s William Gould weighs in on the United Auto Workers strike: “The parties are far apart. I would expect the strike to build and last weeks, perhaps months.”",
        "url": "https://law.stanford.edu/2023/09/18/william-gould-on-the-uaw-strike-and-the-summer-of-red-hot-labor-unrest-extending-into-fall/",
        "urlToImage": "https://law.stanford.edu/wp-content/uploads/2015/06/william-b-gould-iv-2-1200x630.jpg",
        "publishedAt": "2023-09-19T23:45:49Z",
        "content": "On Friday, September 15, members of the United Auto Workers union at the three largest U.S. automakers, General Motors, Ford Motor Company, and Chrysler-parent company Stellantis, went on strikeexten… [+5375 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Memeorandum.com"
        },
        "author": null,
        "title": "Justice Department Probe Scrutinizes Elon Musk Perks at Tesla Going Back Years (Wall Street Journal)",
        "description": "Wall Street Journal:\nJustice Department Probe Scrutinizes Elon Musk Perks at Tesla Going Back Years  —  Federal prosecutors also have sought information about transactions between Tesla and other entities related to the billionaire  —  Federal prosecutors are…",
        "url": "https://www.memeorandum.com/230919/p72",
        "urlToImage": "https://images.wsj.net/im-853778/social",
        "publishedAt": "2023-09-19T23:45:03Z",
        "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "techcruhtthttps://nextbigfuture.s3.amazonaws.com/uploads/2023/09/Screen-Shot-2023-09-19-at-3.16.13-PM.jpgps://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/553278nch.com",
        "title": "DOJ investigates Elon Musk perks at Tesla",
        "description": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal probe that is also looking into the use of company funds to build a proposed glass house. The U.S. Attorney’s…",
        "url": "https://biztoc.com/x/e6df1e58b3a0d83f",
        "urlToImage": "https://c.biztoc.com/p/e6df1e58b3a0d83f/og.webp",
        
        "publishedAt": "2023-09-19T23:42:10Z",
        "content": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal probe that is also looking into the use of compan… [+301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HipHopDX"
        },
        "author": "Marisa Mendez",
        "title": "Blueface Refuses To Snitch On Man Who Allegedly Stabbed Him In Gym Altercation",
        "description": "Blueface was stabbed last month at a gym but is apparently refusing to cooperate with authorities to identify his assailant, so the case has stalled.",
        "url": "https://hiphopdx.com/news/blueface-refuses-snitch-stabbed-gym",
        "urlToImage": "https://static.hiphopdx.com/2023/09/blueface-refuses-to-snitch-on-man-who-allegedly-stabbed-him-in-gym-altercation-1200x675.jpg",
        "publishedAt": "2023-09-19T23:30:48Z",
        "content": "Bluefaces alleged assailant in his recent gym attack is apparently about to get off scot-free as the rapper does not want to snitch.\r\nAccording to a report from TMZ on Tuesday (September 19), the L.A… [+2350 chars]"
        },
        {
        "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
        },
        "author": "By IMRAN AHMED",
        "title": "Elon Musk's embrace of antisemitism, hate speech is a danger to Jews - opinion",
        "description": "Elon Musk's actions since taking the helm of X have additionally made it easier for extremists and neo-Nazis to publish and spread the anti-Jewish hatred, lies, and conspiracy theories.",
        "url": "https://www.jpost.com/opinion/article-759750",
        "urlToImage": "",
        "publishedAt": "2023-09-19T23:26:28Z",
        "content": "New research published last week by the Center for Countering Digital Hate (CCDH) shows that X (formerly Twitter) continues to host nearly 86% of the 300 posts we reported for hate speech which inclu… [+5150 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "Sam Cabral - BBC News, Washington",
        "title": "Elon Musk woos world leaders, courting controversy",
        "description": "Foreign leaders visiting the US are more enthusiastic than ever to meet with the world's richest man.",
        "url": "https://www.bbc.com/news/world-us-canada-66777096?xtor=AL-72-%5Bpartner%5D-%5Byahoo.north.america%5D-%5Bheadline%5D-%5Bnews%5D-%5Bbizdev%5D-%5Bisapi%5D",
        "urlToImage": "https://media.zenfs.com/en/bbc_us_articles_995/58b86b8dcf737bd86d03917f31c8905a",
        "publishedAt": "2023-09-19T23:20:53Z",
        "content": "He is \"very impressed\" with Emmanuel Macron. Narendra Modi can count him as \"a fan\". And Benjamin Netanyahu just dropped in to see him.\r\nA parade of foreign leaders on recent US trips, including on o… [+9375 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Elon Musk woos world leaders, courting controversy",
        "description": "Foreign leaders visiting the US are more enthusiastic than ever to meet with the world's richest man.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-66777096",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/109AD/production/_131131086_06_elon_musk_index_image_976x549.png",
        "publishedAt": "2023-09-19T23:20:52Z",
        "content": "He is \"very impressed\" with Emmanuel Macron. Narendra Modi can count him as \"a fan\". And Benjamin Netanyahu just dropped in to see him.\r\nA parade of foreign leaders on recent US trips, including on o… [+9624 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "forbes.com",
        "title": "DOJ Broadens Probe Into Alleged Tesla-Funded Glass House For Musk",
        "description": "Federal prosecutors are probing whether Tesla’s company resources were used to supply personal benefits to CEO Elon Musk as early as 2017, farther back then previously known, according to people familiar with the investigation who also said prosecutors have m…",
        "url": "https://biztoc.com/x/d92d1f9cdc3e3a35",
        "urlToImage": "https://c.biztoc.com/p/d92d1f9cdc3e3a35/og.webp",
        "publishedAt": "2023-09-19T23:14:09Z",
        "content": "Federal prosecutors are probing whether Teslas company resources were used to supply personal benefits to CEO Elon Musk as early as 2017, farther back then previously known, according to people famil… [+252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Elon Musk Glass House Case Sees Justice Department Looking Into Personal Benefits From Tesla: The Latest Details",
        "description": "Billionaire and Tesla Inc TSLA CEO Elon Musk faces an investigation from the Justice Department over a secretive project that included rumors of a glass house being built. Here’s the latest in the ongoing case. What Happened: The wealth of Musk has increased …",
        "url": "https://biztoc.com/x/3fa8ac4784668002",
        "urlToImage": "https://c.biztoc.com/p/3fa8ac4784668002/s.webp",
        "publishedAt": "2023-09-19T23:13:10Z",
        "content": "Billionaire and Tesla Inc TSLA CEO Elon Musk faces an investigation from the Justice Department over a secretive project that included rumors of a glass house being built.Heres the latest in the ongo… [+294 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "forbes.com.au",
        "title": "Elon Musk’s Neuralink wants volunteers for first human trial of its brain implant chips",
        "description": "Neuralink—billionaire Elon Musk’s brain implant company—announced Tuesday it received approval from an independent review board and hospital to begin its first in-human clinical trial for a chip that is implanted in one’s brain to control movement, and is now…",
        "url": "https://biztoc.com/x/0827e53af428ea9b",
        "urlToImage": "https://c.biztoc.com/p/0827e53af428ea9b/s.webp",
        "publishedAt": "2023-09-19T23:13:05Z",
        "content": "Neuralinkbillionaire Elon Musks brain implant companyannounced Tuesday it received approval from an independent review board and hospital to begin its first in-human clinical trial for a chip that is… [+248 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Bangkok Post"
        },
        "author": "Post Reporters",
        "title": "PM touts Thailand abroad",
        "description": "Prime Minister Srettha Thavisin said Tesla CEO Elon Musk will discuss possible investment opportunities in Thailand with the Thai delegation in New York via teleconference.",
        "url": "https://www.bangkokpost.com/business/investment/2649759/pm-touts-thailand-abroad",
        "urlToImage": "https://static.bangkokpost.com/media/content/20230920/c1_2649759_230920060017_700.jpg",
        "publishedAt": "2023-09-19T23:00:00Z",
        "content": "Prime Minister Srettha Thavisin said Tesla CEO Elon Musk will discuss possible investment opportunities in Thailand with the Thai delegation in New York via teleconference.\r\nMr Srettha was speaking w… [+3286 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Post Editorial Board",
        "title": "Times lockdown hypocrisy, Sheldon’s ‘dark money’ chutzpah and other commentary",
        "description": "If the New York Times wanted to “calm people’s fears about future Covid lockdowns” it must “acknowledge that almost all the policies” it advocated “were useless or destructive.”",
        "url": "https://nypost.com/2023/09/19/times-lockdown-hypocrisy-sheldons-dark-money-chutzpah-and-other-commentary/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000019810720-e1695163347263.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-09-19T22:42:59Z",
        "content": "Conservative: Times Lockdown Hypocrisy\r\nOnly a right-wing nutcase, according to the Times, would imagine that policymakers and their media boosters would overreact to the latest round of Covid infect… [+3939 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "International Business Times"
        },
        "author": "Issam AHMED",
        "title": "Tire Maker Honored For Tackling Electric Car Pollution",
        "description": "Electric cars are widely hailed as the future of transport, but even though they eliminate the issue of fuel emissions from tailpipes, the problem of particle pollution as a result of tire wear hasn't been resolved.",
        "url": "https://www.ibtimes.com/tire-maker-honored-tackling-electric-car-pollution-3712366",
        "urlToImage": "https://d.ibtimes.com/en/full/4487134/electric-car-charges-charging-point-reserved-tesla-cars.jpg",
        "publishedAt": "2023-09-19T22:27:40Z",
        "content": "Electric cars are widely hailed as the future of transport, but even though they eliminate the issue of fuel emissions from tailpipes, the problem of particle pollution as a result of tire wear hasn'… [+2852 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "'Magnificent Seven' investing playbook: Microsoft is an aircraft carrier 'at its apex,' analyst says",
        "description": "Now that summer’s coming to an end, that means it’s time to pull out your scarves, grab a pumpkin spice latte, and reassess your tech stocks. This series helps you decide what to do with your shares of the biggest names in tech — Apple, Alphabet, Amazon, Micr…",
        "url": "https://biztoc.com/x/63b1cc22a0a00321",
        "urlToImage": "https://c.biztoc.com/p/63b1cc22a0a00321/s.webp",
        "publishedAt": "2023-09-19T22:26:06Z",
        "content": "Now that summers coming to an end, that means its time to pull out your scarves, grab a pumpkin spice latte, and reassess your tech stocks. This series helps you decide what to do with your shares of… [+265 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "Anonymous Coward",
        "title": "Toyota Reveals Its Plan To Catch Up On EV Battery Technology",
        "description": "Toyota, the world's largest automaker, has a problem. Although the company is famous for pioneering lean methods of manufacturing and being an early pioneer of hybrid electric powertrains, the switch to battery electric vehicles caught it somewhat unprepared.…",
        "url": "https://slashdot.org/submission/17296486/toyota-reveals-its-plan-to-catch-up-on-ev-battery-technology",
        "urlToImage": null,
        "publishedAt": "2023-09-19T22:25:31Z",
        "content": "Toyota, the world's largest automaker, has a problem. Although the company is famous for pioneering lean methods of manufacturing and being an early pioneer of hybrid electric powertrains, the switch… [+3583 chars]"
        },
        {
        "source": {
        "id": "next-big-future",
        "name": "Next Big Future"
        },
        "author": "Brian Wang",
        "title": "Tesla Will Build a Car in Less Than an Hour Like Giant Lego",
        "description": "Tesla is heading to a few big lego pieces put together by Teslabots in less than one hour. This is the unboxed process and the progression of casting large and complex pieces. In 2020, the Tesla Model 3 had 10,000 parts and took about ten hours to build from …",
        "url": "https://www.nextbigfuture.com/2023/09/tesla-will-build-a-car-in-less-than-an-hour-like-giant-lego.html",
        "urlToImage": "",
        "publishedAt": "2023-09-19T22:18:18Z",
        "content": "Tesla is heading to a few big lego pieces put together by Teslabots in less than one hour. This is the unboxed process and the progression of casting large and complex pieces. \r\nIn 2020, the Tesla Mo… [+6179 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "teslarati.com",
        "title": "Tesla cleared of wrongdoing in toxic workplace lawsuit from shareholders",
        "description": "Tesla has been cleared of wrongdoing in a toxic workplace lawsuit that was brought on by shareholders. On Tuesday, a federal court ruled that the shareholders’ lawsuit had shortcomings in terms of the claims of their suit, which accused Tesla of causing both …",
        "url": "https://biztoc.com/x/014448c7c6185cac",
        "urlToImage": "https://c.biztoc.com/p/014448c7c6185cac/og.webp",
        "publishedAt": "2023-09-19T22:12:16Z",
        "content": "Tesla has been cleared of wrongdoing in a toxic workplace lawsuit that was brought on by shareholders.On Tuesday, a federal court ruled that the shareholders lawsuit had shortcomings in terms of the … [+306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Barron's"
        },
        "author": "Al Root",
        "title": "What the Investigation of Elon Musk's Perks Means for Tesla Stock",
        "description": "The Wall Street Journal reported that the Justice Department was looking at whether Tesla properly disclosed benefits that it may have paid to the CEO.",
        "url": "https://www.barrons.com/articles/tesla-stock-musk-perks-doj-criminal-investigation-156bd871",
        "urlToImage": "https://images.barrons.com/im-78022240/social",
        "publishedAt": "2023-09-19T22:08:42Z",
        "content": "Investors are going to have to pay a little closer attention to perks that may have flowed from \r\n Tesla\r\n to CEO Elon Musk. Its a headache, but the issue isnt moving the stock at this point. The Wal… [+2995 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Notebookcheck.net"
        },
        "author": "Vishal Bhardwaj",
        "title": "Tesla reportedly using 3D printed sand molds for 'gigacasting' large auto parts",
        "description": "Sources familiar with Tesla’s production plans have revealed that the company is working on using binder jetting, a special 3D printing technique, to create the sand molds needed for its ‘gigacasting’ process, where a large, complex part such as the underbody…",
        "url": "https://www.notebookcheck.net/Tesla-reportedly-using-3D-printed-sand-molds-for-gigacasting-large-auto-parts.752745.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ExOne_de-sanding.jpeg",
        "publishedAt": "2023-09-19T22:08:00Z",
        "content": "Anyone remotely familiar with 3D printing technology knows its biggest appeal: the ability to design and prototype multiple iterations of a part quickly and at low cost. It seems Tesla, known for its… [+2124 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AutoExpress"
        },
        "author": "Richard Ingram",
        "title": "New Volvo EX30 ride review",
        "description": "We hitch a lift in Volvo’s most important model for a decade; the new EX30 is a small electric SUV to rival the Jeep Avenger",
        "url": "https://www.autoexpress.co.uk/volvo/ex30/361005/new-volvo-ex30-ride-review",
        "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1695116419/autoexpress/2023/09/Volvo EX30 prototype-12.jpg",
        "publishedAt": "2023-09-19T22:06:45Z",
        "content": "The price is very much right with this new Volvo EX30. The small SUV will win favour on cost alone, though from this short spell in the passenger seat it seems there is lots more to like. Quiet, quic… [+5678 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "What the Investigation of Elon Musk’s Perks Means for Tesla Stock",
        "description": "Investors are going to have to pay a little closer attention to perks that may have flowed from Tesla to CEO Elon Musk. It’s a headache, but the issue isn’t moving the st...#tesla #elonmusk",
        "url": "https://biztoc.com/x/becc770debdce860",
        "urlToImage": "https://c.biztoc.com/p/becc770debdce860/s.webp",
        "publishedAt": "2023-09-19T22:04:24Z",
        "content": "Investors are going to have to pay a little closer attention to perks that may have flowed from Tesla to CEO Elon Musk. Its a headache, but the issue isnt moving the st...\r\n#tesla#elonmusk\r\nThis stor… [+27 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HuffPost"
        },
        "author": "Elyse Wanshel",
        "title": "Larry David Once Went Off On Elon Musk At A Wedding For Voting Republican",
        "description": "A new biography about Musk claims that the billionaire was \"baffled and annoyed\" by the comedian’s blunt confrontation.",
        "url": "https://www.huffpost.com/entry/larry-david-elon-musk-republican-wedding-uvalde_n_6509df74e4b07fc0ba9cf2cc",
        "urlToImage": "https://img.huffingtonpost.com/asset/650a0eee2300001f00fecb0e.jpg?cache=2oIE5u92st&ops=1200_630",
        "publishedAt": "2023-09-19T21:57:44Z",
        "content": "Larry David did not curb his enthusiasm for calling out Elon Musk.\r\nAccording to Walter Isaacsons new biography on the Tesla CEO, via Insider, the Seinfeld co-creator didnt hold back from expressing … [+1958 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "'Magnificent Seven' investing playbook: Microsoft is an aircraft carrier 'at its apex,' analyst says",
        "description": "Now that summer’s coming to an end, that means it’s time to pull out your scarves, grab a pumpkin spice latte, and reassess your tech stocks. This series helps you decide what to do with your shares of the biggest names in tech — Apple, Alphabet, Amazon, Micr…",
        "url": "https://biztoc.com/x/c59b22a4667143bc",
        "urlToImage": "https://c.biztoc.com/p/c59b22a4667143bc/s.webp",
        "publishedAt": "2023-09-19T21:40:08Z",
        "content": "Now that summers coming to an end, that means its time to pull out your scarves, grab a pumpkin spice latte, and reassess your tech stocks. This series helps you decide what to do with your shares of… [+253 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "MarketWatch Automation",
        "title": "Company Close Updates: Workhorse Group Inc. stock underperforms Tuesday when compared to competitors",
        "description": "Shares of Workhorse Group Inc. shed 2.98% to $0.55 Tuesday, on what proved to be an all-around grim trading session for the stock market, with the NASDAQ...",
        "url": "https://www.marketwatch.com/data-news/workhorse-group-inc-stock-underperforms-tuesday-when-compared-to-competitors-7c979e4e-e061a2594b05",
        "urlToImage": "https://images.mktw.net/im-220105/social",
        "publishedAt": "2023-09-19T21:40:01Z",
        "content": "Shares of Workhorse Group Inc. \r\n WKHS,\r\n -2.98%\r\nshed 2.98% to $0.55 Tuesday, on what proved to be an all-around grim trading session for the stock market, with the NASDAQ Composite Index \r\n COMP,\r\n… [+726 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Teslarati"
        },
        "author": "Zachary Visconti",
        "title": "Tesla long-term battery health slightly higher in cold climates: study",
        "description": "A new study of Teslas shows that cooler regions may actually be better for vehicle batteries in the long term, despite short-term range loss.",
        "url": "https://www.teslarati.com/tesla-long-term-battery-health-cold/",
        "urlToImage": "https://www.teslarati.com/wp-content/uploads/2023/06/tesla-model-y-rear-scaled.jpg",
        "publishedAt": "2023-09-19T21:32:50Z",
        "content": "Electric vehicles (EVs) often get a bad rap for range loss in cold climates, but a new study of Teslas shows that cooler regions may actually be better for an EVs battery over the long term.\r\nOn Mond… [+3346 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Alexandra Garfinkle",
        "title": "'Magnificent Seven' investing playbook: Microsoft is an aircraft carrier 'at its apex,' analyst says",
        "description": "Microsoft may be at an inflection point.",
        "url": "https://finance.yahoo.com/news/magnificent-seven-investing-playbook-microsoft-is-an-aircraft-carrier-at-its-apex-analyst-says-212521894.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Iq3APWVY38izXQXYDycbAQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MjA-/https://s.yimg.com/os/creatr-images/2019-01/f938a810-24d3-11e9-b9d5-f9aac60214e3",
        "publishedAt": "2023-09-19T21:25:21Z",
        "content": "Now that summers coming to an end, that means its time to pull out your scarves, grab a pumpkin spice latte, and reassess your tech stocks. This series helps you decide what to do with your shares of… [+4980 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "forbes.com",
        "title": "DOJ Broadens Probe Into Alleged Tesla-Funded Glass House For Musk",
        "description": "Federal prosecutors are probing whether Tesla’s company resources were used to supply personal benefits to CEO Elon Musk as early as 2017, farther back then previously known, according to people familiar with the investigation who also said prosecutors have m…",
        "url": "https://biztoc.com/x/4eed6373b9abb88f",
        "urlToImage": "https://c.biztoc.com/p/4eed6373b9abb88f/s.webp",
        "publishedAt": "2023-09-19T21:18:08Z",
        "content": "Federal prosecutors are probing whether Teslas company resources were used to supply personal benefits to CEO Elon Musk as early as 2017, farther back then previously known, according to people famil… [+252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Beast"
        },
        "author": "Helen Holmes",
        "title": "All the Worst Men Are Rushing to Defend Russell Brand",
        "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Getty/Reuters\r\nIt’s a truth universally acknowledged that if Andrew Tate is rushing to your defense—like Tate is currently doing on behalf of Russell Brand, the UK comedian newly accused of multiple counts…",
        "url": "https://www.thedailybeast.com/all-the-worst-men-are-rushing-to-defend-russell-brand",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1695157294/230919-russell-brand-tease_sz6ud6",
        "publishedAt": "2023-09-19T21:17:12Z",
        "content": "Its a truth universally acknowledged that if Andrew Tate is rushing to your defenselike Tate is currently doing on behalf of Russell Brand, the UK comedian newly accused of multiple counts of sexual … [+3066 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Beast"
        },
        "author": "Chaya Tong",
        "title": "Musk Federal Criminal Investigation Broadens Time Frame and Scope",
        "description": "Nathan Howard/Getty Images\r\nA federal criminal investigation into the money Tesla possibly supplied Elon Musk is examining the company’s relationship with entities close to Musk and a glass home for the billionaire financed with company funds. “Project 42,” a…",
        "url": "https://www.thedailybeast.com/elon-musk-federal-criminal-investigation-examines-tesla-relationship-since-2017",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3107,w_5524,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1695157303/GettyImages-1678533914_fkvhjs",
        "publishedAt": "2023-09-19T21:14:40Z",
        "content": "A federal criminal investigation into the money Tesla possibly supplied Elon Musk is examining the companys relationship with entities close to Musk and a glass home for the billionaire financed with… [+592 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "The Feed",
        "title": "X may charge users monthly fee, says Elon Musk. Here’s what happened",
        "description": "X chief Elon Musk has hinted at charging users a small monthly fee. X is already charging a monthly fee for a verified account.",
        "url": "https://economictimes.indiatimes.com/news/international/us/x-may-charge-users-monthly-fee-says-elon-musk-heres-what-happened/articleshow/103792090.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-103792091,width-1200,height-630,imgsize-11812,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-09-19T21:12:25Z",
        "content": "If you are a user of social media platform X (formerly known as Twitter), you may have to pay a monthly fee in the future. The company has not yet made any announcement on this matter, but its boss E… [+2525 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PCMag.com"
        },
        "author": "Emily Dreibelbis",
        "title": "Feds Give UT Dallas $30 Million to Help the US Beat China on Battery Tech",
        "description": "The funds were awarded through a DoD program aimed at growing technologies considered 'essential to national security.'\nThe US Department of Defense is looking to improve America's battery technology expertise, and it's giving the University of Texas at Dalla…",
        "url": "https://me.pcmag.com/en/cars-auto/19395/feds-give-ut-dallas-30-million-to-help-the-us-beat-china-on-battery-tech",
        "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/f/feds-give-/feds-give-ut-dallas-30-million-to-help-the-us-beat-china-on_yncw.1200.jpg",
        "publishedAt": "2023-09-19T21:07:23Z",
        "content": "The US Department of Defense is looking to improve America's battery technology expertise, and it's giving the University of Texas at Dallas (UTD) $30 million to figure out how to do that.\r\nUTD will … [+1715 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PCMag.com"
        },
        "author": "Emily Dreibelbis",
        "title": "Feds Give UT Dallas $30 Million to Help the US Beat China on Battery Tech",
        "description": "The funds were awarded through a DoD program aimed at growing technologies considered 'essential to national security.'\nThe US Department of Defense is looking to improve America's battery technology expertise, and it's giving the University of Texas at Dalla…",
        "url": "https://uk.pcmag.com/cars-auto/148721/feds-give-ut-dallas-30-million-to-help-the-us-beat-china-on-battery-tech",
        "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/f/feds-give-/feds-give-ut-dallas-30-million-to-help-the-us-beat-china-on_u1tj.1200.jpg",
        "publishedAt": "2023-09-19T21:07:23Z",
        "content": "The US Department of Defense is looking to improve America's battery technology expertise, and it's giving the University of Texas at Dallas (UTD) $30 million to figure out how to do that.\r\nUTD will … [+1715 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "techcrunch.com",
        "title": "DOJ investigates Elon Musk perks at Tesla",
        "description": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal probe that is also looking into the use of company funds to build a proposed glass house. The U.S. Attorney’s…",
        "url": "https://biztoc.com/x/39377cb79775632f",
        "urlToImage": "https://c.biztoc.com/p/39377cb79775632f/s.webp",
        "publishedAt": "2023-09-19T21:02:05Z",
        "content": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal probe that is also looking into the use of compan… [+301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Times of Israel"
        },
        "author": null,
        "title": "Hundreds protest overhaul in New York as Netanyahu meets with world leaders",
        "description": "Israelis from an array of protest groups gather in Times Square and outside PM's hotel after he arrives for UN General Assembly, meeting with Biden",
        "url": "https://www.timesofisrael.com/hundreds-protest-overhaul-in-new-york-as-netanyahu-meets-with-world-leaders/",
        "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/09/20230919_untitled_04342-1024x640.jpg",
        "publishedAt": "2023-09-19T20:55:10Z",
        "content": "NEW YORK — Several hundred protesters rallied in New York City’s Times Square on Tuesday to protest Prime Minister Benjamin Netanyahu’s visit to the US for the UN General Assembly and meetings with P… [+6383 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "MarketWatch Automation",
        "title": "Company Close Updates: General Motors Co. stock rises Tuesday, outperforms market",
        "description": "Shares of General Motors Co. advanced 1.86% to $33.96 Tuesday, on what proved to be an all-around dismal trading session for the stock market, with the S&P...",
        "url": "https://www.marketwatch.com/data-news/general-motors-co-stock-rises-tuesday-outperforms-market-d2456fc1-9bf16b35e0fd",
        "urlToImage": "https://images.mktw.net/im-220105/social",
        "publishedAt": "2023-09-19T20:52:57Z",
        "content": "Shares of General Motors Co. \r\n GM,\r\n +1.86%\r\nadvanced 1.86% to $33.96 Tuesday, on what proved to be an all-around dismal trading session for the stock market, with the S&amp;P 500 Index \r\n SPX,\r\n -0… [+604 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "Justice Department Probe Scrutinizes Elon Musk Perks at Tesla Going Back Years - WSJ",
        "description": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017—longer than previously known—as part of a criminal investigation examining issues including a proposed house for the chief executive.#tesla #elonmusk",
        "url": "https://biztoc.com/x/e01aa5a6717af943",
        "urlToImage": "https://c.biztoc.com/p/e01aa5a6717af943/og.webp",
        "publishedAt": "2023-09-19T20:52:16Z",
        "content": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017longer than previously knownas part of a criminal investigation examining issues including a propose… [+83 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Rebecca Bellan",
        "title": "DOJ investigates Elon Musk perks at Tesla | TechCrunch",
        "description": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal",
        "url": "https://techcrunch.com/2023/09/19/doj-investigates-elon-musk-perks-at-tesla/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1358939083.jpg?resize=1200,675",
        "publishedAt": "2023-09-19T20:46:11Z",
        "content": "The U.S. Department of Justice is investigating the personal benefits that Tesla may have provided its CEO Elon Musk since 2017 as part of a criminal probe that is also looking into the use of compan… [+2094 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "financialjuice.com",
        "title": "US Market Wrap",
        "description": "Treasury yields rose and stocks fell on the eve of the Federal Reserve decision, with investors betting that interest rates will remain higher for a longer period of time to prevent an inflationary spike. Brent crude briefly surpassed $95 per barrel.- US 5-ye…",
        "url": "https://biztoc.com/x/ef2a1bde25298749",
        "urlToImage": "https://c.biztoc.com/253/og.png",
        "publishedAt": "2023-09-19T20:30:44Z",
        "content": "Treasury yields rose and stocks fell on the eve of the Federal Reserve decision, with investors betting that interest rates will remain higher for a longer period of time to prevent an inflationary s… [+312 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fark.com"
        },
        "author": null,
        "title": "This might come as a surprise, but the Tesla road rage guy has an extensive history of violence [Followup]",
        "description": "This might come as a surprise, but the Tesla road rage guy has an extensive history of violence",
        "url": "https://www.fark.com/comments/12996714/This-might-come-as-a-surprise-but-Tesla-road-rage-guy-has-an-extensive-history-of-violence",
        "urlToImage": "https://img.fark.net/images/2013/site/farkLogo2Big.gif",
        "publishedAt": "2023-09-19T20:30:01Z",
        "content": "Thingster:Marcus Aurelius: He either got incredibly lucky, or more likely chose his victims carefully.  This kind of behavior will get you shot.\r\nIt looks like he picked his victims.\r\nMy first reacti… [+391 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Scooter Doll",
        "title": "Redwood Materials expands presence in Europe, acquiring its leading Li-ion battery recycler",
        "description": "Less than two years after sharing expansion plans for Europe, US-based battery recycling specialist Redwood Materials is adding Germany to its map of locations. Today, the company announced the acquisition of Redux Recycling GmbH – the leading lithium ion bat…",
        "url": "https://electrek.co/2023/09/19/redwood-materials-expands-europe-acquiring-leading-battery-recycler/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/Redwood-materials-Europe.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-09-19T20:28:13Z",
        "content": "Less than two years after sharing expansion plans for Europe, US-based battery recycling specialist Redwood Materials is adding Germany to its map of locations. Today, the company announced the acqui… [+2695 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Sara Dorn, Forbes Staff, \n Sara Dorn, Forbes Staff\n https://www.forbes.com/sites/saradorn/",
        "title": "DOJ Broadens Probe Into Alleged Tesla-Funded Glass House For Musk—Indicating Possible Criminal Charges, Report Says",
        "description": "Prosecutors have referenced the involvement of a grand jury, the Journal reported.",
        "url": "https://www.forbes.com/sites/saradorn/2023/09/19/doj-broadens-probe-into-alleged-tesla-funded-glass-house-for-musk-indicating-possible-criminal-charges-report-says/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650a0293dcbbe39113bba901/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-09-19T20:22:15Z",
        "content": "Federal prosecutors are probing whether Teslas company resources were used to supply personal benefits to CEO Elon Musk as early as 2017, farther back then previously known, according to people famil… [+2615 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "description": "[1/2] A Tesla logo on a Model S is photographed inside of a Tesla dealership in New York, U.S., April 29, 2016. REUTERS/Lucas Jackson/File Photo Acquire Licensing Rights WASHINGTON, Sept 19 (Reuters) - The chair of the House Ways and Means Committee asked Tes…",
        "url": "https://biztoc.com/x/4e16b9d372f37bd2",
        "urlToImage": "https://c.biztoc.com/p/4e16b9d372f37bd2/s.webp",
        "publishedAt": "2023-09-19T20:22:06Z",
        "content": "[1/2] A Tesla logo on a Model S is photographed inside of a Tesla dealership in New York, U.S., April 29, 2016. REUTERS/Lucas Jackson/File Photo Acquire Licensing RightsWASHINGTON, Sept 19 (Reuters) … [+278 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tech Xplore"
        },
        "author": "Jeff Amy",
        "title": "Hyundai rushing to open Georgia plant because of law rewarding domestic electric vehicle production",
        "description": "A top Hyundai executive said Tuesday that the company is rushing to start electric vehicle and battery production as soon as possible at a $7.6 billion complex in coastal Georgia, spurred by federal electric vehicle incentives that reward domestic production.",
        "url": "https://techxplore.com/news/2023-09-hyundai-georgia-law-rewarding-domestic.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/hyundai-rushing-to-ope.jpg",
        "publishedAt": "2023-09-19T20:14:43Z",
        "content": "A top Hyundai executive said Tuesday that the company is rushing to start electric vehicle and battery production as soon as possible at a $7.6 billion complex in coastal Georgia, spurred by federal … [+5253 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "description": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "url": "https://www.investing.com/news/stock-market-news/republican-lawmaker-seeks-details-of-tesla-relationship-with-chinese-battery-company-catl-3177843",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEB320ES_L.jpg",
        "publishedAt": "2023-09-19T20:14:33Z",
        "content": "We encourage you to use comments to engage with other users, share your perspective and ask questions of authors and each other. However, in order to maintain the high level of discourse we’ve all co… [+2321 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Reuters",
        "title": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "description": "The chair of the House Ways and Means Committee asked Tesla Tuesday to detail its relationship with Chinese battery manufacturer CATL.  Republicans in...",
        "url": "https://finance.yahoo.com/news/republican-lawmaker-seeks-details-tesla-200632939.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/1f4a5488fc4b1cd3e001f0cf3089cf24",
        "publishedAt": "2023-09-19T20:06:32Z",
        "content": "WASHINGTON (Reuters) - The chair of the House Ways and Means Committee asked Tesla Tuesday to detail its relationship with Chinese battery manufacturer CATL.\r\nRepublicans in Congress have been probin… [+451 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Libsyn.com"
        },
        "author": null,
        "title": "Three Strikes",
        "description": "The United Auto Workers are taking on the entire Big Three at once for the first time ever. (00:21) Ricky Mulvey and Asit Sharma discuss:  - How investors can measure an automaker’s profits.  - A long-term problem for legacy carmakers.  - The impact of the st…",
        "url": "https://fool.libsyn.com/three-strikes",
        "urlToImage": null,
        "publishedAt": "2023-09-19T20:00:00Z",
        "content": "The United Auto Workers are taking on the entire Big Three at once for the first time ever. (00:21) Ricky Mulvey and Asit Sharma discuss:- How investors can measure an automakers profits.- A long-ter… [+402 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "Republican lawmaker seeks details of Tesla relationship with Chinese battery company CATL",
        "description": "(marketscreener.com) The chair of the House\nWays and Means Committee asked Tesla Tuesday to detail\nits relationship with Chinese battery manufacturer CATL\n.\n Republicans in Congress have been probing Ford Motor's\nplanned $3.5 billion investment to build a bat…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Republican-lawmaker-seeks-details-of-Tesla-relationship-with-Chinese-battery-company-CATL-44878938/",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-06/2023-06-19T160232Z_1_LYNXMPEJ5I0GZ_RTROPTP_3_AUTOSHOW-SHANGHAI.JPG",
        "publishedAt": "2023-09-19T19:50:43Z",
        "content": "WASHINGTON, Sept 19 (Reuters) - The chair of the House\r\nWays and Means Committee asked Tesla Tuesday to detail\r\nits relationship with Chinese battery manufacturer CATL\r\n.\r\nRepublicans in Congress hav… [+471 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "Insurance Majors Invest In Fossil Fuels While Cutting Coverage Due To Climate Risks",
        "description": "US-based insurance companies are running away from climate-related risks while propping up fossil fuel companies.",
        "url": "https://cleantechnica.com/2023/09/19/insurance-majors-invest-in-fossil-fuels-while-cutting-coverage-due-to-climate-risks/",
        "urlToImage": "https://cleantechnica.com/files/2023/08/forest-fire-unsplash-scaled.jpeg",
        "publishedAt": "2023-09-19T19:45:58Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA new report unveiled this month finds that the US insurance sector held $536 billion in fossil fuel-related … [+15696 chars]"
        },
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Hanna Panreck",
        "title": "Larry David accused stunned Elon Musk at a wedding of supporting child murder: Book",
        "description": "Comedian Larry David confronted billionaire Elon Musk at a wedding over the X owner's support for the GOP, according to a new book.",
        "url": "https://www.foxnews.com/media/larry-david-accused-stunned-elon-musk-wedding-supporting-child-murder-book",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/LARRY-DAVID-ELON-MUSK-SPLIT.jpg",
        "publishedAt": "2023-09-19T19:37:49Z",
        "content": "According to a new book, liberal comedian Larry David confronted billionaire Elon Musk at wedding they both attended over his support for the Republican Party, equating it with supporting child murde… [+3882 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "JEFF AMY",
        "title": "Hyundai rushing to open Georgia plant because of law rewarding domestic electric vehicle production",
        "description": "A top Hyundai executive said Tuesday that the company is rushing to start electric vehicle and battery production as soon as possible at a $7.6 billion...",
        "url": "https://finance.yahoo.com/news/hyundai-rushing-open-georgia-plant-193320451.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/k9yXuucLdG8XjMWSEsVfCQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/e8c9dcf89af048041eb3b5cc0f06b64f",
        "publishedAt": "2023-09-19T19:33:20Z",
        "content": "ATLANTA (AP) A top Hyundai executive said Tuesday that the company is rushing to start electric vehicle and battery production as soon as possible at a $7.6 billion complex in coastal Georgia, spurre… [+4168 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Remeredzai Joseph Kuhudzai",
        "title": "Zambia’s President Met With BYD & CATL On A Recent State Visit To China",
        "description": "Zambia’s President Hakainde Hichilema recently returned from a state visit to China. During that visit, he met with BYD and CATL, which are some of the leading players globally in the electric vehicle and stationary storage ecosystem. In a post on X, Presiden…",
        "url": "https://cleantechnica.com/2023/09/19/zambias-president-met-with-byd-catl-on-a-recent-state-visit-to-china/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/20230919_144201.jpg",
        "publishedAt": "2023-09-19T19:15:36Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nZambias President Hakainde Hichilema recently returned from a state visit to China. During that visit, he met… [+4720 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "Justice Department Probe Scrutinizes Elon Musk Perks at Tesla Going Back Years",
        "description": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017—longer than previously known—as part of a criminal investigation examining issues including a proposed house for the chief executive.#tesla #elonmusk",
        "url": "https://biztoc.com/x/2bfe8630c250abb6",
        "urlToImage": "https://c.biztoc.com/p/2bfe8630c250abb6/s.webp",
        "publishedAt": "2023-09-19T19:08:14Z",
        "content": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017longer than previously knownas part of a criminal investigation examining issues including a propose… [+83 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Socialmediaexplorer.com"
        },
        "author": "Adam",
        "title": "Elon Musk Continues His Path Of Destruction, Says Twitter Might Charge Everyone For Access",
        "description": "Elon Musk (File) Tesla and SpaceX’s CEO Elon Musk speaking at SATELLITE Conference and Exhibition March 9, … [+]Washington 2020. Musk’s refusal to allow Ukraine to use Starlink internet services to launch a surprise attack...read more\nThe post Elon Musk Conti…",
        "url": "https://socialmediaexplorer.com/content-sections/news-and-noise/elon-musk-continues-his-path-of-destruction-says-twitter-might-charge-everyone-for-access/",
        "urlToImage": "https://socialmediaexplorer.com/wp-content/uploads/2023/09/0x0.jpg",
        "publishedAt": "2023-09-19T19:03:12Z",
        "content": "Elon Musk (File) Tesla and SpaceX’s CEO Elon Musk speaking at SATELLITE Conference and Exhibition March 9, … [+]Washington 2020. Musks refusal to allow Ukraine to use Starlink internet services to la… [+3328 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Federal probe examines Tesla perks given to Musk going back several years",
        "description": "Federal probe examines Tesla perks given to Musk going back several years",
        "url": "https://www.investing.com/news/stock-market-news/federal-probe-examines-tesla-perks-given-to-musk-going-back-several-years-432SI-3177798",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPED920A7_L.jpg",
        "publishedAt": "2023-09-19T19:02:07Z",
        "content": "An exclusive story by the Wall Street Journal Tuesday reports that federal prosecutors in a probe of electric vehicle maker Tesla (NASDAQ:TSLA) are scrutinizing personal benefits the company may have… [+2273 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Shannon Thaler",
        "title": "Car prices could surge 10% or more as UAW strike enters second week",
        "description": "Car prices could surge 10% and more, according to experts -- even as the bitter standoff threatens GM and Ford with punishing losses as high as $125 million a week.",
        "url": "https://nypost.com/2023/09/19/car-prices-could-surge-10-or-more-as-uaw-strike-enters-second-week/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/AFP_33VK7MF.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-09-19T19:01:26Z",
        "content": "Car prices could surge 10% and more as the United Auto Workers threatens additional walkouts, according to experts — even as the bitter standoff threatens GM and Ford with punishing losses as high as… [+5311 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Rikka Altland",
        "title": "Segway SuperScooter GT1 lands at new $1,500 low, Sun Joe electric pressure washer $87, more",
        "description": "The best price ever is now available on the Segway SuperScooter GT1 at $1,500. Now live with $1,300 in savings attached, you’ll also be able to lock-in a new low on Sun Joe’s 1,450 PSI electric pressure washer at $87. We also have some Rad Power cargo e-bikes…",
        "url": "https://electrek.co/2023/09/19/segway-superscooter-gt1-lands-at-new-1500-low-sun-joe-electric-pressure-washer-87-more/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/01/segway-superscooter-2-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-09-19T19:00:24Z",
        "content": "The best price ever is now available on the Segway SuperScooter GT1 at $1,500. Now live with $1,300 in savings attached, you’ll also be able to lock-in a new low on Sun Joes 1,450 PSI electric pressu… [+3393 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Tomi Kilgore",
        "title": ": Nio’s stock suffering worst day in 11 months after convertible debt offering",
        "description": "Shares of Nio Inc. NIO tumbled 15.1% toward a three-month low in afternoon trading Tuesday, after the electric vehicle maker announced plans for a $1 billion debt offering that can be converted into shares. The selloff was on track for the biggest one-day per…",
        "url": "https://www.marketwatch.com/story/nios-stock-suffering-worst-day-in-11-months-after-convertible-debt-offering-eef4209e",
        "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
        "publishedAt": "2023-09-19T18:55:42Z",
        "content": "Shares of Nio Inc. \r\n NIO,\r\n -16.00%\r\ntumbled 15.1% toward a three-month low in afternoon trading Tuesday, after the electric vehicle maker announced plans for a $1 billion debt offering that can be … [+585 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Why Porsche failed to trademark an unusual EV technology",
        "description": "Sports cars are built for the best driving experience. The wind in your hair, the power at the touch of the gas pedal and the angry rumble from a high performance engine are just some attributes customers expect from a Porsche (POAHY) - Get Free Report. When …",
        "url": "https://biztoc.com/x/65fe8919ab7ffb44",
        "urlToImage": "https://c.biztoc.com/p/65fe8919ab7ffb44/s.webp",
        "publishedAt": "2023-09-19T18:50:50Z",
        "content": "Sports cars are built for the best driving experience. The wind in your hair, the power at the touch of the gas pedal and the angry rumble from a high performance engine are just some attributes cust… [+285 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PCMag.com"
        },
        "author": "Emily Dreibelbis",
        "title": "Tesla Model 3 Is First EV to Crack List of Top 10 Most Leased Vehicles in US",
        "description": "The electric sedan ranks seventh with 1.79% of total new vehicle leases in the US in Q2.\nThe Tesla Model 3 is the now seventh most-leased vehicle in the US, marking the first time an EV has made the top 10. Overall, it's captured 1.79% of new vehicle leases i…",
        "url": "https://me.pcmag.com/en/cars-auto/19391/tesla-model-3-is-first-ev-to-crack-list-of-top-10-most-leased-vehicles-in-us",
        "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/t/tesla-mode/tesla-model-3-is-first-ev-to-crack-list-of-top-10-most-lease_c4sr.1200.jpg",
        "publishedAt": "2023-09-19T18:47:51Z",
        "content": "The Tesla Model 3 is the now seventh most-leased vehicle in the US, marking the first time an EV has made the top 10. Overall, it's captured 1.79% of new vehicle leases in Q2 of 2023, according to da… [+1397 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PCMag.com"
        },
        "author": "Emily Dreibelbis",
        "title": "Tesla Model 3 Is First EV to Crack List of Top 10 Most Leased Vehicles in US",
        "description": "The electric sedan ranks seventh with 1.79% of total new vehicle leases in the US in Q2.\nThe Tesla Model 3 is the now seventh most-leased vehicle in the US, marking the first time an EV has made the top 10. Overall, it's captured 1.79% of new vehicle leases i…",
        "url": "https://uk.pcmag.com/cars-auto/148718/tesla-model-3-is-first-ev-to-crack-list-of-top-10-most-leased-vehicles-in-us",
        "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/t/tesla-mode/tesla-model-3-is-first-ev-to-crack-list-of-top-10-most-lease_1hc2.1200.jpg",
        "publishedAt": "2023-09-19T18:47:51Z",
        "content": "The Tesla Model 3 is the now seventh most-leased vehicle in the US, marking the first time an EV has made the top 10. Overall, it's captured 1.79% of new vehicle leases in Q2 of 2023, according to da… [+1397 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Steve Denning, Senior Contributor, \n Steve Denning, Senior Contributor\n https://www.forbes.com/sites/stevedenning/",
        "title": "How To Unpack The Culture Of The Digital-Age Winners",
        "description": "The Underlying Assumptions Of The Digital-Age Winners Differ From Those Of Industrial-Era Management, And Are Key To Understanding Their Vastly Superior Performance",
        "url": "https://www.forbes.com/sites/stevedenning/2023/09/19/how-to-unpack-the-culture-of-the-digital-age-winners/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6509b388fa1448f0a22250ba/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-09-19T18:46:59Z",
        "content": "Figure 1: Digital-age management is overwhelming industrial-era management like a tsunami\r\nShutterstock; Stephen Denning\r\nWhile every corporate culture is unique, the corporate cultures of the digita… [+7638 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "U.S. Department of Energy",
        "title": "A (Virtual) Deep Dive Into Marine Energy’s Capabilities",
        "description": "Teachers, students -- and anyone else with a passion for renewables -- can visit Renewable Energy Discovery (REDi) Island to virtually see cutting-edge marine energy technologies in action.",
        "url": "https://cleantechnica.com/2023/09/19/a-virtual-deep-dive-into-marine-energys-capabilities/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/20230918-a-virtual-deep-dive-fullwidth.jpg",
        "publishedAt": "2023-09-19T18:45:04Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThere is big energy lying under the waves that crash on our shores and in the tides that come in and out each… [+8002 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "WND News Services",
        "title": "EV manufacturers may have links to Chinese region notorious for slave labor",
        "description": "By Nick Pope Daily Caller News Foundation Several Western electric vehicle (EV) manufacturers appear to have connections to a region of China known for slave labor, the Washington Post reported. The EV supply chains of Ford, Volkswagen and Tesla all appear to…",
        "url": "https://www.wnd.com/2023/09/ev-manufacturers-may-links-chinese-region-notorious-slave-labor/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2023/03/electric-vehicles-evs-cars-tesla-charging-station-unsplash.jpg",
        "publishedAt": "2023-09-19T18:42:42Z",
        "content": "By Nick PopeDaily Caller News Foundation\r\nSeveral Western electric vehicle (EV) manufacturers appear to have connections to a region of China known for slave labor, the Washington Post reported.\r\nThe… [+4018 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ValueWalk"
        },
        "author": "Louis Navellier",
        "title": "The Big 3’s Potential Chinese Alliance – Surviving In The EV Industry",
        "description": "The Big 3 may soon have to make a Chinese alliance to stay competitive in EVs, just like VW Group recently paid $700 million for a 5% stake in China’s XPeng Motors.",
        "url": "https://www.valuewalk.com/the-big-3s-potential-chinese-alliance-surviving-in-the-ev-industry/",
        "urlToImage": "https://www.valuewalk.com/wp-content/uploads/2022/12/China.jpeg",
        "publishedAt": "2023-09-19T18:41:01Z",
        "content": "In his podcast addressing the markets today, Louis Navellier offered the following commentary.\r\nIf you wish to listen to this commentary, please click here.\r\nRelief Rally\r\nWe have a pretty good tone … [+8714 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "Justice Department Probe Scrutinizes Elon Musk Perks at Tesla Going Back Years",
        "description": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017—longer than previously known—as part of a criminal investigation examining issues including a proposed house for the chief executive.#tesla #elonmusk",
        "url": "https://biztoc.com/x/47edabe1736da631",
        "urlToImage": "https://c.biztoc.com/p/47edabe1736da631/s.webp",
        "publishedAt": "2023-09-19T18:38:08Z",
        "content": "Federal prosecutors are scrutinizing personal benefits Tesla may have provided Elon Musk since 2017longer than previously knownas part of a criminal investigation examining issues including a propose… [+83 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Paolo Confino",
        "title": "AI's existential threat is a ‘completely bonkers distraction’ because there are 'like 101 more practical issues' to talk about, top founder in the field says",
        "description": "Suleyman, one of the world’s leading AI experts believes talk of “existential risk stuff” from the likes of Elon Musk distracts from the pressing need for AI regulation.",
        "url": "https://fortune.com/2023/09/19/ai-existential-risk-threat-bonkers-distraction-regulation-deepmind-mustafa-suleyman/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/09/GettyImages-961707246-e1695144371561.jpg?resize=1200,600",
        "publishedAt": "2023-09-19T18:36:02Z",
        "content": "Elon Musk has repeatedly referred to AI as a civilizational risk. Geoffrey Hinton, one of the founding fathers of AI research, changed his tune recently, calling AI an existential threat. And then th… [+5591 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "DOJ investigation examines Musk perks at Tesla since 2017, WSJ reports",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3781248/TSLA-DOJ-investigation-examines-Musk-perks-at-Tesla-since--WSJ-reports",
        "urlToImage": "https://thefly.com/images/meta/periodicals.jpg",
        "publishedAt": "2023-09-19T18:35:42Z",
        "content": "Earnings calls, analyst events, roadshows and more"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "techcrunch.com",
        "title": "Redwood Materials acquires European battery recycler in expansion push",
        "description": "Redwood Materials said Tuesday it acquired lithium-ion battery recycler Redux Recycling, a purchase meant to accelerate U.S. company’s expansion into Europe. This is Redwood’s second acquisition since former Tesla co-founder and CTO JB Straubel founded the ba…",
        "url": "https://biztoc.com/x/a18de3d2c16ff050",
        "urlToImage": "https://c.biztoc.com/p/a18de3d2c16ff050/s.webp",
        "publishedAt": "2023-09-19T18:34:07Z",
        "content": "Redwood Materials said Tuesday it acquired lithium-ion battery recycler Redux Recycling, a purchase meant to accelerate U.S. companys expansion into Europe.This is Redwoods second acquisition since f… [+309 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "US JUSTICE DEPARTMENT PROBE SCRUTINIZES ELON MUSK PERKS AT TESLA…",
        "description": "(marketscreener.com) \n US JUSTICE DEPARTMENT PROBE SCRUTINIZES ELON MUSK PERKS AT TESLA GOING BACK YEARS- WSJ\n https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/US-JUSTICE-DEPARTMENT-PROBE-SCRUTINIZES-ELON-MUSK-PERKS-AT-TESLA-8230-44878640/?ut…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/US-JUSTICE-DEPARTMENT-PROBE-SCRUTINIZES-ELON-MUSK-PERKS-AT-TESLA-8230-44878640/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
        "publishedAt": "2023-09-19T18:31:05Z",
        "content": "Stellantis N.V. : Why so little interest from investors?\r\nSeptember 06, 2023 at 10:35 am EDT"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Jennifer Sensiba",
        "title": "Hyundai EVs Win Several Awards For Safety & Innovation",
        "description": "In recent days, Hyundai announced that it won a number of important safety and design awards. Two vehicles got the IIHS Top Safety Pick+ designation, and one of them also got chosen by Wards as one of the top ten drivetrains on the market for 2023. Safety Awa…",
        "url": "https://cleantechnica.com/2023/09/19/hyundai-evs-win-several-awards-for-safety-innovation/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/Hyundai-Skateboard-2000x1000-Press-Image.png",
        "publishedAt": "2023-09-19T18:25:23Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIn recent days, Hyundai announced that it won a number of important safety and design awards. Two vehicles go… [+8076 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Autoblog"
        },
        "author": "Jonathon Ramsey",
        "title": "Tesla drops Model Y Standard Range from configurator, reason unknown",
        "description": "Filed under:\n Green,Tesla,Crossover,SUV,Electric\n Continue reading Tesla drops Model Y Standard Range from configurator, reason unknown\nTesla drops Model Y Standard Range from configurator, reason unknown originally appeared on Autoblog on Tue, 19 Sep 2023 14…",
        "url": "https://www.autoblog.com/2023/09/19/tesla-drops-model-y-standard-range-from-configurator-reason-unknown/",
        "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/09/19104746/tesla_model_y_lr_awd_gone.jpg",
        "publishedAt": "2023-09-19T18:25:00Z",
        "content": "Looks like we have us another mystery courtesy of that most mysterious of automakers. Tesla's website no longer offers what had been least expensive Model Y trim, the Standard Range AWD that started … [+2135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Jalopnik"
        },
        "author": "Bradley Brownell",
        "title": "Tesla Buyers Are Remarkably Loyal To The Brand",
        "description": "It may come as no surprise to you that Tesla buyers are incredibly loyal to the brand. An impressive 72.8 percent of Model 3 buyers, for instance, are buying another Tesla after or in addition to their Model 3. That’s a higher percentage of brand retention th…",
        "url": "https://jalopnik.com/tesla-buyers-are-remarkably-loyal-to-the-brand-1850853217",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6eb3f1fc12a5314dda121b6591e3b967.png",
        "publishedAt": "2023-09-19T18:25:00Z",
        "content": "It may come as no surprise to you that Tesla buyers are incredibly loyal to the brand. An impressive 72.8 percent of Model 3 buyers, for instance, are buying another Tesla after or in addition to the… [+3402 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Harri Weber",
        "title": "Volvo will make its last diesel car in 2024 | TechCrunch",
        "description": "Volvo's last diesel car will roll off the line \"by early 2024,\" the company said on Tuesday while emphasizing its bet on EVs.",
        "url": "https://techcrunch.com/2023/09/19/volvo-will-make-its-last-diesel-car-in-2024/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-586346290.jpg?resize=1200,686",
        "publishedAt": "2023-09-19T18:22:12Z",
        "content": "Volvo’s last diesel car will roll off the line “by early 2024,” the company said on Tuesday.\r\nThe writing’s been on the wall for several years. As far back as 2017, the Geely-owned automaker indicate… [+1106 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Kirsten Korosec",
        "title": "Redwood Materials acquires European battery recycler in expansion push | TechCrunch",
        "description": "Redwood Materials acquired lithium-ion battery recycler Redux Recycling, a purchase meant to accelerate U.S. company's expansion into Europe.",
        "url": "https://techcrunch.com/2023/09/19/redwood-materials-acquires-european-battery-recycler-in-expansion-push/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/redwood-materials-pile-of-electronics.jpg?resize=1200,800",
        "publishedAt": "2023-09-19T18:20:42Z",
        "content": "Redwood Materials said Tuesday it acquired lithium-ion battery recycler Redux Recycling, a purchase meant to accelerate U.S. company’s expansion into Europe.\r\nThis is Redwood’s second acquisition sin… [+2108 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hip-Hop Wired"
        },
        "author": "Tron Snow",
        "title": "It Was Fun While It Lasted: Elon Musk Suggests At Charging X Users A Fee To Use His Mediocre Platform",
        "description": "Elon Musk is not done making X (formerly known as Twitter) one of the worst social media experiences ever. Now he wants to charge us for it.",
        "url": "https://hiphopwired.com/playlist/elon-musk-chargers-x-twitter-users-fee-reactions/",
        "urlToImage": "https://hiphopwired.com/wp-content/uploads/sites/43/2023/09/16951432438965.jpg",
        "publishedAt": "2023-09-19T18:18:22Z",
        "content": "HipHopWired Featured Video\r\nSource: Anadolu Agency / Getty / Elon Musk\r\nElon Musk is not done making X (formerly known as Twitter) one of the worst social media experiences ever. \r\n“I can’t believe t… [+1730 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wealthofgeeks.com"
        },
        "author": "Madison Cates",
        "title": "Are Electric Cars More Dangerous Than Gas? Expert Reveals The Alarming Truth",
        "description": "Electric cars are like the teacher's pet of the automotive industry. People think they're a cleaner, greener alternative to gas-powered vehicles, but we all know ... Read More",
        "url": "https://wealthofgeeks.com/ev-fire-concerns/",
        "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2023/09/Shutterstock_398716537.jpg",
        "publishedAt": "2023-09-19T18:04:27Z",
        "content": "Electric cars are like the teacher's pet of the automotive industry. People think they're a cleaner, greener alternative to gas-powered vehicles, but we all know the truth they have faults and downsi… [+2112 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "John Brandon, Contributor, \n John Brandon, Contributor\n https://www.forbes.com/sites/johnbbrandon/",
        "title": "Elon Musk Continues His Path Of Destruction, Says Twitter Might Charge Everyone For Access",
        "description": "You can see the match lighting, ready to start an inferno.",
        "url": "https://www.forbes.com/sites/johnbbrandon/2023/09/19/elon-musk-continues-his-path-of-destruction-says-twitter-might-charge-everyone-for-access/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6509e1073b8454865bbba907/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-09-19T18:04:16Z",
        "content": "FILE - Tesla and SpaceX CEO Elon Musk speaks at the SATELLITE Conference and Exhibition, March 9, ... [+] 2020, in Washington. Musks refusal to allow Ukraine to use Starlink internet services to laun… [+3711 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "vanityfair.com",
        "title": "Elon Musk’s Plan to Rid X of Bots Might Actually Rid It of Users",
        "description": "Hell-bent on squeezing a profit out of a product that is famously unprofitable, X owner Elon Musk is scheming to make all users pay for access to the platform formerly known as Twitter. The billionaire executive of Tesla and SpaceX framed the dramatic change …",
        "url": "https://biztoc.com/x/a0980e1cc8c8206d",
        "urlToImage": "https://c.biztoc.com/p/a0980e1cc8c8206d/s.webp",
        "publishedAt": "2023-09-19T18:02:51Z",
        "content": "Hell-bent on squeezing a profit out of a product that is famously unprofitable, X owner Elon Musk is scheming to make all users pay for access to the platform formerly known as Twitter. The billionai… [+285 chars]"
        }
        ]
       
    
        constructor(){
            super();
            console.log("hello, My name is shishir sharma.");
            this.state = {
                articles: this.articles,
                loading: false
            }
        }

  render() {
    return (
      <div className='container my-3'>
      <h2>News Hunter - Top Headlines</h2>
      <div className='row'>
      {this.state.articles.map((element)=>
      { return <div className='col-md-4' key={element.url}>

          <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>

      </div>}
      )
      }

      
      
      </div>
      </div>
    )
  }
}
