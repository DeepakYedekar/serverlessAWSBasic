module.exports.handler = async (event) => {
    let response = {
        statusCode: 200,
        message: JSON.stringify('This is the restApi'),
        event: event
    }
    return response;
}