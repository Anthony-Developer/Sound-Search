const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'https://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s='
const trendingTracksAPI = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=36340ce5abb30d2c4af9d8dd1e82ad55&format=json&limit=10'
const trendingArtistAPI = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=36340ce5abb30d2c4af9d8dd1e82ad55&format=json&limit=10'


let getResultsButton = document.querySelector('#get-results')
getResultsButton.addEventListener('click', returnBioResults)


window.onload = trendingTracks()

document.querySelector('.top-track-button').addEventListener('click', trendingTracks)
document.querySelector('.top-artist-button').addEventListener('click', trendingArtists)
document.querySelector('#header-title').addEventListener('click', function () {
    location.reload();
})

async function trendingTracks() {
    emptyTrendingContainers()

    // Creating proper header
    let trendingTitle = document.createElement('h2')
    trendingTitle.innerHTML = 'Top Trending Singles'
    document.querySelector('.trending-title').append(trendingTitle)

    // Getting Trending Singles Data
    let trendingResponse = await axios.get(
        trendingTracksAPI
    )

    // Looping and appending trending singles
    for (let i = 0; i <= trendingResponse.data.tracks.track.length; i++) {

        let artistNameText = trendingResponse.data.tracks.track[i].artist.name
        let artistName = document.createElement('h4')
        artistName.innerHTML = artistNameText
        let trackNameText = trendingResponse.data.tracks.track[i].name
        let artistLinkURL = trendingResponse.data.tracks.track[i].artist.url
        let artistLink = document.createElement('a')
        artistLink.setAttribute('href', `${artistLinkURL}`)
        artistLink.setAttribute('target', '_blank')
        let songLinkURL = trendingResponse.data.tracks.track[i].url.toString()
        let songLink = document.createElement('a')
        songLink.setAttribute('href', `${songLinkURL}`)
        songLink.setAttribute('target', '_blank')
        songLink.innerHTML = trackNameText
        // Getting image data from other API
        let urlToSendBio = `${artistBio}${artistNameText}`.toString()
        let bioResponse = await axios.get(urlToSendBio)
        let artistImgURL = checkImg(bioResponse.data.artists[0].strArtistThumb)
        artistImg = document.createElement('img')
        artistImg.setAttribute('src', `${artistImgURL}`)
        artistLink.append(artistImg)
        let trackDiv = document.createElement('div')
        trackDiv.setAttribute('class', 'trending-track-divs')
        trackDiv.append(artistLink, artistName, songLink)
        document.querySelector('.trending-tracks').append(trackDiv)

    }
}

async function trendingArtists() {
    emptyTrendingContainers()

    // Creating proper header
    let trendingTitle = document.createElement('h2')
    trendingTitle.innerHTML = 'Top Trending Artist'
    document.querySelector('.trending-title').append(trendingTitle)

    // Getting Trending Artist Data
    let trendingArtistResponse = await axios.get(
        trendingArtistAPI
    )

    // Looping and appending artist
    for (let i = 0; i <= trendingArtistResponse.data.artists.artist.length; i++) {

        let artistNameText = trendingArtistResponse.data.artists.artist[i].name
        let artistName = document.createElement('h3')
        artistName.innerHTML = artistNameText
        let artistLinkURL = trendingArtistResponse.data.artists.artist[i].url
        let artistLink = document.createElement('a')
        artistLink.setAttribute('href', `${artistLinkURL}`)
        artistLink.setAttribute('target', '_blank')
        // Getting image data from other API
        let urlToSendBio = `${artistBio}${artistNameText}`.toString()
        let bioResponse = await axios.get(urlToSendBio)
        let artistImgURL = checkImg(bioResponse.data.artists[0].strArtistThumb)
        let artistImg = document.createElement('img')
        artistImg.setAttribute('src', `${artistImgURL}`)
        artistLink.append(artistImg)
        let trackDiv = document.createElement('div')
        trackDiv.setAttribute('class', 'trending-track-divs')
        trackDiv.append(artistLink, artistName)
        document.querySelector('.trending-tracks').append(trackDiv)

        // console.log(artistImg)

    }
}

async function returnBioResults() {

    event.preventDefault()
    emptyBioContainers()
    document.querySelector('.record-label').scrollIntoView({ behavior: 'smooth' });

    // Getting info and biography
    let userSearch = document.querySelector('#search-bar').value
    let urlToSendBio = `${artistBio}${userSearch}`.toString()
    let bioResponse = await axios.get(
        urlToSendBio
    )


    if (bioResponse.data.artists === null) {
        let errorMessage = document.createElement('h1')
        errorMessage.innerHTML= 'Could not find that artist in our Database'
        document.querySelector('.center-container').style.backgroundColor = "white"
        document.querySelector('.biography').append(errorMessage)
    }

    // Artist bio and basic info
    let biographyText = document.createElement('h3')
    biographyText.innerHTML = `Biography`
    biographyText.style.color = 'black'
    let artistName = bioResponse.data.artists[0].strArtist
    let artistNameDisplay = document.createElement('h2')
    artistNameDisplay.innerHTML = artistName
    let artistID = bioResponse.data.artists[0].idArtist
    let artistImageURL = bioResponse.data.artists[0].strArtistThumb.toString()
    let artistImage = document.createElement('img')
    artistImage.setAttribute('src', `${artistImageURL}`)
    let urlToSend = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userSearch}&api_key=36340ce5abb30d2c4af9d8dd1e82ad55&format=json`.toString()
    let artistResponse = await axios.get(urlToSend)
    let artistFmBio = artistResponse.data.artist.url
    let artistFmBioLink = document.createElement('a')
    artistFmBioLink.setAttribute('href', artistFmBio)
    artistFmBioLink.setAttribute('target', '_blank')
    artistFmBioLink.append(artistImage)
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
    artistWebpageLink.setAttribute('href', `https://${artistURL}`)
    artistWebpageLink.setAttribute('target', '_blank')
    artistWebpageLink.innerHTML = artistURL
    let artistTwitter = document.createElement('h4')
    artistTwitter.innerHTML = `Artist's Twitter`
    let artistTwitterURL = bioResponse.data.artists[0].strTwitter.toString()
    let artistTwitterLink = document.createElement('a')
    artistTwitterLink.setAttribute('href', `https://${artistTwitterURL}`)
    artistTwitterLink.setAttribute('target', '_blank')
    artistTwitterLink.innerHTML = artistTwitterURL
    let artistBiographyData = bioResponse.data.artists[0].strBiographyEN
    let artistBiography = document.createElement('p')
    artistBiography.innerText = artistBiographyData

    // Appending basic info and bio to site
    document.querySelector('.center-container').style.backgroundColor = "white"
    document.querySelector('.biography').append(biographyText)
    document.querySelector('.artist-name').append(artistNameDisplay)
    document.querySelector('.artist-image').append(artistFmBioLink)
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

    let lastFmMusic = `https://www.last.fm/search/tracks?q=`


    // Creating proper header
    let topFiveTracks = document.createElement('h2')
    topFiveTracks.innerHTML = `Artist's Top Tracks`
    document.querySelector('.top-five').append(topFiveTracks)

    // Looping and appending top tracks
    for (let i = 0; i <= topTenResponse.data.track[4].strTrack.length; i++) {

        let trackInfo = topTenResponse.data.track[i].strTrack
        
        let track = document.createElement('h3')
        track.innerHTML = trackInfo
        let trackAlbumInfo = topTenResponse.data.track[i].strAlbum
        let trackAlbum = document.createElement('h4')
        trackAlbum.innerHTML = trackAlbumInfo
        let trackImgURL = checkImg(topTenResponse.data.track[i].strTrackThumb)
        let musicLink = (`${lastFmMusic}${userSearch}+${trackInfo}`).toString()
        let trackImg = document.createElement('img')
        trackImg.setAttribute('src', `${trackImgURL}`)
        let trackMusic = document.createElement('a')
        trackMusic.setAttribute('href', `${musicLink}`)
        trackMusic.setAttribute('target', '_blank')
        trackMusic.style.display = 'block'
        trackMusic.append(trackImg)
        
        let trackBreak = document.createElement('div')
        trackBreak.style.height = '15px'
        document.querySelector('.top-five-tracks').append(trackMusic)
        document.querySelector('.top-five-tracks').append(track)
        document.querySelector('.top-five-tracks').append(trackAlbum)
        document.querySelector('.top-five-tracks').append(trackBreak)

    }

}

// If object has no image it'll use a default pic so it doesn't break my code
function checkImg(str) {
    if (str === null) {
        return `https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png`
    } else {
        return str.toString()
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

function emptyTrendingContainers() {
    document.querySelector('.trending-title').innerHTML = ""
    document.querySelector('.trending-tracks').innerHTML = ""
}
