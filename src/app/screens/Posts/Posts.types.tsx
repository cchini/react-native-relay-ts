import {HomePost_viewer} from '../Home/Home.types'

type Node = {
  node: ({
       id: string;
       description: string | null;
       imageUrl: string | null;
  }) | null;
}

type Props = {
  viewer?: HomePost_viewer
}

export {
  Props,
  Node,
}