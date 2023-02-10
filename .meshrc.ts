import {Config} from "@graphql-mesh/types/typings/config";

const config: Config = {
  "serve": {
    "fork": 1,
    "browser": false,
    "playground": true,
    "cors": {
      "origin": "*",
      "credentials": true
    },
  },
  "sources": [
    {
      "name": "Api1",
      "handler": {
        "graphql": {
          "endpoint": "https://graphql.contentful.com/content/v1/spaces/f8bqpb154z8p/environments/master?access_token=9d5de88248563ebc0d2ad688d0473f56fcd31c600e419d6c8962f6aed0150599",
          "credentials": "include",
          "batch": false
        }
      },
    },
    {
      "name": "Api2",
      "handler": {
        "graphql": {
          "source": "src/api2/schema.ts",
          "batch": false
        }
      },
    }
  ]
};

export default config;
