export default function handler(req, res) {
  const code = req.query.1;

  // Lista de códigos válidos
  const codigosValidos = ['1111', 'junior', 'carlos'];

  if (codigosValidos.includes(code)) {
    const conteudo = `
      {
    "user_info": {
        "username": "tydhws",
        "password": "mv0ebe",
        "message": "",
        "auth": 1,
        "status": "Active",
        "exp_date": "2147483647",
        "is_trial": "0",
        "active_cons": "1",
        "created_at": "1672332438",
        "max_connections": "999",
        "allowed_output_formats": [
            "m3u8",
            "ts",
            "rtmp"
        ]
    },
    "server_info": {
        "url": "cdn.brpro.live",
        "port": "80",
        "https_port": "443",
        "server_protocol": "http",
        "rtmp_port": "8080",
        "timezone": "America/Sao_Paulo",
        "timestamp_now": 1709960182,
        "time_now": "2024-03-09 01:56:22",
        "process": true
    }
}
    `;
    res.status(200).send(conteudo);
  } else {
    res.status(403).send('Acesso negado: código inválido');
  }
}
