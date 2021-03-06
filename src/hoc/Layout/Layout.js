import React,{Component} from 'react'
import css from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Aux from '../Auxo/Auxo'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component{
	state={
		showSideDrawer:false
	}
	sideDrawerClosedHandler=()=>{
		this.setState({
			showSideDrawer:false
		});
	}
	sideDrawerToggleHandler=()=>{
		this.setState((prevState)=>{
			return {showSideDrawer:!prevState.showSideDrawer};
		})
	}
	render(){
		return(
				<Aux>
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
				<Toolbar clicked={this.sideDrawerToggleHandler}/>
				<main className={css.Content}>
				{this.props.children}
				</main>

	</Aux>)
}}
export default Layout