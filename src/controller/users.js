const UserModel = require('../models/users');

const createNewUser = async (req, res) => {

    // const bodyPayLoad = req.body;
    const {body} = req;

    if(!body.name || !body.email || !body.address ){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await UserModel.createNewUser(bodyPayLoad);
        res.status(201).json({
            message: 'CREATE new user success',
            data: bodyPayLoad,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }

}

const getAllUsers = async (req, res) => {
    //karna pemanggilan ke database itu bersifat asynchronous, maka harus tunggu menggunakan --Await
    try {
        const [data] = await UserModel.getAllUsers();
    
        res.json({
            message: 'GET All users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
        
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser, 
                ...body
            },
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message:'DELETE user success',
            data: null,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}