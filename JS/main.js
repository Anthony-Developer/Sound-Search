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
