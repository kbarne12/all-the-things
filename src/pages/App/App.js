import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ManliestThings from '../ManliestThings/ManliestThings'
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import KenoThings from '../KenoThings/KenoThings'
import DavidThings from '../DavidThings/DavidThings'


class App extends Component {
  state = {  
    hamidsThings:[
    {
      name:"computer",
      image:"",
      attributes:["Doesn't load, stuff, everything instant"]
    },
    {
      name:"Beliefs",
      image:"",
      attributes:["Not to get too attatched to things"]
    },
    {
      name:"Skateboard",
      image:"",
      attributes:["I will die seeing if I can still drop in at 60","It's fun to jump"]
    }
  ],
   
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },
    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://i.imgur.com/C3PmdhO.jpg",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",  
        attributes: ["fluffy", "happy", "sleepy", "dumb"], 
      },
      {
        name: "Poptart??",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },

    ],
    mattsThings: [
      {
        name: "Michigan State Spartans",
        image: "https://www.everythingdoormats.com/images/products/michigan-state-university-spartans-round-area-rug-44.5-inches.jpg",  
        attributes: ["competitive", "tough", "hard working", "champions"],
      },
      {
        name: "Detroit Style Deep Dish Pizza",
        image: "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1558564215/photos/294912_original.jpg",
        attributes: ["delicious", "cheesy", "crispy crust", "not a taco"], 
      },
 ],
    DavidThings: [
      {
        name: "bbq",
        image: "https://i.imgur.com/GwgAEzP.jpg",  
        attributes: ["meat", "picanha", "churrasco", "sirloin cap"],
      },
      {
        name: "tiger",
        image: "https://i.imgur.com/GleAY3f.jpeg",  
        attributes: ["beautiful", "stripes", "fun", "animal", "(David acually own a tiger)"], 
      },
      {
        name: "Surf",
        image: "https://im-1.msw.ms/eengine/ce_images/eedfdb7c6f2cb918/DSC_660031ArlonFonmosa_960_640_s.jpg",  
        attributes: ["ocean", "barrel", "salt life", "sport"], 
      },
      {
        name: "Race Car",
        image: "https://car-images.bauersecure.com/pagefiles/68136/1056x594/zpor-004.jpg",  
        attributes: ["race", "Porsche", "IMSA", "911"], 
      },
  
    ], 
    kenoThings: [
      {
        name: "crab cakes",
        image: "https://i.imgur.com/Nt24dqV.jpg",  
        attributes: ["tasty", "fluffy", "lumpy", "yummy"],
      },
      {
        name: "xxl bully",
        image: "https://i.imgur.com/jZP0BJk.jpg",  
        attributes: ["huge", "cool", "fun", "animal", "smart"], 
      },
      {
        name: "Zeke",
        image: "https://i.imgur.com/ktmxjhS.jpg",  
        attributes: ["fast", "happy", "friendly", "hyper"], 
      },
      {
        name: "Manu",
        image: "https://i.imgur.com/CP8H6kD.jpg",  
        attributes: ["smart", "funny", "gentle", "witty"], 
      }, 
    ],

  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/the-manliest-things">Ben's Things</a><br/>
              <a href="/the-functional-things">Shahzad's Things</a><br/>
              <a href="/the-well-styled-things">David's Things</a><br/>

              <a href="/the-keno-things">Kentdrick's Things</a><br/>
               

              <a href="/the-michigan-things">Matt's Things</a><br/>

            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/the-manliest-things'
          render={()=> <ManliestThings things={this.state.bensThings} />}
        />
        <Route 
          exact path='/the-functional-things'
          render={()=> <FunctionalThings things={this.state.shahzadsThings} />}
        />
        <Route 
          exact path='/the-well-styled-things'
          render={()=> <StyledThings things={this.state.davidsThings} />}
        />
        <Route 
          exact path='/the-keno-things'
          render={()=> <KenoThings things={this.state.kenoThings} />}
          />
        <Route
          exact path='/the-michigan-things'
          render={()=> <StyledThings things={this.state.mattsThings} />}

        />
      </>
      
    );
  }
}
 
export default App;

