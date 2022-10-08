module.exports.handler = async (event) => {
    let response = {
        statusCode: 200,
        message: JSON.stringify('Hello world'),
        input: event
    }
    return response;
}