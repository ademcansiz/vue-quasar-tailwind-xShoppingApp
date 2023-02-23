import { defineStore } from 'pinia'

export const useAddToCard = defineStore('AddToCard', {
  state:()=>({
    headphones: [{
      id:1,
      img:'assets/marshall.jpg',
      title:"Marshall Major IV",
      description:"Organic Cotton, Fairtrade Certifited",
      descriptionLong:"Marshall on-ear wireless headphones are durable and rugged, ready for whatever the day throws at you. Ergonomic design and phenomenal playtime mean you can listen endlessly. These Bluetooth headphones are durable and ready for whatever the day brings.",
      price:250,
    },{
        id:2,
      img:'assets/jbl.jpg',
      title:"JBL Tune 500Bt",
      description:"Organic Cotton, Fairtrade Certifited",
      descriptionLong:"Your lifestyle is active—you need wireless earbuds that can keep up. The Endurance Peak 3 is the perfect training partner, pumping your motivational playlists to you with up to 50 hours of playback and rich JBL Pure Bass Sound you can feel in your muscles. The durable IP68 dust and water proof design can handle the dustiest mountain trail and the sweatiest gym session, while a bendable TwistLock™ ear hook enhancer ensures a secure, comfortable fit that stays in no matter how you move your body. And with the ability to make crystal clear calls from anywhere and stay aware of your surroundings, you'll stay connected to the world no matter where your workout takes you.",
      price:200,
    },{
        id:3,
      img:'assets/philips.jpg',
      title:"Philips T2206",
      description:"Organic Cotton, Fairtrade Certifited",
      descriptionLong:"Whatever you listen to, you'll love the superior sound quality and comfort of our headphones. Discover sports models suitable for active lifestyles. Stylish true wireless headphones or premium wireless or wired over-ear Fidelio headphones designed specifically for the audiophile.",
      price:150,
    },{
        id:4,
      img:'assets/airpods.jpg',
      title:"AirPods Max",
      description:"Organic Cotton, Fairtrade Certifited",
      descriptionLong:"Introducing AirPods Max. It brings together the magical and effortless AirPods experience with high sound quality, creating a perfect harmony. Personal listening pleasure has never been more extraordinary.",
      price:350,
    },{
      id:5,
      img:'assets/sennheiser.jpg',
      title:"Sennheiser MOMENTUM 4 Wireless",
      description:"Organic Cotton, Fairtrade Certifited",
      descriptionLong:"For a truly tailored experience, download the Sennheiser Smart Control app, that makes it easy to customize the sound using the Built-in EQ, sound modes and the new Sound Personalization feature. This assesses your listening preferences and adjusts the listening experience according to your taste.",
      price:450,
    },
  ],
    cardHeadphones:[{

    }],

  }),

  getters: {
    getItemById: (state) => (id) => {
      return state.headphones.find(item => item.id === id)
    }
  }
    ,
  actions:{
    addHeadphone(newHeadphone){
    this.cardHeadphones.push(newHeadphone);
    }
  }

}
)
