/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type HomeAllPostQueryVariables = {};
export type HomeAllPostQueryResponse = {
    readonly viewer: {
        readonly allPosts: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly description: string;
                    readonly imageUrl: string;
                }) | null;
            }) | null> | null;
        }) | null;
    };
};
export type HomeAllPostQuery = {
    readonly response: HomeAllPostQueryResponse;
    readonly variables: HomeAllPostQueryVariables;
};



/*
query HomeAllPostQuery {
  viewer {
    allPosts(last: 100, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allPosts",
  "storageKey": "allPosts(last:100,orderBy:\"createdAt_DESC\")",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 100,
      "type": "Int"
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": "createdAt_DESC",
      "type": "PostOrderBy"
    }
  ],
  "concreteType": "PostConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "PostEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Post",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "description",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "imageUrl",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeAllPostQuery",
  "id": null,
  "text": "query HomeAllPostQuery {\n  viewer {\n    allPosts(last: 100, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          id\n          description\n          imageUrl\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeAllPostQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeAllPostQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          v0
        ]
      }
    ]
  }
};
})();
(node as any).hash = '04e78ec327a7c91c3eb7eaa614518a76';
export default node;
