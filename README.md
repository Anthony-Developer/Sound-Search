# Project Overview

## Project Name

Sound Search

## Project Description

A site where users can come to search for new music, see trending songs around the world and discover new tracks. The site will give user artist name, album name, song name and album art for individual tracks.  

## API and Data Sample

[The AudioDB API](https://www.theaudiodb.com/api_guide.php)
[LastFM API](https://www.last.fm/api/)

### API Data Sample

```JSON
{
    "artists": [
        {
            "idArtist": "111239",
            "strArtist": "Coldplay",
            "strArtistStripped": null,
            "strArtistAlternate": "",
            "strLabel": "Parlophone",
            "idLabel": "45114",
            "intFormedYear": "1996",
            "intBornYear": "1996",
            "intDiedYear": null,
            "strDisbanded": null,
            "strStyle": "Rock/Pop",
            "strGenre": "Alternative Rock",
            "strMood": "Happy",
            "strWebsite": "www.coldplay.com",
            "strFacebook": "www.facebook.com/coldplay",
            "strTwitter": "www.twitter.com/coldplay",
            "strBiographyEN": "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves \"Coldplay\" in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone.\n\nThey achieved worldwide fame with the release of the single \"Yellow\" in 2000, followed by their debut album released in the same year, Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year, and has been widely considered the best of the Nelson-produced Coldplay albums. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely favourable reviews, earning several Grammy nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which was met with mixed to positive reviews, and was the UK's best-selling rock album of 2011.\n\nThe band has won a number of music awards throughout their career, including seven Brit Awards winning Best British Group three times, four MTV Video Music Awards, and seven Grammy Awards from twenty nominations. As one of the world's best-selling music artists, Coldplay have sold over 55 million records worldwide. In December 2009, Rolling Stone readers voted the group the fourth best artist of the 2000s.\n\nColdplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, and the Teenage Cancer Trust.",
            "strGender": "Male",
            "intMembers": "4",
            "strCountry": "London, England",
            "strCountryCode": "GB",
            "strArtistThumb": "https://www.theaudiodb.com/images/media/artist/thumb/uxrqxy1347913147.jpg",
            "strArtistLogo": "https://www.theaudiodb.com/images/media/artist/logo/urspuv1434553994.png",
            "strArtistClearart": "https://www.theaudiodb.com/images/media/artist/clearart/ruyuwv1510827568.png",
            "strArtistWideThumb": "https://www.theaudiodb.com/images/media/artist/widethumb/sxqspt1516190718.jpg",
            "strArtistFanart": "https://www.theaudiodb.com/images/media/artist/fanart/spvryu1347980801.jpg",
            "strArtistFanart2": "https://www.theaudiodb.com/images/media/artist/fanart/uupyxx1342640221.jpg",
            "strArtistFanart3": "https://www.theaudiodb.com/images/media/artist/fanart/qstpsp1342640238.jpg",
            "strArtistBanner": "https://www.theaudiodb.com/images/media/artist/banner/xuypqw1386331010.jpg",
            "strMusicBrainzID": "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
            "strLastFMChart": "http://www.last.fm/music/Coldplay/+charts?rangetype=6month",
            "intCharted": "3",
            "strLocked": "unlocked"
        }
    ]
}

```

## Wireframes

[Initial Design](https://wireframe.cc/9ykAuK)

### MVP/PostMVP - 5min 

#### MVP 

- Allow user to search for a track
- Display track information for song 
- Redirect users to Youtube to listen to selected tracks


#### PostMVP 

- Implement a "Now Trending" section
- Implement a "Now Trending" by region


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt | Complete
|Jan 3rd| Wireframes / Priority Matrix / Basic Structure | Complete
|Jan 4th| Retrieve Data from API / Display Data On Site  | Complete
|Jan 5th| Redirect User to Youtube to Play Selected Audio  | Complete
|Jan 6th| Make Site Responsive / Trending Songs | Complete
|Jan 7th| Create Themes | Incomplete
|Jan 8th| Polish Site's CSS | Incomplete
|Jan 9th| Present | Incomplete


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes


[Priority Matrix](https://wireframe.cc/95Pmzw)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Structure and Styling | H | 3 hrs| 4.5 hrs | 0 hrs |
| Retreive Data from API Using Search | H | 4 hrs| 6 hrs | 0 hrs |
| Display Data on Site | H | 4 hrs| 6.5 hrs | 0 hrs |
| Get Music to Play on Site | H | 4 hrs| 2.5 hrs | 0 hrs |
| Get Trending Songs | M | 2 hrs| 3 hrs | 0 hrs |
| Create New Display For Trendings Songs | M | 4 hrs| 5.5 hrs | 0 hrs |
| Create a "Theme" Toggle for Site | L | 3 hrs| 0 hrs | 0 hrs |
| Total | H | 24 hrs| 28 hrs | 0 hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 

 - Couldn't implement trending songs around the world as my API doesn't provide   that data
 - Couldn't implement playing audio as the SoundCloud API is not giving out       keys at the moment