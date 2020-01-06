const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'https://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s='

let getResults = document.querySelector('#get-results')
getResults.addEventListener('click', returnResults)

async function returnResults() {
    event.preventDefault()

    // Getting user response
    let userSearch = document.querySelector('#search-bar').value
    let urlToSendBio = `${artistBio}${userSearch}`.toString()
    let bioResponse = await axios.get(
        urlToSendBio
    )

    // Artist bio and basic info
    let artistName = bioResponse.data.artists[0].strArtist
    let artistID = bioResponse.data.artists[0].idArtist
    let artistImageURL = bioResponse.data.artists[0].strArtistThumb.toString()
    let artistImage = document.createElement('img')
    artistImage.setAttribute('src', `${artistImageURL}`)
    let artistDOB = bioResponse.data.artists[0].intBornYear
    let artistCountry = bioResponse.data.artists[0].strCountry
    let recordLabel = bioResponse.data.artists[0].strLabel
    let artistGenre = bioResponse.data.artists[0].strGenre
    let artistFormedYear = bioResponse.data.artists[0].intFormedYear
    let artistURL = bioResponse.data.artists[0].strWebsite.toString()
    let artistWebpage = document.createElement('a')
    artistWebpage.setAttribute('href', `${artistURL}`)
    artistWebpage.innerHTML = 'Artist Webpage'
    let artistTwitterURL = bioResponse.data.artists[0].strTwitter.toString()
    let artistTwitter = document.createElement('a')
    artistTwitter.setAttribute('href', `${artistTwitterURL}`)
    artistTwitter.innerHTML = 'Artist Twitter'
    let artistBiographyData = bioResponse.data.artists[0].strBiographyEN
    let artistBiography = document.createElement('p')
    artistBiography.innerText = artistBiographyData

    // Appending basic info and bio to site
    document.querySelector('.artist-name').append(artistName)
    document.querySelector('.artist-image').append(artistImage)
    document.querySelector('.artist-DOB').append(`Born in ${artistDOB}`)
    document.querySelector('.artist-country').append(artistCountry)
    document.querySelector('.record-label').append(`Record Label: ${recordLabel}`)
    document.querySelector('.genre').append(`Genre: ${artistGenre}`)
    document.querySelector('.year-formed').append(`Started in ${artistFormedYear}`)
    document.querySelector('.artist-webpage').append(artistWebpage)
    document.querySelector('.artist-twitter').append(artistTwitter)
    document.querySelector('.artist-bio').append(artistBiography)


    let urlToSendTopTen = `${artistTopTen}${userSearch}`.toString()
    let topTenResponse = await axios.get(
        urlToSendTopTen
    )

    // Artist Top Five Tracks
    let trackOne = topTenResponse.data.track[0].strTrack
    let trackOneAlbum = topTenResponse.data.track[0].strAlbum
    let trackOneImgURL = topTenResponse.data.track[0].strTrackThumb.toString()
    let trackOneImg = document.createElement('img')
    trackOneImg.setAttribute('src', `${trackOneImgURL}`)
    let trackTwo = topTenResponse.data.track[1].strTrack
    let trackTwoAlbum = topTenResponse.data.track[1].strAlbum
    let trackTwoImgURL = topTenResponse.data.track[1].strTrackThumb.toString()
    let trackTwoImg = document.createElement('img')
    trackTwoImg.setAttribute('src', `${trackTwoImgURL}`)
    let trackThree = topTenResponse.data.track[2].strTrack
    let trackThreeAlbum = topTenResponse.data.track[2].strAlbum
    let trackThreeImgURL = topTenResponse.data.track[2].strTrackThumb.toString()
    let trackThreeImg = document.createElement('img')
    trackThreeImg.setAttribute('src', `${trackThreeImgURL}`)
    let trackFour = topTenResponse.data.track[3].strTrack
    let trackFourAlbum = topTenResponse.data.track[3].strAlbum
    let trackFourImgURL = topTenResponse.data.track[3].strTrackThumb.toString()
    let trackFourImg = document.createElement('img')
    trackFourImg.setAttribute('src', `${trackFourImgURL}`)
    let trackFive = topTenResponse.data.track[4].strTrack
    let trackFiveAlbum = topTenResponse.data.track[4].strAlbum
    let trackFiveImgURL = topTenResponse.data.track[4].strTrackThumb.toString()
    let trackFiveImg = document.createElement('img')
    trackFiveImg.setAttribute('src', `${trackFiveImgURL}`)

    // Appending Top Ten Tracks to site
    document.querySelector('.track-one-img').append(trackOneImg)
    document.querySelector('.track-one-name').append(trackOne)
    document.querySelector('.track-one-album').append(trackOneAlbum)
    document.querySelector('.track-two-img').append(trackTwoImg)
    document.querySelector('.track-two-name').append(trackTwo)
    document.querySelector('.track-two-album').append(trackTwoAlbum)
    document.querySelector('.track-three-img').append(trackThreeImg)
    document.querySelector('.track-three-name').append(trackThree)
    document.querySelector('.track-three-album').append(trackThreeAlbum)
    document.querySelector('.track-four-img').append(trackFourImg)
    document.querySelector('.track-four-name').append(trackFour)
    document.querySelector('.track-four-album').append(trackFourAlbum)
    document.querySelector('.track-five-img').append(trackFiveImg)
    document.querySelector('.track-five-name').append(trackFive)
    document.querySelector('.track-five-album').append(trackFiveAlbum)

    console.log(topTenResponse)

}