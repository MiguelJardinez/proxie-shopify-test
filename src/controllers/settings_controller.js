
let user_settings = {
  uuid: '328u0293eu023ue2309',
  global_client_id: '1234567890',
  shop_name: 'The krusty krab',
  photo_url: 'https://graffica.info/wp-content/uploads/2017/08/LogoNasaSpotB-1200x900.jpg',
  limit_ammount: 100,
  settings: {
    address: true,
    ammount: true,
  }
};

exports.getSettings = (req, res, next) => {

  res.json({
    mensaje: 'Obteniendo la información del usuario',
    data: user_settings,
  });
}

exports.changeSettings = (req, res) => {
  const newSettings = req.body;
  user_settings = newSettings;
  console.log(req.body);
  res.json({
    mensaje: 'Cambiando la información del usuario',
    data: newSettings,
  });
}