Vue.component("my-hello",{
	template:`
	<h2>Estoy en my-hello</h2>
	`
});

Vue.component("my-categories",{
	template: `
	<div>
	
		<h2>Nueva Categoria</h2>
		 
	    <form action="/categoria/nueva" method="POST" name="cat_form">
	        <div class="form-group">
		        <label>Nombre: </label><input type="text" name="nombre" class="form-control" ><br>
		       <button type="button" class="btn btn-primary" @click="fn_enviar">enviar</button>
		    </div>
	    </form>
    
        <ul class="list-group" v-if="categoria.length>0">
           <li class="list-group-item" v-for="c in categoria">{{c.id}}  {{c.nombre}}</li>
           
        </ul>
        <div class="alert alert-danger" role="alert" v-else>
		  No hay categorias!!
		</div>
		
	</div>
	`,
	props:['categoria'],
	mounted: function() {
		console.log('Iniciando componente my-categores')
		axios.get('/categoria/todas')
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
			url: '/categoria/nueva',
			responseType: 'json',
			data:fd
			})
			.then(function (response) {
				console.log(response.data);
				this.app.categoria=response.data;
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
	props:['categoria','producto'],
	mounted: function() {
		console.log('Iniciando componente my-categores')
		axios.get('/categoria/todas')
	   .then(function (response) {
	     console.log(response.data);
	     this.app.categoria=response.data;
	  });
		
	  axios.get('/categoria/todos')
		  .then(function (response) {
		    console.log(response.data);
		    this.app.producto=response.data;
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


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    categoria:[],
    producto:[],
    opcion:'menu'
  },
  methods:{
	  fn_categoria: function() {
		
	}
  }
})
