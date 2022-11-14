<template>
  <div class="options-container">

        <ul v-for="i in arrayHijo" :key="i.id">
            <li @click="isThisOne(i.id)" >{{i.name}}</li>  
        </ul>

  </div>
</template>

<script>
export default {

props:{
    arrayHijo:{
      typeof:Array,
      required:true
    },
    numberReal:{
      type:Number,
    },

    BooleanName:{
      type:Boolean,
      required:true
    },


  },methods:{

    
    isThisOne (value){
      let number = this.arrayHijo.filter(a=> a.id ==this.numberReal );
    if(value == this.numberReal ){
        this.$emit('changeValue', true)

    }else{
        this.$emit('changeValue', false, number)
    }
           
        
    }
  },mounted(){


  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>