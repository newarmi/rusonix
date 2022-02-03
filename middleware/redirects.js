export default function(req, res, next) {  
    const redirects = [
      {
        from: "/cs-cart/license", 
        to: "/license/cs-cart"
      },
      {
        from: "/ssl/virtuozzo", 
        to: "/license/virtuozzo"
      },
      {
        from: "ssl/communigate", 
        to: "/license/communigate"
      },
      {
        from: "bitrix24/license", 
        to: "/license/bitrix24"
      },
      {
        from: "/ssl/plesk", 
        to: "/license/plesk"
      },
      {
        from: "/ssl", 
        to: "/service/ssl"
      },
      {
        from: "/iaas", 
        to: "/service/iaas"
      },
      {
        from: "/cloud-backup", 
        to: "/service/cloud-backup"
      },
      {
        from: "/domains/register", 
        to: "/services"
      },
      {
        from: "/152fz", 
        to: "/service/152fz"
      },
      {
        from: "/1c-bitrix/hosting", 
        to: "/hosting/1c-bitrix"
      },
      {
        from: "/wordpress/hosting", 
        to: "/hosting/wordpress"
      },
      {
        from: "/cs-cart/hosting", 
        to: "/hosting/cs-cart"
      },
      {
        from: "/x-cart/hosting", 
        to: "/hosting/x-cart"
      },
    ]
    const redirect = redirects.find((r) => {
      let url = req.url
      if(url[url.length-1]==='/') {
        url = url.substring(0, url.length-1)
      }
      return r.from === url
    })
    if (redirect) {
      res.writeHead(301, { Location: redirect.to })
      res.end()
    } else {
      next()
    }
  }