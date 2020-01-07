const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'https://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s='
const trendingSinglesAPI = 'https://www.theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=singles'

let getResults = document.querySelector('#get-results')
getResults.addEventListener('click', returnResults)

async function returnResults() {
    event.preventDefault()

    // Getting info and biography
    let userSearch = document.querySelector('#search-bar').value
    let urlToSendBio = `${artistBio}${userSearch}`.toString()
    let bioResponse = await axios.get(
        urlToSendBio
    )

    // Artist bio and basic info
    let biographyText = document.createElement('h3')
    biographyText.innerHTML = `Biography`
    let artistName = bioResponse.data.artists[0].strArtist
    let artistNameDisplay = document.createElement('h3')
    artistNameDisplay.innerHTML = artistName
    let artistID = bioResponse.data.artists[0].idArtist
    let artistImageURL = bioResponse.data.artists[0].strArtistThumb.toString()
    let artistImage = document.createElement('img')
    artistImage.setAttribute('src', `${artistImageURL}`)
    let artistDOB = bioResponse.data.artists[0].intBornYear
    let artistCountry = bioResponse.data.artists[0].strCountry
    let recordLabel = bioResponse.data.artists[0].strLabel
    let artistGenre = bioResponse.data.artists[0].strGenre
    let artistFormedYear = bioResponse.data.artists[0].intFormedYear
    let artistWebpage = document.createElement('h4')
    artistWebpage.innerHTML = `Artist's Webpage`
    let artistURL = bioResponse.data.artists[0].strWebsite.toString()
    let artistWebpageLink = document.createElement('a')
    artistWebpageLink.setAttribute('href', `https://www.google.com/search?q=${artistURL}`)
    artistWebpageLink.setAttribute('target', '_blank')
    artistWebpageLink.innerHTML = artistURL
    let artistTwitter = document.createElement('h4')
    artistTwitter.innerHTML = `Artist's Twitter`
    let artistTwitterURL = bioResponse.data.artists[0].strTwitter.toString()
    let artistTwitterLink = document.createElement('a')
    artistTwitterLink.setAttribute('href', `https://www.google.com/search?q=${artistTwitterURL}`)
    artistTwitterLink.setAttribute('target', '_blank')
    artistTwitterLink.innerHTML = artistTwitterURL
    let artistBiographyData = bioResponse.data.artists[0].strBiographyEN
    let artistBiography = document.createElement('p')
    artistBiography.innerText = artistBiographyData

    // Appending basic info and bio to site
    document.querySelector('.biography').append(biographyText)
    document.querySelector('.artist-name').append(artistNameDisplay)
    document.querySelector('.artist-image').append(artistImage)
    document.querySelector('.artist-DOB').append(`Born in ${artistDOB}`)
    document.querySelector('.artist-country').append(artistCountry)
    document.querySelector('.record-label').append(`Record Label: ${recordLabel}`)
    document.querySelector('.genre').append(`Genre: ${artistGenre}`)
    document.querySelector('.year-formed').append(`Started in ${artistFormedYear}`)
    document.querySelector('.artist-webpage').append(artistWebpage)
    document.querySelector('.artist-webpage-link').append(artistWebpageLink)
    document.querySelector('.artist-twitter').append(artistTwitter)
    document.querySelector('.artist-twitter').append(artistTwitterLink)
    document.querySelector('.artist-bio').append(artistBiography)

    // Getting Top Five Tracks
    let urlToSendTopTen = `${artistTopTen}${userSearch}`.toString()
    let topTenResponse = await axios.get(
        urlToSendTopTen
    )

    console.log(topTenResponse)

    let googleMusic = `https://www.youtube.com/results?search_query=`

    // If object has no image it'll use a default pic so it doesn't break my code
    function checkImg(str) {
        if (str === null) {
            return `https://bitsofco.de/content/images/2018/12/broken-1.png`
        } else {
            return str.toString()
        }
    }

    // Artist Top Five Tracks With Clickable links and appending
    let topFiveTracks = document.createElement('h3')
    topFiveTracks.innerHTML = `Artist's Top Five Tracks`
    let trackOneInfo = topTenResponse.data.track[0].strTrack
    let trackOneAlbumInfo = topTenResponse.data.track[0].strAlbum
    let trackOneImgURL = checkImg(topTenResponse.data.track[0].strTrackThumb)
    let musicLinkSongOne = trackOneInfo.replace(" ", "+")
    let musicLinkAlbumOne = trackOneAlbumInfo.replace(" ", "+")
    let musicLinkOne = (`${googleMusic}${musicLinkSongOne}+${musicLinkAlbumOne}`).toString()
    let trackOneImg = document.createElement('img')
    trackOneImg.setAttribute('src', `${trackOneImgURL}`)
    let trackOneMusic = document.createElement('a')
    trackOneMusic.setAttribute('href', `${musicLinkOne}`)
    trackOneMusic.setAttribute('target', '_blank')
    trackOneMusic.innerHTML = trackOneInfo
    let trackOneMusicAlbum = document.createElement('a')
    trackOneMusicAlbum.setAttribute('href', `${musicLinkOne}`)
    trackOneMusicAlbum.setAttribute('target', '_blank')
    trackOneMusicAlbum.innerHTML = trackOneAlbumInfo
    document.querySelector('.top-five').append(topFiveTracks)
    document.querySelector('.track-one-img').append(trackOneImg)
    document.querySelector('.track-one-name').append(trackOneMusic)
    document.querySelector('.track-one-album').append(trackOneMusicAlbum)

    let trackTwoInfo = topTenResponse.data.track[1].strTrack
    let trackTwoAlbumInfo = topTenResponse.data.track[1].strAlbum
    let trackTwoImgURL = checkImg(topTenResponse.data.track[1].strTrackThumb)
    let musicLinkSongTwo = trackTwoInfo.replace(" ", "+")
    let musicLinkAlbumTwo = trackTwoAlbumInfo.replace(" ", "+")
    let musicLinkTwo = (`${googleMusic}${musicLinkSongTwo}+${musicLinkAlbumTwo}`).toString()
    let trackTwoImg = document.createElement('img')
    trackTwoImg.setAttribute('src', `${trackTwoImgURL}`)
    let trackTwoMusic = document.createElement('a')
    trackTwoMusic.setAttribute('href', `${musicLinkTwo}`)
    trackTwoMusic.setAttribute('target', '_blank')
    trackTwoMusic.innerHTML = trackTwoInfo
    let trackTwoMusicAlbum = document.createElement('a')
    trackTwoMusicAlbum.setAttribute('href', `${musicLinkTwo}`)
    trackTwoMusicAlbum.setAttribute('target', '_blank')
    trackTwoMusicAlbum.innerHTML = trackTwoAlbumInfo
    document.querySelector('.track-two-img').append(trackTwoImg)
    document.querySelector('.track-two-name').append(trackTwoMusic)
    document.querySelector('.track-two-album').append(trackTwoMusicAlbum)

    let trackThreeInfo = topTenResponse.data.track[2].strTrack
    let trackThreeAlbumInfo = topTenResponse.data.track[2].strAlbum
    let trackThreeImgURL = checkImg(topTenResponse.data.track[2].strTrackThumb)
    let musicLinkSongThree = trackThreeInfo.replace(" ", "+")
    let musicLinkAlbumThree = trackThreeAlbumInfo.replace(" ", "+")
    let musicLinkThree = (`${googleMusic}${musicLinkSongThree}+${musicLinkAlbumThree}`).toString()
    let trackThreeImg = document.createElement('img')
    trackThreeImg.setAttribute('src', `${trackThreeImgURL}`)
    let trackThreeMusic = document.createElement('a')
    trackThreeMusic.setAttribute('href', `${musicLinkTwo}`)
    trackThreeMusic.setAttribute('target', '_blank')
    trackThreeMusic.innerHTML = trackThreeInfo
    let trackThreeMusicAlbum = document.createElement('a')
    trackThreeMusicAlbum.setAttribute('href', `${musicLinkThree}`)
    trackThreeMusicAlbum.setAttribute('target', '_blank')
    trackThreeMusicAlbum.innerHTML = trackThreeAlbumInfo
    document.querySelector('.track-three-img').append(trackThreeImg)
    document.querySelector('.track-three-name').append(trackThreeMusic)
    document.querySelector('.track-three-album').append(trackThreeMusicAlbum)

    let trackFourInfo = topTenResponse.data.track[3].strTrack
    let trackFourAlbumInfo = topTenResponse.data.track[3].strAlbum
    let trackFourImgURL = checkImg(topTenResponse.data.track[3].strTrackThumb)
    let musicLinkSongFour = trackFourInfo.replace(" ", "+")
    let musicLinkAlbumFour = trackFourAlbumInfo.replace(" ", "+")
    let musicLinkFour = (`${googleMusic}${musicLinkSongFour}+${musicLinkAlbumFour}`).toString()
    let trackFourImg = document.createElement('img')
    trackFourImg.setAttribute('src', `${trackFourImgURL}`)
    let trackFourMusic = document.createElement('a')
    trackFourMusic.setAttribute('href', `${musicLinkFour}`)
    trackFourMusic.setAttribute('target', '_blank')
    trackFourMusic.innerHTML = trackFourInfo
    let trackFourMusicAlbum = document.createElement('a')
    trackFourMusicAlbum.setAttribute('href', `${musicLinkFour}`)
    trackFourMusicAlbum.setAttribute('target', '_blank')
    trackFourMusicAlbum.innerHTML = trackFourAlbumInfo
    document.querySelector('.track-four-img').append(trackFourImg)
    document.querySelector('.track-four-name').append(trackFourMusic)
    document.querySelector('.track-four-album').append(trackFourMusicAlbum)

    let trackFiveInfo = topTenResponse.data.track[4].strTrack
    let trackFiveAlbumInfo = topTenResponse.data.track[4].strAlbum
    let trackFiveImgURL = checkImg(topTenResponse.data.track[4].strTrackThumb)
    let musicLinkSongFive = trackFiveInfo.replace(" ", "+")
    let musicLinkAlbumFive = trackFiveAlbumInfo.replace(" ", "+")
    let musicLinkFive = (`${googleMusic}${musicLinkSongFive}+${musicLinkAlbumFive}`).toString()
    let trackFiveImg = document.createElement('img')
    trackFiveImg.setAttribute('src', `${trackFiveImgURL}`)
    let trackFiveMusic = document.createElement('a')
    trackFiveMusic.setAttribute('href', `${musicLinkFive}`)
    trackFiveMusic.setAttribute('target', '_blank')
    trackFiveMusic.innerHTML = trackFiveInfo
    let trackFiveMusicAlbum = document.createElement('a')
    trackFiveMusicAlbum.setAttribute('href', `${musicLinkFive}`)
    trackFiveMusicAlbum.setAttribute('target', '_blank')
    trackFiveMusicAlbum.innerHTML = trackFiveAlbumInfo
    document.querySelector('.track-five-img').append(trackFiveImg)
    document.querySelector('.track-five-name').append(trackFiveMusic)
    document.querySelector('.track-five-album').append(trackFiveMusicAlbum)
}
