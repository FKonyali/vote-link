import { LOCALSTORAGEKEY } from "../Resources/Contstants.js";
import DummyData from "../Resources/DummyData";

export const LoadFromLocalStorage = () => (JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) ?? JSON.stringify(DummyData.links)));

export const SaveToLocalStorage = (links) => { localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(links)) }