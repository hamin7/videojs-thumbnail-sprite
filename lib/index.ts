import videojs from 'video.js';
import initializeThumbnailSprite from './utils/initializeThumbnailSprite';

const Plugin = videojs.getPlugin('plugin');

class ThumbnailSprite extends Plugin {
  private options: ThumbnailSprite.Options;

  constructor(player: videojs.Player, options?: ThumbnailSprite.Options) {
    super(player);
    this.options = options !== undefined ? options : [];

    // When player instance is ready, initialize the plugin
    this.player.ready(() => {
      initializeThumbnailSprite(
        this.player,
        this.options,
      )
    })
  }
}

videojs.registerPlugin('thumbnailSprite', ThumbnailSprite);

namespace ThumbnailSprite {
  export type Options = Array<Sprite>;
  export interface Sprite {
    url: string;      // thumbnail sprite's url
    start: number;    // start timestamp of this sprite in video
    duration: number; // duration of this sprite in video
    width: number;    // width of each preview image
    height: number;   // height of each preview image
    interval: number; // interval of each preview images in sprite
  };
}

export default ThumbnailSprite;
