
const Gallery = {

    getAll(req, res){
        return res.status(200).send({'galleryAll': 'Toussa'})
    },

    getOne(req, res){
        return res.status(200).send({'galleryOne': 'Voila'})
    }
}

export default Gallery