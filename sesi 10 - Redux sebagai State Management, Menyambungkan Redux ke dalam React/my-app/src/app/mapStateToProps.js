import { connect } from "react-redux";
import CounterClass from "../features/counter/CounterClassComponent";

const mapStateToProps = (state) => ({
  localCount: state.counter.count,
});

export default connect(mapStateToProps)(CounterClass);
