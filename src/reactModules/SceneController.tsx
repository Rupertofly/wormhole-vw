import * as React from 'react';
enum SCENES {
  load,
  main,
}
export class SceneController extends React.Component {
  scene;
  constructor(props) {
    super(props);
    this.scene = SCENES.load;
  }
  render() {
    switch (this.scene) {
      case SCENES.load:
        return <p>hey mates</p>;
      default:
        break;
    }
  }
}