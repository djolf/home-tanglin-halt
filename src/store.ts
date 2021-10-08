import { makeAutoObservable } from "mobx";

const PAGES = {
  home: {
    index: 0,
    url: "/",
    animation: ""
  },
  writeup: {
    index: 1,
    url: "/writeup",
    animation: ""
  },
  mv: {
    index: 2,
    url: "/music-video",
    animation: ""
  },
  portraits: {
    index: 3,
    url: "/portraits",
    animation: ""
  },
  sound: {
    index: 4,
    url: "/sound-gallery",
    animation: ""
  },
  stories: {
    index: 5,
    url: "/stories",
    animation: ""
  },
  thanks: {
    index: 6,
    url: "/thanks",
    animation: ""
  },
}

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
}

const dataStore = new DataStore();

export default dataStore;