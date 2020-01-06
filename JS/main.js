const artistBio = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='
const artistTopTen = 'https://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s='

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
    document.querySelector('.biography').append(biographyText)
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

    // Getting Top Five Tracks
    let urlToSendTopTen = `${artistTopTen}${userSearch}`.toString()
    let topTenResponse = await axios.get(
        urlToSendTopTen
    )

    let googleMusic = `https://www.youtube.com/results?search_query=`


    // Artist Top Five Tracks With Clickable links
    let topFiveTracks = document.createElement('h3')
    topFiveTracks.innerHTML = `Artist's Top Five Tracks`
    let trackOneInfo = topTenResponse.data.track[0].strTrack
    let trackOneAlbumInfo = topTenResponse.data.track[0].strAlbum
    let trackOneImgURL = topTenResponse.data.track[0].strTrackThumb.toString()
    let musicLinkSongOne = trackOneInfo.replace(" ", "+")
    let musicLinkAlbumOne = trackOneAlbumInfo.replace(" ", "+")
    let musicLinkOne = (`${googleMusic}${musicLinkSongOne}+${musicLinkAlbumOne}`).toString()
    let trackOneImg = document.createElement('img')
    trackOneImg.setAttribute('src', `${trackOneImgURL}`)
    let trackOneMusic = document.createElement('a')
    trackOneMusic.setAttribute('href', `${musicLinkOne}`)
    trackOneMusic.innerHTML = trackOneInfo
    let trackOneMusicAlbum = document.createElement('a')
    trackOneMusicAlbum.setAttribute('href', `${musicLinkOne}`)
    trackOneMusicAlbum.innerHTML = trackOneAlbumInfo

    let trackTwoInfo = topTenResponse.data.track[1].strTrack
    let trackTwoAlbumInfo = topTenResponse.data.track[1].strAlbum
    let trackTwoImgURL = topTenResponse.data.track[1].strTrackThumb.toString()
    let musicLinkSongTwo = trackTwoInfo.replace(" ", "+")
    let musicLinkAlbumTwo = trackTwoAlbumInfo.replace(" ", "+")
    let musicLinkTwo = (`${googleMusic}${musicLinkSongTwo}+${musicLinkAlbumTwo}`).toString()
    let trackTwoImg = document.createElement('img')
    trackTwoImg.setAttribute('src', `${trackTwoImgURL}`)
    let trackTwoMusic = document.createElement('a')
    trackTwoMusic.setAttribute('href', `${musicLinkTwo}`)
    trackTwoMusic.innerHTML = trackTwoInfo
    let trackTwoMusicAlbum = document.createElement('a')
    trackTwoMusicAlbum.setAttribute('href', `${musicLinkTwo}`)
    trackTwoMusicAlbum.innerHTML = trackTwoAlbumInfo

    let trackThreeInfo = topTenResponse.data.track[2].strTrack
    let trackThreeAlbumInfo = topTenResponse.data.track[2].strAlbum
    let trackThreeImgURL = topTenResponse.data.track[2].strTrackThumb.toString()
    let musicLinkSongThree = trackThreeInfo.replace(" ", "+")
    let musicLinkAlbumThree = trackThreeAlbumInfo.replace(" ", "+")
    let musicLinkThree = (`${googleMusic}${musicLinkSongThree}+${musicLinkAlbumThree}`).toString()
    let trackThreeImg = document.createElement('img')
    trackThreeImg.setAttribute('src', `${trackThreeImgURL}`)
    let trackThreeMusic = document.createElement('a')
    trackThreeMusic.setAttribute('href', `${musicLinkTwo}`)
    trackThreeMusic.innerHTML = trackThreeInfo
    let trackThreeMusicAlbum = document.createElement('a')
    trackThreeMusicAlbum.setAttribute('href', `${musicLinkThree}`)
    trackThreeMusicAlbum.innerHTML = trackThreeAlbumInfo

    let trackFourInfo = topTenResponse.data.track[3].strTrack
    let trackFourAlbumInfo = topTenResponse.data.track[3].strAlbum
    let trackFourImgURL = topTenResponse.data.track[3].strTrackThumb.toString()
    let musicLinkSongFour = trackFourInfo.replace(" ", "+")
    let musicLinkAlbumFour = trackFourAlbumInfo.replace(" ", "+")
    let musicLinkFour = (`${googleMusic}${musicLinkSongFour}+${musicLinkAlbumFour}`).toString()
    let trackFourImg = document.createElement('img')
    trackFourImg.setAttribute('src', `${trackFourImgURL}`)
    let trackFourMusic = document.createElement('a')
    trackFourMusic.setAttribute('href', `${musicLinkFour}`)
    trackFourMusic.innerHTML = trackFourInfo
    let trackFourMusicAlbum = document.createElement('a')
    trackFourMusicAlbum.setAttribute('href', `${musicLinkFour}`)
    trackFourMusicAlbum.innerHTML = trackFourAlbumInfo

    let trackFiveInfo = topTenResponse.data.track[4].strTrack
    let trackFiveAlbumInfo = topTenResponse.data.track[4].strAlbum
    let trackFiveImgURL = topTenResponse.data.track[4].strTrackThumb.toString()
    let musicLinkSongFive = trackFiveInfo.replace(" ", "+")
    let musicLinkAlbumFive = trackFiveAlbumInfo.replace(" ", "+")
    let musicLinkFive = (`${googleMusic}${musicLinkSongFive}+${musicLinkAlbumFive}`).toString()
    let trackFiveImg = document.createElement('img')
    trackFiveImg.setAttribute('src', `${trackFiveImgURL}`)
    let trackFiveMusic = document.createElement('a')
    trackFiveMusic.setAttribute('href', `${musicLinkFive}`)
    trackFiveMusic.innerHTML = trackFiveInfo
    let trackFiveMusicAlbum = document.createElement('a')
    trackFiveMusicAlbum.setAttribute('href', `${musicLinkFive}`)
    trackFiveMusicAlbum.innerHTML = trackFiveAlbumInfo

    // Appending Top Ten Tracks to site
    document.querySelector('.top-five').append(topFiveTracks)
    document.querySelector('.track-one-img').append(trackOneImg)
    document.querySelector('.track-one-name').append(trackOneMusic)
    document.querySelector('.track-one-album').append(trackOneMusicAlbum)
    document.querySelector('.track-two-img').append(trackTwoImg)
    document.querySelector('.track-two-name').append(trackTwoMusic)
    document.querySelector('.track-two-album').append(trackTwoMusicAlbum)
    document.querySelector('.track-three-img').append(trackThreeImg)
    document.querySelector('.track-three-name').append(trackThreeMusic)
    document.querySelector('.track-three-album').append(trackThreeMusicAlbum)
    document.querySelector('.track-four-img').append(trackFourImg)
    document.querySelector('.track-four-name').append(trackFourMusic)
    document.querySelector('.track-four-album').append(trackFourMusicAlbum)
    document.querySelector('.track-five-img').append(trackFiveImg)
    document.querySelector('.track-five-name').append(trackFiveMusic)
    document.querySelector('.track-five-album').append(trackFiveMusicAlbum)

    //console.log(topTenResponse)

}