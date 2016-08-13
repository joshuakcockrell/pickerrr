// POST COLOR
'use strict';
console.log('Loading function');

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();

/**
 * Provide an event that contains the following keys:
 *
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    // So we can test on aws console
    if ('body-json' in event) {
        event = event['body-json'];
    }
    
    var colorsPerPartition = 1000;
    var partitionKey = Math.floor(event.id / colorsPerPartition) + 1;
    event['partitionKey'] = partitionKey.toString();

    var object = {
        'TableName': 'Color',
        'Item': event
    }
    
    dynamo.putItem(object, callback);
};