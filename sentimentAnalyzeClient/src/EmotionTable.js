import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {/*JSON.stringify(this.props.emotions)*/}
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(([key, value]) => {
                    return <tr><td>{key}</td><td>{value}</td></tr>
               })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;