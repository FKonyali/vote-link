import { PAGEITEMSIZE } from "../Resources/Contstants.js";

export const SliceByPage = (links, page) => links.slice(Math.max(0, PAGEITEMSIZE * (page - 1)), Math.min(PAGEITEMSIZE * page, links.length))