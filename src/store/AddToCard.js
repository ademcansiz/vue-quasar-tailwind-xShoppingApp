import { defineStore } from 'pinia'

export const useAddToCard = defineStore('AddToCard', {
  state:()=>({
    headphones: [{
      id:1,
      img:'assets/marshall.jpg',
      title:"Marshall Headphone",
      description:"Organic Cotton, Fairtrade Certifited",
      price:250,
    },{
        id:2,
      img:'assets/jbl.jpg',
      title:"JBL Tune 500Bt Headphone",
      description:"Organic Cotton, Fairtrade Certifited",
      price:200,
    },{
        id:3,
      img:'assets/philips.jpg',
      title:"Philips Headphone",
      description:"Organic Cotton, Fairtrade Certifited",
      price:150,
    },{
        id:4,
      img:'assets/airpods.jpg',
      title:"Airpods Headphone",
      description:"Organic Cotton, Fairtrade Certifited",
      price:350,
    },{
      id:5,
      img:'assets/sennheiser.jpg',
      title:"Sennheiser Headphone",
      description:"Organic Cotton, Fairtrade Certifited",
      price:450,
    },
  ],
    cardHeadphones:[{

    }],

  }),

  actions:{
    addHeadphone(newHeadphone){
    this.cardHeadphones.push(newHeadphone);
    }
  }

}
)
