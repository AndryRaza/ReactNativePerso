import { createStore } from "redux";
import connexion from "./reducer/authReducer";


export default createStore(connexion)