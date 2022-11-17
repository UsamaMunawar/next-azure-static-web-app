const { BlobServiceClient } = require('@azure/storage-blob');
const { DefaultAzureCredential } = require('@azure/identity');
const { v1: uuidv1 } = require('uuid');
require('dotenv').config();

module.exports = class BlobStorageService {
  constructor() {
    this.BlobStorageServiceInstance = new BlobServiceClient(
      `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );
    this.ContainerClient = this.createContainer('quickstart2');
  }
  //takes containerName as input and creates a container to use with this app
  async createContainer(containerName) {
    //get a reference to a container
    const containersList = this.BlobStorageServiceInstance.listContainers();
    let exists = false;
    for await (const container of containersList) {
      if (container.name === containerName) {
        exists = true;
        break;
      }
    }
    // const containerClient =
    //   this.BlobStorageServiceInstance.getContainerClient(containerName);
    // console.log({ containerClient });
    // const createContainerResponse = await containerClient.create();
    // console.log(
    //   `Container was created successfully. \n\trequestId:${createContainerResponse.requestId}\n\tURL: ${containerClient.url}`
    // );
  }
};
