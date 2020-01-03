const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'theaudiodb.com/api/v1/json/195003/track-top10.php?s='

let getResults = document.querySelector('#get-results')
getResults.addEventListener('click', returnResults)

async function returnResults() {
    event.preventDefault()

    let userSearch = document.querySelector('#search-bar').value
    let urlToSendBio = `${artistBio}${userSearch}`.toString()
    let bioResponse = await axios.get(
        urlToSendBio
    )

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

    // Got to troubleshoot this portion
    //console.log(artistWebpage)

    document.querySelector('.artist-name').append(artistName)
    document.querySelector('.artist-image').append(artistImage)
    document.querySelector('.artist-DOB').append(`Born in ${artistDOB}`)
    document.querySelector('.artist-country').append(artistCountry)
    document.querySelector('.record-label').append(`Record Label: ${recordLabel}`)
    document.querySelector('.genre').append(`Genre: ${artistGenre}`)
    document.querySelector('.year-formed').append(`Started in ${artistFormedYear}`)
    document.querySelector('.artist-webpage').append(artistWebpage)


    let urlToSendTopTen = `${artistTopTen}${userSearch}`.toString()
    let topTenResponse = await axios.get(
        urlToSendTopTen
    )

}