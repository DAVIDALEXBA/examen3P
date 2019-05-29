package edu.ulsoaxaca.vuespring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ulsoaxaca.vuespring.mappers.CategoriaMapper;
import edu.ulsoaxaca.vuespring.mappers.ProductoMapper;
import edu.ulsoaxaca.vuespring.model.Categoria;
import edu.ulsoaxaca.vuespring.model.Producto;

@RequestMapping("/categoria")
@RestController
public class CategoriaController {

	@Autowired
	private CategoriaMapper categoriaMapper;
	@Autowired
	private ProductoMapper productoMapper;

	@GetMapping("/todas")
	public List<Categoria> todas() {
		return categoriaMapper.findAll();
	}
	
	@GetMapping("/todos")
	public List<Producto> todos() {
		return productoMapper.findAll();
	}
	
	

	@PostMapping("/nuevo")
	public List<Producto> nuevoProducto(@RequestParam("nombre") String nombre, @RequestParam("categoria") String categoria,
			@RequestParam("cantidad") String cantidad) {
		List<Categoria> categoriaId = productoMapper.findId(categoria);
		if (categoriaId != null) {
			String categoria_id = categoriaId.get(0).getId().toString();
			productoMapper.insert(nombre, categoria_id, cantidad);
		}

		return productoMapper.findAll();
	}
	@PostMapping("/nueva")
	public List<Categoria> nueva(@RequestParam("nombre") String nombre) {
		categoriaMapper.insert(nombre);
		return categoriaMapper.findAll();
	}
	
	@PostMapping("/eliminar")
	public List<Producto> eliminar(@RequestParam("id") String id) {
		categoriaMapper.delete(id);
		return productoMapper.findAll();
	}

	

	

}
