
let createDoubanDataGetter = require('./markall-douban-data-getter-func-creater');
// 存储路径
const STORE_PATH = 'douban-data-backup/';

let getDoubanWatchedMovies = createDoubanDataGetter("watchedMovies");
let getDoubanWillMovies = createDoubanDataGetter("willMovies");
let getDoubanwatchingMovies = createDoubanDataGetter("watchingMovies");


// getDoubanWatchedMovies("hqweay", STORE_PATH);
// getDoubanWillMovies("hqweay", STORE_PATH);
getDoubanwatchingMovies("hqweay", STORE_PATH);