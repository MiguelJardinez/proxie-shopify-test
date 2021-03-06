const Owner = require('../models/UserModel');
const Settings = require('../models/SettingsModel');

exports.createOwner = async (req, res) => {
  const ownerSettings = req.body;
  try {
    const ownerExisted = await Owner.findOne({shopId: ownerSettings.shopId});
    if (ownerExisted) {
      res.json({mensaje: 'El usuario ya existe'});
      return
    }
    const newOwner = await Owner(ownerSettings).save();
    await Settings({idShop: newOwner.shopId}).save();
    res.json({
      mensaje: `El usuario ${newOwner.shopifyDomain} ha sido creado`
    });
  } catch (error) {
    console.log(error);
  }
}

exports.getSettingsOwner = async (req, res) => {
  const settings = req.params;
  console.log(req.query);
  try {
    const ownerShop = await Owner.findOne({owner_id: settings.id});
    if (!ownerShop) {
      res.status(404).send({mensaje: 'No se encontro la tienda'})
    }
    res.json({
      mensaje: 'Obteniendo la informacion de configuraciones',
      data: ownerShop,
    })
  } catch (error) {
    console.log(error);
  }
}

exports.changeSettings = async (req, res) => {
  const newSettings = req.body;
  try {
    const settings = await Owner.findOne({owner_id: newSettings.owner_id});
    if (!settings) {
      await Owner(newSettings).save();
      res.json({mensaje: 'Se ha creado la tienda y se han actualizado las configuraciones'})
      return
    }
    await Owner.findOneAndUpdate({idShop: newSettings.idShop}, newSettings, {new: true})
    res.json({
      mensaje: 'Las configuraciones del usuario han cambiado',
    });
  } catch (error) {
    console.log(error);
  }
}