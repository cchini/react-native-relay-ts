type HomePost_viewer = {
  allPosts: ({
       edges: Array<({
           node: ({
               id: string;
               description: string | null;
               imageUrl: string | null;
          }) | null;
      }) | null> | null;
  }) | null;
}

type appQueryVariables = {}

type appQueryResponse = {
    viewer: ({
      allPosts: ({
        edges: Array<({
            node: ({
                id: string;
                description: string | null;
                imageUrl: string | null;
           }) | null;
       }) | null> | null;
   }) | null;
    }) | null;
}
type appQuery = {
     response: appQueryResponse;
     variables: appQueryVariables;
}

export {
  HomePost_viewer,
  appQueryVariables,
  appQuery,
}