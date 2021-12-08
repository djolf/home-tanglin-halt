import { makeAutoObservable } from "mobx";
import { Pages } from "./components/model";

const PAGES = {
  home: {
    index: Pages.HOME,
    url: "/",
    animation: ""
  },
  writeup: {
    index: Pages.WRITEUP,
    url: "/writeup",
    animation: ""
  },
  mv: {
    index: Pages.MV,
    url: "/music-video",
    animation: ""
  },
  portraits: {
    index: Pages.PORTRAITS,
    url: "/portraits",
    animation: ""
  },
  sound: {
    index: Pages.SOUND,
    url: "/sound-gallery",
    animation: ""
  },
  stories: {
    index: Pages.STORIES,
    url: "/stories",
    animation: ""
  },
  thanks: {
    index: Pages.THANKS,
    url: "/thanks",
    animation: ""
  },
}

const PLAYLIST = [
  {
    id: 'NE_DjVZOLVE',
    name: 'Along the Old Railroad'
  },
  {
    id: 'fxEhOL8CHno',
    name: 'Block 37 Roundabout'
  },
  {
    id: 'fR8mYb7q0sM',
    name: 'HDB Garden'
  },
  {
    id: 'vcCb5MBjFx8',
    name: 'Outside Kian Seng San Kee'
  },
  {
    id: 'Q5A9H_kf5gs',
    name: 'Sinclair\'s House, Block 37' 
  },
  {
    id: 'GCGGFBJabl4',
    name: 'The Old SIT Flats'
  },
  {
    id: 'F632yTmuALs',
    name: 'The Town Square'
  },
]

class DataStore {
  currentPage = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(value:number) {
    this.currentPage = value;
  }

  switchPage(name: "home" | "writeup" | "mv" | "portraits" | "sound" | "stories" | "thanks") {
    this.setCurrentPage(PAGES[name].index);
    window.location.href = PAGES[name].url;
  }

  getPlaylist() {
    return PLAYLIST;
  }
}

const dataStore = new DataStore();

export default dataStore;