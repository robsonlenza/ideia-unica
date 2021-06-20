function tempo(request, response){
    const dyanmicDate = new Date();

    response.json({
        date: dyanmicDate.toTimeString()
    })
}

export default tempo;