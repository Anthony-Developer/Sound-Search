const audioDataBase = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='

let getResults = document.querySelector('#get-results')
getResults.addEventListener('click', returnResults)

async function returnResults() {
    event.preventDefault()

    let userSearch = document.querySelector('#search-bar').value
    let urlToSend = `${audioDataBase}${userSearch}`.toString()

    let response = await axios.get(
        urlToSend
    )

    let artistName = response.data.artists[0].strArtist
    let artistImageURL = response.data.artists[0].strArtistThumb.toString()
    let artistImage = document.createElement('img')
    artistImage.setAttribute('src', `${artistImageURL}`)

    console.log(artistImageURL)
    console.log(artistImage)

    document.querySelector('#artist-name').append(artistName)
    document.querySelector('#artist-image').append(artistImage)

    console.log(response)

}