import React from "react";
import Products from "./products";
export default class App extends React.Component{


  constructor(){
    super();
    this.state=({


      id:1,

      AllItem:true,
      KidsSection: true,
      MenSection: true,
    })
  }
  kids=()=>{
    this.setState({

     MenSection: false,
     KidsSection:true

    })
  }


  men=()=>{
    this.setState({
      MenSection:true,
      KidsSection: false,
    })
  }

  AllItem=()=>{
    this.setState({
      MenSection:true,
      KidsSection:true,
    })
  }
    render() {





      const KidsSection = [



        {
  
          id: 1,
          name: 'Kurta Pajama',
          img: 'image/kurta_kids.jpg',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },
  
        {
  
          id: 2,
          name: 'Frock',
          img: 'image/frok.webp',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },
  
        {
  
          id: 3,
          name: 'Sherwani',
          img: 'image/kid_sherwani.jpg',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },
        {
  
          id: 4,
          name: 'Krishna Suit',
          img: 'image/krishna.jpg',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },
  
        
  
      ]


      const MenSection = [

        {
  
          id: 1,
          name: 'Formal',
          img: 'image/formal.jpg',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },
  
  
        {
  
          id: 2,
          name: 'Kurta',
          img: 'image/kurta_men.webp',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },

        {
  
          id: 3,
          name: 'Blazer',
          img: 'image/blazer.webp',
          btn1: "Add To Basket",
          btn2: 'Buy Now'
        },

        {
  
          id: 4,
          name: 'Jacket',
          img: 'image/jacket.webp',
          btn1: "Add To Basket",
          btn2: 'Buy Now',
        },
  
  
      ]









return(

  <>
  
  <h1 className='bg-info text-center bg-info fw-bold p-4 text-white'> SHOPPPING CENTRE</h1>
  
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 text-center">


              <button className='btn btn-dark px-4 my-3 fw-bold' onClick={()=>this.AllItem()}>All Items</button>
              <button className='btn btn-outline-info px-4 my-3 fw-bold mx-5' onClick={() => this.kids()}>Kids Section</button>
              <button className='btn btn-danger px-4 my-3 fw-bold' onClick={()=>this.men()}>Men Section</button>
      </div>
      <div className="col-md-12 my-3">
      <div className="row">
        



        {
          this.state.KidsSection ?
          

          KidsSection.map((val,index)=>{
            return(
              
              <div className="col-md-3 mt-3"key={index}>
                <Products
                
                name= {val.name}
                img= {val.img}
                btn1= {val.btn1}
                btn2= {val.btn2}
                />
              </div>

            )
          }) :null
        }
        
{/* ******************************************************************** */}

        {


this.state.MenSection && 
          MenSection.map((val,index)=>{

            return(
              
              <div className="col-md-3 mt-3"key={index}>
              <Products
                
                name= {val.name}
                img= {val.img}
                btn1= {val.btn1}
                btn2= {val.btn2}
                />




              </div>
              
              
            
            )
          })






        }
       </div>
      </div>
    </div>
  </div>
  
  
  
  
  </>








)

 
    
  }
}