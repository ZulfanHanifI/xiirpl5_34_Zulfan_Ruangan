const Ruangan = require('../models/ruangans')

module.exports = {

    //get all user
    index: async (req, res) => {
        try{
            const users = await Ruangan.find()
            if(users.length > 0){   
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        }catch(error){
            res.status(400).json({success: false})
        }
        
    },

    //get user by id
    show: async (req, res) => {
        try{
            const user = await Ruangan.findById(req.params.id)

            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
        
    },

    //post data
    store: async (req, res) => {
        try{
            const user = await Ruangan.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil dimasukan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },

    //put data
    update: async (req, res) => {
        try{
            const user = await Ruangan.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })

            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
        
    },

    //delete data
    delete: async (req, res) => {
        try{
            await Ruangan .findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
            
        } catch (error) {
            res.status(400).json({success: false})
        }

        
    
    }
}