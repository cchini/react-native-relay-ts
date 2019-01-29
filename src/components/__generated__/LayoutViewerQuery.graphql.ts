/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type LayoutViewerQueryVariables = {};
export type LayoutViewerQueryResponse = {
    readonly viewer: {
        readonly id: string;
    };
};
export type LayoutViewerQuery = {
    readonly response: LayoutViewerQueryResponse;
    readonly variables: LayoutViewerQueryVariables;
};



/*
query LayoutViewerQuery {
  viewer {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LayoutViewerQuery",
  "id": null,
  "text": "query LayoutViewerQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LayoutViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "LayoutViewerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = 'fbcf65a6e2b6cdee6179f96ec03f6fdb';
export default node;
