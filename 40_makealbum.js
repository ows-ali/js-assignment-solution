function make_album(artist,title,tracks){
    let obj = {
        artist,
        album_title: title
    }
    if (tracks) obj.tracks = tracks
    return obj
}

resp = make_album('atif aslam','doorie')
console.log(resp )


resp = make_album('ali azmat','jal')
console.log(resp )


resp = make_album('abida parveen','lal meri',30)
console.log(resp )