import './city-month.css';
import React from "react";
import { Component } from 'react';


class CityMonth extends Component {
        constructor(props) {
          super(props);
          this.state = {
            items: [],
            city: "",
            date: "",
          };
        }
      
        handleChangeItem = event => {
          this.setState({ city: event.target.value });
        };

        handleChangeDate = event => {
          this.setState({ date: event.target.value });
        };
      
        getUnique(arr, comp) {
          const unique = arr
            //store the comparison values in array
            .map(e => e[comp])
      
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
      
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])
      
            .map(e => arr[e]);
      
          return unique;
        }
      
        componentDidMount() {
          fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
          .then(res => res.json())
          .then(items => this.setState({ items: items }))
          .catch(err => console.error(err));
        }
      
        render() {
              
          const uniqueItem = this.getUnique(this.state.items, "city");
          const uniqueDate = this.getUnique(this.state.items, "date");
      
          const items = this.state.items;
          const city = this.state.city;
          const date = this.state.date;
      
          const filterDropdownCity = items.filter(function(result) {
            return result.id === city;
          });
          const filterDropdownDate = items.filter(function(result) {
            return result.id === date;
          });
      
          return (
            <div className="city-month">
              <h3> City: </h3>
              <form className="submit" onSubmit={this.handleSubmitItem}>
                <label>
                  <select
                    value={this.state.city}
                    onChange={this.handleChangeItem}
                    class="form-select input-border-color"
                  >
                    {uniqueItem.map(city => (
                      <option key={city.id} >
                        {city.city}
                      </option>
                    ))}
                  </select>
                </label>
                
                <div>
                  {filterDropdownCity.map(city => (
                    <div key={city.id} style={{ margin: "10px" }}>
                      {city.city}
                      <br />
                    </div>
                  ))}
                </div>
              </form>

              <h3> Month: </h3>
              <form  className="submit" onSubmit={this.handleSubmitItem}>
                <label>
                  <select
                    value={this.state.date}
                    onChange={this.handleChangeItem}
                    class="form-select input-border-color"
                  >
                    {uniqueDate.map(date => (
                      <option key={date.id} >
                        {date.date}
                      </option>
                    ))}
                  </select>
                </label>
                
                <div>
                  {filterDropdownDate.map(date => (
                    <div key={date.id} style={{ margin: "10px" }}>
                      {date.date}
                      <br />
                    </div>
                  ))}
                </div>
              </form>
            </div>
          );
        }
      }
      

export default CityMonth;


// constructor(props) {
//     super(props);
//     this.state = {
//       courses: [],
//       course: ""
//     };
//   }

//   handleChangeCourse = event => {
//     this.setState({ course: event.target.value });
//   };

//   getUnique(arr, comp) {
//     const unique = arr
//       //store the comparison values in array
//       .map(e => e[comp])

//       // store the keys of the unique objects
//       .map((e, i, final) => final.indexOf(e) === i && i)

//       // eliminate the dead keys & store unique objects
//       .filter(e => arr[e])

//       .map(e => arr[e]);

//     return unique;
//   }

//   componentDidMount() {
//     const courses = require("./courses.json");
//     this.setState({ courses: courses });
//   }

//   render() {
        
//     const uniqueCouse = this.getUnique(this.state.courses, "tag");

//     const courses = this.state.courses;
//     const course = this.state.course;

//     const filterDropdown = courses.filter(function(result) {
//       return result.tag === course;
//     });

//     return (
//       <div className="city-month">
//         <h3> City: </h3>
//         <form onSubmit={this.handleSubmitCourse}>
//           <label>
//             <select
//               value={this.state.course}
//               onChange={this.handleChangeCourse}
//               class="form-select input-border-color"
//             >
//               {uniqueCouse.map(course => (
//                 <option key={course.id} value={course.tag}>
//                   {course.tag}
//                 </option>
//               ))}
//             </select>
//           </label>
          
//           <div>
//             {filterDropdown.map(course => (
//               <div key={course.id} style={{ margin: "10px" }}>
//                 {course.course}
//                 <br />
//               </div>
//             ))}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }