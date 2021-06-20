function tempo(request, response){
    const dyanmicDate = new Date();
    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    //Exemplo consumo API com variável ambiente
    //const subscribersResponde = fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    //const subscribersRespondeJson = subscribersResponde.json();
    //const inscritos = subscribersRespondeJson.tota_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dyanmicDate.toTimeString()
    })
}

export default tempo;