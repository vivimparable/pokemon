<template>

<div v-if="pokemonsNames.length == 0">
    <h1>Esperando a cargar la API. Aguarde unos segundos.</h1>
</div>

<div  v-else>
    <h1>¿Quién es este Pokemon?</h1>  
    <!--Imagen-->
    <h3>{{mensaje}}</h3>
        <imagen 
        :showPokemon="showfather" 
        :numberPokemon="numberFather"/>
    <!--Opciones-->

        <opciones v-if="showOptions"
        :BooleanName="showfather"
        :numberReal="numberFather" 
        :arrayHijo="pokemonsNames"
        v-on:changeValue="changeValueFather" />

</div>


</template>

<script>

import imagen from '@/components/PokemonImage'
import opciones from '@/components/PokemonOptions'

import pokemonAPI from '@/api/axios.js'

export default {
    data(){
        return{
            
            arrayPokemon:[],
            numberFather: 1,
            pokemonsNames:[],
            showfather:false,
            mensaje:"",
            showOptions:true,
            apiGet:true
            
            }
    },
components:{
    imagen,
    opciones
},methods:{
       CreateArray650 (){
        this.arrayPokemon =  Array.from(Array(650)).map((arg, index)=> index + 1);
        this.sortArray();

    },sortArray(){
        
        const mixedPokemons = this.arrayPokemon.sort( ()=> Math.random() -0.5);
        this.arrayPokemon = mixedPokemons.splice(0,4);
        this.numberRandom();
    },numberRandom(){
        const numberRandom = Math.floor(Math.random()*4)
        this.numberFather= this.arrayPokemon[numberRandom]
    },async pokemonName (){
        try {
    
        this.CreateArray650();
        const mapeo = this.arrayPokemon.map(a=> pokemonAPI.get(`${a}`));

        const newConst = await Promise.all(mapeo);
        this.pokemonsNames=[
           {name: newConst[0].data.name, id: newConst[0].data.id},
           {name: newConst[1].data.name, id: newConst[1].data.id},
           {name: newConst[2].data.name, id: newConst[2].data.id},
           {name: newConst[3].data.name, id: newConst[3].data.id}
        ]   
        } catch (error) {

        this.apiGet=false;
        error= alert('No se pudo conectar a la api :(')
        }
        },
      changeValueFather(value,name){
        
        
        if(value){
            this.showOptions=false;
            this.showfather=true;
            this.mensaje="Correcto, acertaste."
        }else{
            this.showOptions=false;
            this.showfather=true;
            this.mensaje="Oh no, fallasete, era "+ name[0].name+".";
        }
    
        setTimeout(() => {
            this.pokemonName();
            this.showOptions=true;
            this.showfather=false;
            this.mensaje="";
        }, 3000);
        
    }

},
mounted(){
    this.pokemonName();    
}


}
</script>

<style>

</style>