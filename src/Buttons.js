// import React, { Component } from 'react';
// import pokemons from './data';
// import Pokemon from './Pokemon';


// class Buttons extends Component {
//   constructor(){
//     super();

//     this.handleClick = this.handleClick.bind(this);
        
//     this.state = {
//       type: ''
//     };    
//   }
    
//   handleClick1 = () => {    
//     this.setState({
//       type: 'Fire'
//     })    
//   }

//   handleClick2 = () => {    
//     this.setState({
//       type: 'Psychic'
//     })    
//   }

//   render() {
//     const { pokemons } = this.props;
//     const { type } = this.type;

//     return(
//       <div className='buttons'>
//         <section className="fire">
//           <button type="button" onClick={this.handleClick1}>          
//             Fire
//           </button>
//         </section>        
//         <section className="psychic">
//           <button type="button" onClick={this.handleClick2}>          
//             Psychic
//           </button>
//         </section>        
//       </div>
//     );
//   }
// }

// export default Buttons;

// https://app.betrybe.com/course/front-end/react/components-with-state/solutions