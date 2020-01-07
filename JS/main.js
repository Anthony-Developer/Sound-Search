const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'https://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s='
const trendingTracksAPI = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=36340ce5abb30d2c4af9d8dd1e82ad55&format=json&limit=10'

let getResults = document.querySelector('#get-results')
getResults.addEventListener('click', returnResults)

window.onload = trendingTracks()

document.querySelector('.top-track-button').addEventListener('click', trendingTracks)

async function trendingTracks() {
    let trendingResponse = await axios.get(
        trendingTracksAPI
    )
    console.log(trendingResponse)

    for (let i = 0; i <= trendingResponse.data.tracks.track.length; i++) {

        let artistNameText = trendingResponse.data.tracks.track[i].artist.name
        let artistName = document.createElement('h4')
        artistName.innerHTML = artistNameText
        let trackNameText = trendingResponse.data.tracks.track[i].name
        let trackName = document.createElement('h4')
        trackName.innerHTML = trackNameText
        let songLinkURL = trendingResponse.data.tracks.track[i].url.toString()

        let songLink = document.createElement('a')
        songLink.setAttribute('href', `${songLinkURL}`)
        songLink.setAttribute('target', '_blank')
        songLink.innerHTML = 'Link To Song'
        let artistImgURL = trendingResponse.data.tracks.track[i].image[2]['#text'].toString()
        artistImg = document.createElement('img')
        artistImg.setAttribute('src', `${artistImgURL}`)
        let trackDiv = document.createElement('div')
        trackDiv.setAttribute('class', 'trending-track-divs')
        trackDiv.append(artistImg, artistName, trackName, songLink)

        document.querySelector('.trending-tracks').append(trackDiv)
    }
}

async function returnResults() {

    event.preventDefault()
    emptyBioContainers()

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
    let artistDobInfo = bioResponse.data.artists[0].intBornYear.toString()
    let artistDOB = document.createElement('p')
    artistDOB.innerHTML = `Born in ${artistDobInfo}`
    let artistCountryInfo = bioResponse.data.artists[0].strCountry.toString()
    let artistCountry = document.createElement('p')
    artistCountry.innerHTML = artistCountryInfo
    let recordLabelInfo = bioResponse.data.artists[0].strLabel
    let recordLabel = document.createElement('p')
    recordLabel.innerHTML = `Record Label:  ${recordLabelInfo}`
    let artistGenreInfo = bioResponse.data.artists[0].strGenre
    let artistGenre = document.createElement('p')
    artistGenre.innerHTML = `Genre:  ${artistGenreInfo}`
    let artistFormedYearInfo = bioResponse.data.artists[0].intFormedYear
    let artistFormedYear = document.createElement('p')
    artistFormedYear.innerHTML = `Started in  ${artistFormedYearInfo}`
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
    document.querySelector('.artist-DOB').append(artistDOB)
    document.querySelector('.artist-country').append(artistCountry)
    document.querySelector('.record-label').append(recordLabel)
    document.querySelector('.genre').append(artistGenre)
    document.querySelector('.year-formed').append(artistFormedYear)
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
    topFiveTracks.innerHTML = `Artist's Top Tracks`
    document.querySelector('.top-five').append(topFiveTracks)

    // Looping and appending top tracks
    for (let i = 0; i <= topTenResponse.data.track[4].strTrack.length; i++) {

        let trackInfo = topTenResponse.data.track[i].strTrack
        let trackAlbumInfo = topTenResponse.data.track[i].strAlbum
        let trackImgURL = checkImg(topTenResponse.data.track[i].strTrackThumb)
        let musicLinkSong = trackInfo.replace(" ", "+")
        let musicLinkAlbum = trackAlbumInfo.replace(" ", "+")
        let musicLink = (`${googleMusic}${musicLinkSong}+${musicLinkAlbum}`).toString()
        let trackImg = document.createElement('img')
        trackImg.setAttribute('src', `${trackImgURL}`)
        let trackMusic = document.createElement('a')
        trackMusic.setAttribute('href', `${musicLink}`)
        trackMusic.setAttribute('target', '_blank')
        trackMusic.style.display = 'block'
        trackMusic.innerHTML = trackInfo
        let trackMusicAlbum = document.createElement('a')
        trackMusicAlbum.setAttribute('href', `${musicLink}`)
        trackMusicAlbum.setAttribute('target', '_blank')
        trackMusicAlbum.innerHTML = trackAlbumInfo
        let trackBreak = document.createElement('div')
        trackBreak.style.height = '15px'
        document.querySelector('.top-five-tracks').append(trackImg)
        document.querySelector('.top-five-tracks').append(trackMusic)
        document.querySelector('.top-five-tracks').append(trackMusicAlbum)
        document.querySelector('.top-five-tracks').append(trackBreak)

    }

}

function emptyBioContainers() {
    document.querySelector('.artist-image').innerHTML = ""
    document.querySelector('.artist-name').innerHTML = ""
    document.querySelector('.artist-DOB').innerHTML = ""
    document.querySelector('.artist-country').innerHTML = ""
    document.querySelector('.year-formed').innerHTML = ""
    document.querySelector('.record-label').innerHTML = ""
    document.querySelector('.genre').innerHTML = ""
    document.querySelector('.artist-webpage').innerHTML = ""
    document.querySelector('.artist-webpage-link').innerHTML = ""
    document.querySelector('.artist-twitter').innerHTML = ""
    document.querySelector('.artist-twitter-link').innerHTML = ""
    document.querySelector('.biography').innerHTML = ""
    document.querySelector('.artist-bio').innerHTML = ""
    document.querySelector('.top-five').innerHTML = ""
    document.querySelector('.top-five-tracks').innerHTML = ""
}
