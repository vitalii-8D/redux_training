import {Component} from "react";
import {inc, dec} from "../../actions";
import {connect} from 'react-redux';

export class Home extends Component {

   onInc = () => {
      // appStore.dispatch(inc())
      this.props.increment();
   }
   onDec = () => {
      // appStore.dispatch(dec())
      this.props.decrement();
   }

   render() {

      const {count} = this.props;
      return (
         <div>
            <h2>Home component</h2>

            <div>Current count: {count}</div>
            <button type='button' className='btn btn-primary m-2' onClick={this.onInc}>Inc</button>
            <button type='button' className='btn btn-primary m-2' onClick={this.onDec}>Dec</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   const {counter: {count, property1, a}} = state;
   return {count, property1, a}
}
const mapDispatchToProps = {
   increment: inc,
   decrement: dec
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
