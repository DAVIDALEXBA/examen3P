Vue.component("my-hello",{
	template:`
	<h2>Estoy en my-hello</h2>
	`
});

Vue.component("my-categories",{
	template: `
	<div>
	
		<h2>Nueva Materia</h2>
		 
	    <form action="/examen/nuevo" method="POST" name="cat_form">
	        <div class="form-group">
		        <label>Nombre: </label><input type="text" name="nombre" class="form-control" ><br>
		       <button type="button" class="btn btn-primary" @click="fn_enviar">enviar</button>
		    </div>
	    </form>
    
        <ul class="list-group" v-if="categoria.length>0">
           <li class="list-group-item" v-for="c in categoria">{{c.id}}  {{c.nombre}} <a @click="fn_ver(c.id)" class="btn btn-primary" @click="opcion='agregar'">Ver preguntas</a>  <a @click="fn_ver(c.id)" class="btn btn-primary" @click="opcion='agregar'">Generar Examen</a></li>
	           
	           <div v-if="preguntas.length>0">
	           <ul class="list-group">
	           		<br><br>
	           		<h1>Lista de preguntas para esa materia!</h1>
					<h4 class="list-group-item"  v-for="c in preguntas">{{c}} <a class="btn btn-primary" >Eliminar pregunta</a></h4>	 
					     
	           </ul>
	           
	           </div>
	            
			      <div v-if="examen.length>0">
	           <ul class="list-group">
	           		<br><br>
	           		<h1>Lista de preguntas para el examen!</h1>
					<h4 class="list-group-item"  v-for="c in examen">{{c}}</h4>	 
					     
	           </ul>
	           
	           </div>    
             
       
        </ul>
        
        <div class="alert alert-danger" role="alert" v-else>
		  No hay materias!!
		</div>
		
		
		
	</div>
	`,
	props:['categoria', 'preguntas', 'examen'],
	mounted: function() {
		console.log('Iniciando componente my-categores')
		axios.get('/examen/todos')
	   .then(function (response) {
	     console.log(response.data);
	     this.app.categoria=response.data;
	  });
	},
	
	methods:{
		fn_enviar: function() {
			var fd= new FormData();
			fd.append("nombre", document.forms["cat_form"].nombre.value);
			axios({
			method: 'post',
			url: '/examen/nuevo',
			responseType: 'json',
			data:fd
			})
			.then(function (response) {
				console.log(response.data);
				this.app.categoria=response.data;
			})
		},
	
		fn_ver: function(id) {
			var fd= new FormData();
			fd.append("id", id);
			axios({
			method: 'post',
			url: '/examen/ver',
			responseType: 'json',
			data:fd
			})
			.then(function (response) {
				console.log(response.data);
				
				this.app.preguntas=response.data;
				var cadena = this.app.preguntas[0].preguntas;
				var indices = [];
				var indices2 = [];
				var examenes = [];
				for(var i = 0; i < cadena.length; i++) {
						if (cadena[i].toLowerCase() === "\n") indices.push(i);
				}

				var numero = indices.length + 1;
				
				for(var i = 0; i < 1; i++) {
				
											
						indices2[i] = this.app.preguntas[0].preguntas.split("¬");
						
					
				}
				
				
				var cadena = indices2.toString().trim(),
			    patron = /,/g,
			    nuevoValor    = " ",
			    nuevaCadena = cadena.replace(patron, nuevoValor);

				var cadena2 = nuevaCadena,
			    patron2 = /\n/g,
			    nuevoValor2    = " >> ",
			    nuevaCadena2 = cadena2.replace(patron2, nuevoValor2);
				this.app.preguntas=nuevaCadena2.split(" >> ");
				
				//al azar
				
				var n=this.app.preguntas.length;
				alert(n);
				
				for(var i=0; i<5; i++){
					numero=Math.floor(Math.random()*n);
					
					examenes[i] = (this.app.preguntas[numero]);
					alert(examenes[i]);
					
				}
				
				this.app.examen =  examenes;
				
			})
		}
	}
});


Vue.component("my-products",{
	template: `
	<div>
	
		<h2>Nueva Producto</h2>
		 
	    <form action="/categoria/nuevoProducto" method="POST" name="prod_form">
	        <div class="form-group">
		        <label>Nombre: </label><input type="text" name="nombre" class="form-control" >		       
		    </div>
		    <div class="form-group">
			    <label for="controlSelect">Categoria</label>
			    <select class="form-control" id="categoria" name="categoria">
			      <option v-for="c in categoria">{{c.nombre}}</option>
			    </select>
		    </div>
		    <div class="form-group">
		        <label>Cantidad: </label><input type="number" name="cantidad" class="form-control" >		       
		    </div>
		    
		    <button type="button" class="btn btn-primary" @click="fn_enviarProduct">Agregar</button>
	    </form>
	    
	    <h1>Lista de productos</h1>
	    <ul class="list-group" >
           <li class="list-group-item" v-for="p in producto">{{p.nombre}} <a class="btn btn-primary" @click="fn_eliminar(p.id)">Eliminar</a> <a class="btn btn-primary" @click="fn_eliminar(p.id)">Eliminar</a>   <a class="btn btn-primary" @click="fn_actualizar(p.id)">Actualizar</a></li>
           
           
        </ul>
        
    
        
	</div>  `,
	props:['categoria'],
	mounted: function() {
		console.log('Iniciando componente my-categores')
		axios.get('/examen/todos')
	   .then(function (response) {
	     console.log(response.data);
	     this.app.categoria=response.data;
	  });
		
	 
	},
	methods:{
		fn_enviarProduct: function() {
			var fd= new FormData();
			fd.append("nombre", document.forms["prod_form"].nombre.value);
			fd.append("categoria", document.forms["prod_form"].categoria.value);
			fd.append("cantidad", document.forms["prod_form"].cantidad.value);
			axios({
			method: 'post',
			url: '/categoria/nuevo',
			responseType: 'json',
			data:fd
			})
			.then(function (response) {
				console.log(response.data);
				this.app.producto=response.data;
			})
		},
		
		fn_eliminar: function(id) {
			var fd= new FormData();
			fd.append("id", id);
			
			axios({
			method: 'post',
			url: '/categoria/eliminar',
			responseType: 'json',
			data: fd
			})
			.then(function (response) {
				console.log(response.data);
				this.app.producto=response.data;
			})
		},
		
		fn_actualizar: function(id) {
			var fd= new FormData();
			fd.append("id", id);
			
			axios({
			method: 'post',
			url: '/categoria/eliminar',
			responseType: 'json',
			data: fd
			})
			.then(function (response) {
				console.log(response.data);
				this.app.producto=response.data;
			})
		}
	}
});


Vue.component("my-list",{
	template: `
	<div class="form-group">
                        <label for="controlSelect">Materia</label>
                        <select class="form-control" id="categoria" name="categoria">
                          <option v-for="c in categoria">{{c.id}} {{c.nombre}}</option>
                        </select>
                         
                    </div> `,
	props:['categoria'],
	mounted: function() {
		console.log('Iniciando componente my-categores')
		axios.get('/examen/todos')
	   .then(function (response) {
	     console.log(response.data);
	     this.app.categoria=response.data;
	  });
		
	 
	},
	methods:{
		
		fn_enviarExam: function() {
			
		}
	}
});


Vue.component('respuesta-component',{
    template:`
    <div class="resp_block">
        <div style="padding-left: 8px">
            <label for="resp">Respuesta</label><input type="text" size="40" v-bind:id="fn_name('resp',index,-1)" v-model:value="inputText" @keyup.enter="fn_add_resp">
            <input type="checkbox" v-model="checked">Respuesta correcta
            <input type="button" value="+" @click="fn_add_resp">
        </div>
        <ul v-if="preg.resps.length>0">
            <li v-for="(resp,idx) in preg.resps">
            {{resp.desc}} <input type="radio" v-bind:id="fn_name('_r',index,idx)" v-bind:name="fn_name('_r',index,-1)" v-bind:value="idx" :checked="resp.isTheRightAnswer" @change="fn_radio_change">{{resp.isTheRightAnswer}}
            </li>
        </ul>
    </div>
    `,
    data:function(){
        return {
            inputText:'',
            checked:true,
            picked:false
        }
    },
    methods:{
        fn_add_resp: function () {
            this.preg.resps.push({desc:this.inputText,isTheRightAnswer:this.checked});
            this.checked=false;
            this.inputText=''
        },
        fn_name:function(pre,mid,pos){
            return pre+'_'+mid+(pos>=0?'_'+pos:'')
        },
        fn_radio_change:function(e){
            for(var i=0;i<this.preg.resps.length;i++){
                this.preg.resps[i].isTheRightAnswer= (i== e.target.value)
            }
        },
    },
    mounted: function () {
        document.getElementById("resp_"+this.index).focus();
    },
    props:['index','preg']
});
function fn_clean_prepare(inStr){
    return inStr.replace('¬', ' ').replace('·', '.').replace("\n",'').trim();
}
var app = new Vue({
    el: '#app',
    data: {
        pregs: [],
        id: '',
        current_preg:'',
        data:'',
        message: 'Hello Vue!',
        categoria:[],
        preguntas:[],
        examen:[],
        producto:[],
        opcion:'menu'
    },
    methods: {
        fn_add: function () {
            this.pregs.push({desc: this.current_preg,resps:[]});
            this.current_preg=''
        },
        fn_remove_question:function(index)
        {
            console.log(index);
            this.pregs.splice(index,1)
        },
        fn_ver:function(){
            var arr=[];
            for(var i=0;i<this.pregs.length;i++){
                var index = -1;
                var resps=[];
                for(var j=0;j<this.pregs[i].resps.length;j++){
                    resps[j]=fn_clean_prepare(this.pregs[i].resps[j].desc);
                    if( this.pregs[i].resps[j].isTheRightAnswer) index=j;
                }
                arr.push(fn_clean_prepare(this.pregs[i].desc) + '¬'+ resps.join('·') + '¬' + index + '¬')
            }
            this.data=arr.join('\n');
            console.log(this.data);
            alert('Esto se mandaría al servidorj\n\n'+this.data);
            
            var id='';
            var fd= new FormData();
            
                var valor = $("#categoria option:selected").html();
               
                id = valor.split(" ", 1);
            	
            
            fd.append("id_materia", id);
			fd.append("preguntas", this.data);
			axios({
			method: 'post',
			url: '/examen/insertExamen',
			responseType: 'json',
			data:fd
			})
			.then(function (response) {
				console.log(response.data);
				
			})

        }
    },
    computed:{
    }
});
