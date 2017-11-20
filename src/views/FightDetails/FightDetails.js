import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Headers/Headers';
import './FightDetails.css';
import {Solid, Hollow} from '../../components/Buttons/Buttons';
import Instructions from '../../components/TabContainer/Instructions/Instructions';
import html from '../../components/TabContainer/Instructions/html-rules';
import axios from 'axios';

export default class FightDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option_selected: 'details',
            fight: {description:''}
        }
    }

    componentDidMount(){
        axios.get(`/api/getCatFight/${this.props.match.params.id}`)
        .then(res=>{console.log('direct res is...', res.data),this.setState({fight:res.data})})
    }

    showDetails(){
        this.setState({option_selected:'details'})
    }

    showSolutions(){
        this.setState({option_selected:'solutions'})
    }

    showTags(){

        console.log('show tags...', this.state.fight.tags)
        let tags = "";

        if(this.state.fight.tags){
            tags = this.state.fight.tags.map((tag,i)=>{
                return <div key={i}>{tag.tag_name}</div>
            })
        }
        return tags
    }
    
    render() {
        
        console.log('fight is now..', this.state.fight)

        return (
            <div className='fightdetails'>
                <Navbar/>

                <div className='fightdetails_body'>
                    <div className='fightdetails_full-header'>
                        <Header name={this.state.fight.name} difficulty={this.state.fight.difficulty} author={this.state.fight.author_id}/>
                        <div className='fightdetails_full-header-buttons'>
                            <Solid name='TRAIN'/>
                            <Hollow name='NEXT KATA'/>
                        </div>
                    </div>
                    <div className='fightdetails_options'>
                        <button id={this.state.option_selected==='details'?'fightdetails_selected':''} onClick={()=>this.showDetails()}>Details</button>
                        <button id={this.state.option_selected==='solutions'?'fightdetails_selected':''} onClick={()=>this.showSolutions()}>Solutions</button>
                    </div>
                    <div className='fightdetails_container'>
                        {this.state.option_selected === 'details' ? <div><Instructions description={html.deserialize(this.state.fight.description)} change={()=>{}}/></div>: ''}
                        {this.state.option_selected === 'solutions' ? 'solutions component here': ''}
                    </div>
                    {this.state.option_selected==='details'
                    ? 
                    <div className='fightdetails_tags'>
                        {this.showTags()}
                    </div>
                    :
                    ''
                    }
                </div>

            </div>
        )
    }
}