const connection = require('../connection.js');
const commissionModel = require('../schemas/commissionSchema.js');

async function artCommissionRequest(req, res){
    return new Promise(async (resolve, reject) => {
        console.log(`minnieController::artCommissionRequest::req.body::`, req.body);
        // let newInsert = {
        //     "commissioner": req.body.commissioner,
        //     "description": req.body.description,
        //     "date": Date.now(),
        //     "contactType": req.body.contactType,
        //     "contactValue": req.body.contactValue,
        //     "dueDate": req.body.dueDate,
        //     "paid": req.body.paid
        // }

        let newModal = new commissionModel;
        newModal.commissioner = req.body.commissioner;
        newModal.description = req.body.description;
        newModal.date = Date.now();
        newModal.contactType = req.body.contactType;
        newModal.contactValue = req.body.contactValue;
        newModal.dueDate = req.body.dueDate;
        newModal.paid = req.body.paid;
        
        console.log(`minnieController::artCommissionRequest::newModal::`, newModal);
        const result = await connection.insertDB("commissionDB", "comminmin", newModal)
        .catch(err => {
            console.log(`minnieController::artCommissionRequest::err::${err}::`, err);
            return reject({
                code: 500,
                message:  err
            });
        });
        console.log(`minnieController::artCommissionRequest::result::${result}::`, result);
        return resolve({
            code: 200,
            message: result
        });
    });
}

async function getAllCommissions(){
    return new Promise(async (resolve, reject) => {
        const result = await connection.findAllDB("commissionDB", "comminmin")
        .catch(err => {
            console.log(`minnieController::getAllCommissions::err::${err}::`, err);
            return reject({
                code: 500,
                message: err
            });
        });
        console.log(`minnieController::getAllCommissions::result::${result}::`, JSON.stringify(result));
        return resolve({
            code: 200,
            commissions: result
        });
    });
}

async function getSpecificCommission(tag, value){
    return new Promise(async (resolve, reject) => {
        const result = await connection.findSpecificDB("commissionDB", "comminmin", tag, value)
        .catch(err => {
            console.log(`minnieController::getSpecificCommission::err::`, err);
            return reject({
                code: 500,
                message: err
            });
        });
        //console.log(`minnieControoler::getSpecificCommissions::result${result}::`, JSON.stringify(result));
        return resolve({
            code: 200,
            commission: result
        });
    });
}

module.exports = { artCommissionRequest, getAllCommissions, getSpecificCommission };