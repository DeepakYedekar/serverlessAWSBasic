'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "this is the fist function",
                input: event,
            }, null, 2
        )
}
};