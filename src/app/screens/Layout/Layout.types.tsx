
type layoutQueryVariables = {}
type layoutQueryResponse = {
    viewer: ({
      id: string
    }) | null;
}
type layoutQuery = {
     response: layoutQueryResponse;
     variables: layoutQueryVariables;
}

export {
  layoutQuery,
}