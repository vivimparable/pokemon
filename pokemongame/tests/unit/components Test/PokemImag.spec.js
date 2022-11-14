import { shallowMount } from '@vue/test-utils'
import pokemonImage from '@/components/PokemonImage.vue'

describe('pokemonImage.vue', () => {
    let wrapper = shallowMount(pokemonImage)

    beforeEach(()=>{
       wrapper  = shallowMount(pokemonImage);
    });


    test('Props Image si es false', ()=>{
      const wrapper = shallowMount(pokemonImage,{
        props:{
          numberPokemon:100,
          showPokemon:false
        }
      })
      
     const [img1,img2] = wrapper.findAll('img');

     expect(img1.exists()).toBeTruthy();
     expect(img2).toBe(undefined);
     expect(img1.classes('hidden-pokemon')).toBeTruthy();
     expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    })

    test('Props Image si es true', ()=>{
      const wrapper = shallowMount(pokemonImage,{
        props:{
          numberPokemon:100,
          showPokemon:true
        }
      })
      
     const img = wrapper.find('img');

      expect(img.exists()).toBeTruthy();
      expect(img.classes('fade-in')).toBeTruthy();
      expect(img.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)
    })
})
