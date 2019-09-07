/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const commandName: msRest.OperationURLParameter = {
  parameterPath: "commandName",
  mapper: {
    required: true,
    serializedName: "commandName",
    type: {
      name: "String"
    }
  }
};
export const connectTimeoutInSeconds: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "connectTimeoutInSeconds"
  ],
  mapper: {
    serializedName: "connectTimeoutInSeconds",
    type: {
      name: "Number"
    }
  }
};
export const digitalTwinId: msRest.OperationURLParameter = {
  parameterPath: "digitalTwinId",
  mapper: {
    required: true,
    serializedName: "digitalTwinId",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "expand",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const interfaceName: msRest.OperationURLParameter = {
  parameterPath: "interfaceName",
  mapper: {
    required: true,
    serializedName: "interfaceName",
    type: {
      name: "String"
    }
  }
};
export const modelId: msRest.OperationURLParameter = {
  parameterPath: "modelId",
  mapper: {
    required: true,
    serializedName: "modelId",
    type: {
      name: "String"
    }
  }
};
export const responseTimeoutInSeconds: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "responseTimeoutInSeconds"
  ],
  mapper: {
    serializedName: "responseTimeoutInSeconds",
    type: {
      name: "Number"
    }
  }
};