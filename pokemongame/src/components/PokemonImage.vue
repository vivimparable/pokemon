<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" class="hidden-pokemon" :src="this.numberPokemonFunction" alt="Pokemon imagen">
        <img v-if="showPokemon" class="fade-in" :src="numberPokemonFunction" alt="Pokemon imagen">
    </div>
</template>

<script>
export default {
    props:{
        numberPokemon:{
            type:Number,
            
        },showPokemon:{
            type:Boolean,
        }
    },
computed:{
    numberPokemonFunction (){
        return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.numberPokemon}.svg`
    }
}
}
</script>

<style scoped>
    .pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 44%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}



</style>