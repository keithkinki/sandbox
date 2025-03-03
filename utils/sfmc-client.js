const FuelRest = require('fuel-rest');

const options = {
  auth: {
    clientId: process.env.SFMC_CLIENT_ID,
    clientSecret: process.env.SFMC_CLIENT_SECRET,
    authOptions: {
      authVersion: 2,
      accountId: process.env.SFMC_ACCOUNT_ID,
    },
    authUrl: `https://${process.env.SFMC_SUBDOMAIN}.auth.marketingcloudapis.com/v2/token`,
  },
  origin: `https://${process.env.SFMC_SUBDOMAIN}.rest.marketingcloudapis.com/`,
  globalReqOptions: {
  },
};

const client = new FuelRest(options);

/**
 * Save data in DE
 * @param externalKey
 * @param data
 * @returns {?Promise}
 */
const saveData = async (externalKey, data) => {
  console.log('kn1');
  console.log(data);
  client.post(
    {
      uri: '/hub/v1/dataevents/key:sandbox-de/rowset',
      headers: {
        'Content-Type': 'application/json',
      },
      json: true,
      body: data
    }
  ).then(response => 
    {
      console.log('kn2');
      console.log(response);
    }).catch(err => console.log(err));
};

module.exports = {
  client,
  saveData,
};
