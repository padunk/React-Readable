import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import { NavLink, Link, withRouter } from "react-router-dom";
import _ from "lodash";
import { loadCategories } from "../actions";

class NavigationBar extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div className='navigation-menu'>
        <h1
          className='app-header'
          style={{ letterSpacing: "5px", fontSize: "50px" }}>
          <Link to='/' title='Home' className='app-header-link'>
            REDDIT CLONE
          </Link>
        </h1>
        <ul className='nav-list-ul'>
          {categories === undefined ? (
            <Loading />
          ) : (
            categories.map((c, idx) => (
              <li key={c.path + idx} className='nav-list inline'>
                <NavLink
                  exact
                  className='nav-link'
                  to={c.path === "all" ? "/" : `/${c.path}`}>
                  {_.capitalize(c.name)}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (data) => ({
  categories: data.categoryReducer.categories,
});

NavigationBar = connect(mapStateToProps, {
  loadCategories,
})(NavigationBar);

export default withRouter(NavigationBar);
