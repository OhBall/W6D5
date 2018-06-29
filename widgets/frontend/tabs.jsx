import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.select = this.select.bind(this);
  }

  select(idx) {

    this.setState({
      selected: idx
    });
  }

  render(){
    let objArr = this.props.objects.map ( (el, idx) => {
      let className = idx === this.state.selected ? "selected" : "";

      return(
        <li className={className} key={idx} onClick={() => this.select(idx)}>
          <header>
            <h1>{el.title}</h1>
          </header>
        </li>
      );
    });

    let className = `tab-content tab-${this.state.selected}`;

    return (
      <div className='tabs'>
        <h1>Tabs</h1>
        <ul className='tab-headers'>
          {objArr}
        </ul>
        <article className={className}>
          {this.props.objects[this.state.selected].content}
        </article>
      </div>
    );
  }
}

export default Tabs;
