import { Dispatch } from "react";
import { connect } from "react-redux";
import { ITodoState } from "../redux/reducer";
import TodoComponent from "./TodoComponent";

const mapStateToProps = (state: ITodoState) => state;
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);