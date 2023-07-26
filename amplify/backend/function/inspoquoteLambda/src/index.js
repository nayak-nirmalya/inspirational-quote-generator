/* Amplify Params - DO NOT EDIT
	API_INSPIRATIONALQUOTES_GRAPHQLAPIIDOUTPUT
	API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_ARN
	API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const sharp = require("sharp");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");

async function updateQuoteDDBObject() {
  const quoteTableName =
    process.env.API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_NAME;
  const quoteObjectID = "12232-234234-234234234-234234234";

  try {
    var quoteParams = {
      TableName: quoteTableName,
      Key: {
        id: quoteObjectID,
      },
      UpdateExpression: "SET #quotesGenerated = #quotesGenerated + :inc",
      ExpressionAttributeValues: {
        ":inc": 1,
      },
      ExpressionAttributeNames: {
        "#quotesGenerated": "quotesGenerated",
      },
      ReturnValues: "UPDATED_NEW",
    };

    const updateQuoteObject = await docClient.update(quoteParams).promise();
    return updateQuoteObject;
  } catch (error) {
    console.error("Error Updating Quote Object in DynamoDB: ", error);
  }
}

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
